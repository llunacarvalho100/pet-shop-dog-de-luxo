/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BUSINESS_DATA,
  NEIGHBORHOOD_RATES,
  PET_SERVICES,
} from '../repositories/businessRepository';
import {
  BookingRequest,
  BookingValidationResult,
  BusinessStatus,
  NeighborhoodRate,
  PetService,
} from '../types';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function findServiceById(serviceId: string): PetService | undefined {
  return PET_SERVICES.find((service) => service.id === serviceId);
}

export function findNeighborhoodById(neighborhoodId: string): NeighborhoodRate | undefined {
  return NEIGHBORHOOD_RATES.find((n) => n.id === neighborhoodId);
}

export function calculateTaxiDogSummary(neighborhoodId: string): {
  feeText: string;
  minutesText: string;
  name: string;
} {
  const neighborhood = findNeighborhoodById(neighborhoodId);
  if (!neighborhood) {
    return { feeText: 'Sob consulta', minutesText: 'Consulte via WhatsApp', name: 'Guarulhos' };
  }
  return {
    feeText: formatCurrency(neighborhood.feeAmount),
    minutesText: neighborhood.estimatedMinutes,
    name: neighborhood.name,
  };
}

export function getBusinessOpenStatus(date: Date = new Date()): BusinessStatus {
  const day = date.getDay(); // 0 is Sunday
  const hour = date.getHours();
  const isSunday = day === 0;
  const isWorkingHours = !isSunday && hour >= 8 && hour < 18;

  if (isSunday) {
    return {
      isOpen: false,
      statusLabel: 'Fechado no momento (Domingo)',
      detailLabel: 'Abrimos segunda-feira às 08:00',
    };
  }
  if (isWorkingHours) {
    return {
      isOpen: true,
      statusLabel: 'Aberto agora até as 18:00',
      detailLabel: 'Atendimento e Táxi Dog disponíveis hoje',
    };
  }
  return {
    isOpen: false,
    statusLabel: 'Fechado no momento',
    detailLabel: 'Atendimento normal das 08:00 às 18:00',
  };
}

export function validateBookingForm(request: BookingRequest): BookingValidationResult {
  const errors: Record<string, string> = {};

  if (!request.tutorName.trim()) {
    errors.tutorName = 'Por favor, informe seu nome';
  }
  if (!request.petName.trim()) {
    errors.petName = 'Por favor, informe o nome do seu pet';
  }
  if (!request.tutorPhone.trim() || request.tutorPhone.replace(/\D/g, '').length < 8) {
    errors.tutorPhone = 'Informe um telefone ou WhatsApp válido com DDD';
  }
  if (!request.serviceId) {
    errors.serviceId = 'Selecione o serviço desejado';
  }
  if (request.needsTaxiDog && !request.neighborhoodId) {
    errors.neighborhoodId = 'Selecione seu bairro para o Táxi Dog';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

function buildPetDetailsSummary(request: BookingRequest): string {
  const breed = request.petBreed ? ` (${request.petBreed})` : '';
  const sizeMap: Record<string, string> = {
    pequeno: 'Pequeno porte',
    medio: 'Médio porte',
    grande: 'Grande porte',
    gigante: 'Porte gigante',
  };
  return `🐾 *Pet:* ${request.petName}${breed} - ${sizeMap[request.petSize] || request.petSize}`;
}

function buildTaxiTransportSummary(request: BookingRequest): string {
  if (!request.needsTaxiDog) {
    return '🚗 *Transporte:* O tutor levará até a loja';
  }
  const neighborhood = findNeighborhoodById(request.neighborhoodId);
  const regionName = neighborhood ? neighborhood.name : 'Guarulhos';
  return `🚗 *Táxi Dog:* Sim, buscar em ${regionName}`;
}

export function formatWhatsAppMessage(request: BookingRequest): string {
  const service = findServiceById(request.serviceId);
  const serviceName = service ? service.title : 'Banho & Tosa';
  const shiftMap: Record<string, string> = {
    manha: 'Manhã (08h às 12h)',
    tarde: 'Tarde (13h às 18h)',
    qualquer: 'Qualquer horário disponível',
  };
  const lines = [
    '✨ *Olá, Wesley e equipe do Pet Shop Dog de Luxo!*',
    'Gostaria de solicitar um agendamento para o meu pet:',
    '',
    `👤 *Tutor(a):* ${request.tutorName}`,
    `📱 *WhatsApp:* ${request.tutorPhone}`,
    buildPetDetailsSummary(request),
    `✂️ *Serviço desejado:* ${serviceName}`,
    `📅 *Previsão de Data:* ${request.preferredDay || 'Próximo dia disponível'}`,
    `⏰ *Turno preferido:* ${shiftMap[request.preferredShift] || 'Manhã'}`,
    buildTaxiTransportSummary(request),
  ];
  if (request.notes.trim()) {
    lines.push(`📝 *Observações:* ${request.notes.trim()}`);
  }
  lines.push('', 'Poderiam me confirmar a disponibilidade de horário? Obrigado(a)!');
  return lines.join('\n');
}

export function buildWhatsAppDirectUrl(customMessage: string): string {
  const cleanPhone = BUSINESS_DATA.whatsappNumber;
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function buildQuickServiceWhatsAppUrl(serviceTitle: string): string {
  const message = [
    'Olá, equipe do Dog de Luxo! 👋',
    `Gostaria de agendar o serviço: *${serviceTitle}*.`,
    'Quais horários vocês têm disponíveis essa semana?',
  ].join('\n');
  return buildWhatsAppDirectUrl(message);
}

export function buildTaxiDogDirectWhatsAppUrl(neighborhoodName: string): string {
  const message = [
    'Olá! Gostaria de consultar o agendamento de banho com *Táxi Dog* 🚗🐾',
    `Bairro de busca: *${neighborhoodName}* em Guarulhos.`,
    'Como funciona a disponibilidade e os horários?',
  ].join('\n');
  return buildWhatsAppDirectUrl(message);
}
