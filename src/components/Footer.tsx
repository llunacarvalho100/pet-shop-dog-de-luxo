/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_DATA } from '../repositories/businessRepository';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-serif-luxury font-bold text-lg">
                D
              </span>
              <span className="font-serif-luxury text-xl font-bold tracking-tight text-white">
                Dog de Luxo
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Cuidado exclusivo, carinho de verdade e excelência estética para o seu pet em Guarulhos. Nota 5.0 no Google Maps com base em 354+ avaliações reais.
            </p>
            <div className="text-xs text-amber-300 font-semibold">
              ★ 5.0 no Google Maps (Classificação Máxima)
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-amber-300 transition-colors">
                  Banho & Tosa Estética
                </a>
              </li>
              <li>
                <a href="#primeiro-banho" className="hover:text-amber-300 transition-colors">
                  Primeiro Banho & Idosos
                </a>
              </li>
              <li>
                <a href="#taxi-dog" className="hover:text-amber-300 transition-colors">
                  Simulador de Táxi Dog
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-300 transition-colors">
                  Depoimentos Reais de Tutores
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-300 transition-colors">
                  Localização no Jardim Moreira
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Contato & Localização
            </div>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_DATA.address} — {BUSINESS_DATA.neighborhood}, {BUSINESS_DATA.city} - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={BUSINESS_DATA.phoneCallUrl} className="hover:text-white">
                  {BUSINESS_DATA.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_DATA.openingHoursDescription}</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Área de Atendimento
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Atendemos toda Guarulhos com Táxi Dog especializado: Jardim Moreira, Jardim Cocaia, Bom Clima, Paraventi, Macedo, Vila Rio, Jardim Maia e Centro.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Falar no WhatsApp do Pet Shop →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Pet Shop Dog de Luxo. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Cuidado feito com</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>para os pets de Guarulhos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
