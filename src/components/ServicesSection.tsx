/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Sparkles,
  Heart,
  Car,
  ShoppingBag,
  Clock,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { getPetServices } from '../repositories/businessRepository';
import {
  buildQuickServiceWhatsAppUrl,
  formatCurrency,
} from '../services/businessService';
import { PetService } from '../types';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

const renderServiceIcon = (category: PetService['category']) => {
  switch (category) {
    case 'hygiene':
      return <Sparkles className="w-5 h-5 text-emerald-800" />;
    case 'puppy':
      return <Heart className="w-5 h-5 text-rose-700" />;
    case 'transport':
      return <Car className="w-5 h-5 text-amber-700" />;
    case 'boutique':
      return <ShoppingBag className="w-5 h-5 text-purple-700" />;
    default:
      return <Sparkles className="w-5 h-5 text-emerald-800" />;
  }
};

const ServiceCard: React.FC<{
  service: PetService;
  onBook: (id: string) => void;
}> = ({ service, onBook }) => {
  const whatsAppUrl = buildQuickServiceWhatsAppUrl(service.title);

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition-all">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200/80">
            {renderServiceIcon(service.category)}
          </div>
          <span className="text-xs font-semibold text-stone-500 tracking-wide uppercase">
            {service.tag}
          </span>
        </div>

        <div>
          <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
            {service.title}
          </h3>
          <p className="text-xs text-stone-500 mt-1">{service.subtitle}</p>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed">
          {service.description}
        </p>

        <div className="pt-2 border-t border-stone-100">
          <div className="text-xs font-semibold text-stone-800 mb-2">
            Incluso neste serviço:
          </div>
          <ul className="space-y-2">
            {service.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-stone-600"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-200 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-stone-500">
            <Clock className="w-3.5 h-3.5" />
            <span>Aprox. {service.durationMinutes} min</span>
          </span>
          <div className="text-right">
            <span className="text-[11px] text-stone-400">A partir de</span>{' '}
            <span className="text-base font-bold text-emerald-950 tabular-nums">
              {formatCurrency(service.priceFrom)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onBook(service.id)}
            className="w-full py-2.5 px-3 text-xs font-semibold text-emerald-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap text-center cursor-pointer"
          >
            Pré-Agendar
          </button>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors whitespace-nowrap text-center inline-flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToBook,
}) => {
  const services = getPetServices();

  return (
    <section id="servicos" className="py-20 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            Cuidado Especializado
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Serviços pensados para a saúde, bem-estar e estética do seu pet.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Utilizamos apenas cosméticos hipoalergênicos e técnicas gentis de
            manejo sem estresse. Escolha o serviço ideal para o seu melhor amigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onSelectServiceToBook}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
