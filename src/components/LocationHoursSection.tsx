/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  MapPin,
  Clock,
  PhoneCall,
  Navigation,
  Compass,
  CheckCircle,
} from 'lucide-react';
import { BUSINESS_DATA } from '../repositories/businessRepository';
import { getBusinessOpenStatus } from '../services/businessService';

export const LocationHoursSection: React.FC = () => {
  const currentStatus = getBusinessOpenStatus();

  return (
    <section id="localizacao" className="py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
            Fácil Acesso em Guarulhos
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Venha nos visitar no Jardim Moreira ou chame o Táxi Dog.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Ambiente climatizado, arejado, higienizado e projetado com foco no conforto e segurança do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business details & realtime status */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-6">
              {/* Real-time Status Badge */}
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div
                  className={`w-3 h-3 rounded-full ${
                    currentStatus.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
                  }`}
                />
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    {currentStatus.statusLabel}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentStatus.detailLabel}
                  </div>
                </div>
              </div>

              {/* Address detail */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Endereço Completo</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    {BUSINESS_DATA.address} — {BUSINESS_DATA.neighborhood}
                  </p>
                  <p className="text-xs text-stone-500">
                    {BUSINESS_DATA.city} - {BUSINESS_DATA.state}, CEP {BUSINESS_DATA.zipCode}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1 font-mono">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Plus Code: {BUSINESS_DATA.plusCode}</span>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Horário de Funcionamento</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    {BUSINESS_DATA.openingHoursDescription}
                  </p>
                  <p className="text-xs text-stone-500">
                    Domingos: Fechado para descanso dos nossos colaboradores
                  </p>
                </div>
              </div>

              {/* Phone call */}
              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Telefone Fixo / WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    {BUSINESS_DATA.phoneFormatted}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Atendimento imediato para dúvidas e agendamentos
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-950 hover:bg-emerald-900 rounded-xl transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-300" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href={BUSINESS_DATA.phoneCallUrl}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-all border border-stone-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-stone-600" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Card & Nearby Landmarks */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                Referência e Proximidade
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Localizado estrategicamente no <strong>Jardim Moreira</strong>, com fácil acesso pelo Jardim Cocaia, Avenida Brigadeiro Faria Lima, Bosque Maia e Bom Clima.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="text-xs font-bold text-stone-900">
                Destaques da Nossa Estrutura:
              </div>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Área de banho e secagem com vidraça transparente para acompanhamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Ambiente esterilizado diariamente com bactericidas veterinários</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Estacionamento rápido e seguro em frente à loja para tutores</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-emerald-950 to-stone-900 p-5 text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-amber-300">Prefere não sair de casa?</div>
                <div className="text-xs text-stone-300 mt-0.5">Peça o Táxi Dog e buscamos seu pet com carinho!</div>
              </div>
              <a
                href="#taxi-dog"
                className="px-3.5 py-2 text-xs font-semibold bg-white text-emerald-950 rounded-lg hover:bg-stone-100 transition whitespace-nowrap shrink-0"
              >
                Ver Taxas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
