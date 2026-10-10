/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, MessageCircle, AlertCircle, Check } from 'lucide-react';
import { handleBookingSubmission } from '../controllers/bookingController';
import {
  getNeighborhoodRates,
  getPetServices,
} from '../repositories/businessRepository';
import { BookingRequest, PetSize, PreferredShift } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const defaultInitialForm: BookingRequest = {
  tutorName: '',
  tutorPhone: '',
  petName: '',
  petBreed: '',
  petSize: 'pequeno',
  serviceId: 'banho-tosa-completo',
  preferredDay: '',
  preferredShift: 'manha',
  needsTaxiDog: false,
  neighborhoodId: 'jardim-moreira',
  notes: '',
};

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState<BookingRequest>({
    ...defaultInitialForm,
    serviceId: initialServiceId || defaultInitialForm.serviceId,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const services = getPetServices();
  const neighborhoods = getNeighborhoodRates();

  if (!isOpen) return null;

  const updateField = <K extends keyof BookingRequest>(
    key: K,
    val: BookingRequest[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = handleBookingSubmission(formData);
    if (!result.success && result.errors) {
      setErrors(result.errors);
      return;
    }
    setSubmitted(true);
    if (result.whatsAppUrl) {
      window.open(result.whatsAppUrl, '_blank');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-stone-50">
          <div>
            <h3 className="font-serif-luxury text-xl font-bold text-emerald-950">
              {submitted ? 'Quase pronto!' : 'Pré-Agendamento Inteligente'}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {submitted
                ? 'Sua mensagem foi gerada para o WhatsApp do Pet Shop'
                : 'Preencha os dados e confirme o horário direto no WhatsApp'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/50"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-stone-900">
              Tudo pronto para falar com o Wesley!
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Caso a conversa do WhatsApp não tenha aberto automaticamente,
              clique no botão verde abaixo para enviar os detalhes do seu pet.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Reabrir WhatsApp</span>
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center py-3 px-5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Tutor fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  value={formData.tutorName}
                  onChange={(e) => updateField('tutorName', e.target.value)}
                  placeholder="Ex: Gabrielle Silva"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
                {errors.tutorName && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.tutorName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Seu WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.tutorPhone}
                  onChange={(e) => updateField('tutorPhone', e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
                {errors.tutorPhone && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.tutorPhone}
                  </p>
                )}
              </div>
            </div>

            {/* Pet info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nome do Pet *
                </label>
                <input
                  type="text"
                  value={formData.petName}
                  onChange={(e) => updateField('petName', e.target.value)}
                  placeholder="Ex: Laica, Thor"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
                {errors.petName && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.petName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Raça
                </label>
                <input
                  type="text"
                  value={formData.petBreed}
                  onChange={(e) => updateField('petBreed', e.target.value)}
                  placeholder="Ex: Shih Tzu, SRD"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Porte
                </label>
                <select
                  value={formData.petSize}
                  onChange={(e) => updateField('petSize', e.target.value as PetSize)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                >
                  <option value="pequeno">Pequeno (até 10kg)</option>
                  <option value="medio">Médio (10kg a 20kg)</option>
                  <option value="grande">Grande (20kg a 35kg)</option>
                  <option value="gigante">Gigante (acima 35kg)</option>
                </select>
              </div>
            </div>

            {/* Service & Shift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Serviço Desejado *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => updateField('serviceId', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                >
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Turno Preferido
                </label>
                <select
                  value={formData.preferredShift}
                  onChange={(e) =>
                    updateField('preferredShift', e.target.value as PreferredShift)
                  }
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                >
                  <option value="manha">Manhã (08h às 12h)</option>
                  <option value="tarde">Tarde (13h às 18h)</option>
                  <option value="qualquer">Qualquer horário disponível</option>
                </select>
              </div>
            </div>

            {/* Taxi dog option */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needsTaxiDog}
                  onChange={(e) => updateField('needsTaxiDog', e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-800 focus:ring-emerald-800"
                />
                <span>Preciso de Táxi Dog (buscar e levar no meu portão)</span>
              </label>

              {formData.needsTaxiDog && (
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Bairro em Guarulhos:
                  </label>
                  <select
                    value={formData.neighborhoodId}
                    onChange={(e) => updateField('neighborhoodId', e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  >
                    {neighborhoods.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Special notes */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Cuidados especiais / Observações (opcional)
              </label>
              <input
                type="text"
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                placeholder="Ex: 1º banho, tem medo de secador, alergia a perfume"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-emerald-950 hover:bg-emerald-900 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Confirmar e Abrir no WhatsApp</span>
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-2">
                Você conversará diretamente com a equipe do Pet Shop Dog de Luxo.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
