/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, CalendarCheck, PhoneCall } from 'lucide-react';
import { BUSINESS_DATA } from '../repositories/businessRepository';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-stone-900 group whitespace-nowrap shrink-0"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-300 flex items-center justify-center font-serif-luxury font-bold text-lg shadow-sm">
              D
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif-luxury text-xl font-bold tracking-tight text-emerald-950">
                Dog de Luxo
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-700 font-semibold">
                Pet Shop & Spa
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#servicos"
              className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0"
            >
              Serviços
            </a>
            <a
              href="#primeiro-banho"
              className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0"
            >
              Primeiro Banho
            </a>
            <a
              href="#taxi-dog"
              className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0"
            >
              Táxi Dog
            </a>
            <a
              href="#avaliacoes"
              className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0"
            >
              Avaliações 5.0★
            </a>
            <a
              href="#localizacao"
              className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0"
            >
              Localização
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick Phone */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_DATA.phoneCallUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0"
              title="Ligar para o Pet Shop"
            >
              <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
              <span>{BUSINESS_DATA.phoneFormatted}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-950 hover:bg-emerald-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Agendar Horário</span>
            </button>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAFAF8] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#servicos"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-stone-100 transition-colors"
            >
              Serviços de Estética
            </a>
            <a
              href="#primeiro-banho"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-stone-100 transition-colors"
            >
              Primeiro Banho (Filhotes & Idosos)
            </a>
            <a
              href="#taxi-dog"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-stone-100 transition-colors"
            >
              Simulador Táxi Dog Guarulhos
            </a>
            <a
              href="#avaliacoes"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-stone-100 transition-colors"
            >
              Avaliações Reais (Google 5.0)
            </a>
            <a
              href="#localizacao"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-stone-100 transition-colors"
            >
              Localização & Horários
            </a>
          </nav>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                closeMenu();
                onOpenBooking();
              }}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-emerald-950 rounded-lg shadow-sm"
            >
              Agendar no WhatsApp
            </button>
            <a
              href={BUSINESS_DATA.phoneCallUrl}
              className="text-center py-2 text-xs font-semibold text-stone-600"
            >
              Ligar para {BUSINESS_DATA.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
