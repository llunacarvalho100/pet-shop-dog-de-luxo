/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Car,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { getNeighborhoodRates } from '../repositories/businessRepository';
import {
  buildTaxiDogDirectWhatsAppUrl,
  calculateTaxiDogSummary,
} from '../services/businessService';

export const TaxiDogCalculator: React.FC = () => {
  const neighborhoods = getNeighborhoodRates();
  const [selectedId, setSelectedId] = useState<string>(neighborhoods[0].id);

  const summary = calculateTaxiDogSummary(selectedId);
  const whatsAppUrl = buildTaxiDogDirectWhatsAppUrl(summary.name);

  return (
    <section id="taxi-dog" className="py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
            Comodidade no seu Portão
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Táxi Dog Seguro em Guarulhos: buscamos e entregamos seu pet.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sem trânsito nem estresse no seu dia a dia. Transporte próprio
            climatizado, com caixas individuais higienizadas e monitoramento
            constante via WhatsApp.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Neighborhood Selector */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label
                  htmlFor="neighborhood-select"
                  className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2"
                >
                  Selecione seu Bairro ou Região em Guarulhos:
                </label>
                <div className="relative">
                  <select
                    id="neighborhood-select"
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3.5 text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent transition"
                  >
                    {neighborhoods.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.name} {n.isHeadquarterZone ? '★ Sede da Loja' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Safety guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Caixas de transporte desinfetadas entre cada pet</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Ar-condicionado e ventilação suave</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Avisos de saída e chegada em tempo real via WhatsApp</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Atendimento pontual de segunda a sábado</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quote Result Display */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-950 to-stone-900 p-6 sm:p-7 text-white shadow-md space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Simulação de Táxi Dog
                    </span>
                  </div>
                  <span className="text-xs text-amber-300 font-medium">
                    Guarulhos - SP
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-stone-400">Região Selecionada</div>
                    <div className="text-lg font-bold text-white">
                      {summary.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-stone-400">Tempo Estimado</div>
                      <div className="text-sm font-bold text-amber-200 mt-0.5">
                        {summary.minutesText}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-stone-400">Taxa Estimada</div>
                      <div className="text-sm font-bold text-emerald-300 mt-0.5 tabular-nums">
                        {summary.feeText}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-emerald-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir Táxi Dog para {summary.name}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
