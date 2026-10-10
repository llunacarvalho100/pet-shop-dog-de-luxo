/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageSquareQuote, Car, HeartHandshake } from 'lucide-react';
import { BUSINESS_DATA } from '../repositories/businessRepository';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtext: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, subtext }) => (
  <div className="flex items-start gap-3.5 p-4 sm:p-5">
    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 shrink-0">
      {icon}
    </div>
    <div>
      <div className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight tabular-nums">
        {value}
      </div>
      <div className="text-xs font-semibold text-stone-800 mt-0.5">{label}</div>
      <div className="text-[11px] text-stone-500 mt-0.5">{subtext}</div>
    </div>
  </div>
);

export const TrustStatsStrip: React.FC = () => {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          <StatItem
            icon={<Star className="w-5 h-5 fill-amber-500 text-amber-500" />}
            value={`${BUSINESS_DATA.googleRating.toFixed(1)} / 5.0`}
            label="Nota Máxima no Google"
            subtext="Classificação unânime"
          />
          <StatItem
            icon={<MessageSquareQuote className="w-5 h-5 text-emerald-800" />}
            value={`${BUSINESS_DATA.reviewCount}+`}
            label="Avaliações Verificadas"
            subtext="Tutores reais de Guarulhos"
          />
          <StatItem
            icon={<Car className="w-5 h-5 text-amber-700" />}
            value="Táxi Dog"
            label="Transporte Climatizado"
            subtext="Busca e entrega segura"
          />
          <StatItem
            icon={<HeartHandshake className="w-5 h-5 text-rose-700" />}
            value="100%"
            label="Cuidado & Paciência"
            subtext="Zero sedativos ou pressa"
          />
        </div>
      </div>
    </section>
  );
};
