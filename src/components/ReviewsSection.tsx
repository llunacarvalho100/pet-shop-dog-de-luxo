/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';
import {
  BUSINESS_DATA,
  getCustomerReviews,
} from '../repositories/businessRepository';
import { buildWhatsAppDirectUrl } from '../services/businessService';
import { CustomerReview, ServiceCategory } from '../types';

type FilterType = 'all' | ServiceCategory;

interface ReviewCardProps {
  review: CustomerReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
          ))}
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
          <CheckCircle className="w-3 h-3 text-emerald-700" />
          <span>Google Verificado</span>
        </div>
      </div>

      <div className="text-xs font-bold text-stone-900 tracking-tight">
        &ldquo;{review.highlightPhrase}&rdquo;
      </div>

      <p className="text-sm text-stone-600 leading-relaxed italic">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>

    <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 font-bold flex items-center justify-center text-xs">
          {review.avatarInitials}
        </div>
        <div>
          <div className="font-bold text-stone-900">{review.author}</div>
          <div className="text-[11px] text-stone-500">{review.location}</div>
        </div>
      </div>
      <div className="text-[11px] text-stone-400">Google Maps</div>
    </div>
  </div>
);

export const ReviewsSection: React.FC = () => {
  const reviews = getCustomerReviews();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredReviews =
    activeFilter === 'all'
      ? reviews
      : reviews.filter((r) => r.serviceCategory === activeFilter);

  const whatsAppDirect = buildWhatsAppDirectUrl(
    'Olá! Vi as avaliações nota 5.0 no Google Maps e gostaria de agendar um horário para o meu pet!'
  );

  return (
    <section id="avaliacoes" className="py-20 bg-stone-50/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Google Scorecard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
              Prova Social Verídica
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
              Avaliado com 5.0 estrelas por quem mais importa: os tutores.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Mais de {BUSINESS_DATA.reviewCount} depoimentos públicos no Google
              Maps comprovam nosso padrão de paciência, higiene impecável e amor aos pets.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-xs shrink-0">
            <div className="text-center pr-4 border-r border-stone-200">
              <div className="text-3xl font-extrabold text-stone-900 tabular-nums">
                5.0
              </div>
              <div className="flex items-center justify-center gap-0.5 text-amber-500 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">
                {BUSINESS_DATA.reviewCount}+ Avaliações no Google
              </div>
              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-950 font-semibold mt-1"
              >
                <span>Ver avaliações no Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter buttons - interactive segmented controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Todos os Depoimentos
          </button>
          <button
            onClick={() => setActiveFilter('puppy')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'puppy'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Primeiro Banho & Idosos
          </button>
          <button
            onClick={() => setActiveFilter('transport')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'transport'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Táxi Dog em Casa
          </button>
          <button
            onClick={() => setActiveFilter('boutique')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'boutique'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Boutique & Atendimento
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Bottom CTA after proof */}
        <div className="rounded-2xl bg-emerald-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-luxury text-xl font-bold">
              Quer ver seu pet feliz, limpinho e relaxado também?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Fale diretamente com o Wesley e agende seu horário com antecedência.
            </p>
          </div>
          <a
            href={whatsAppDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-emerald-950 bg-amber-300 hover:bg-amber-200 rounded-xl transition-colors shadow shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
