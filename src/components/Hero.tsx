/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../repositories/businessRepository';
import { buildWhatsAppDirectUrl } from '../services/businessService';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const defaultWhatsAppUrl = buildWhatsAppDirectUrl(
    'Olá! Gostaria de agendar um banho com carinho para o meu pet no Dog de Luxo 🐾'
  );

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-stone-100/60 via-[#FAFAF8] to-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Social Proof Kicker - Clean unboxed text with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 tracking-wide">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span className="font-bold text-stone-900 tabular-nums">5.0</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-700">Nota máxima no Google Maps</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500 tabular-nums">354+ avaliações reais</span>
            </div>

            {/* Magnetic Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 leading-[1.15] text-balance">
              O tratamento de luxo e carinho que seu melhor amigo merece em Guarulhos.
            </h1>

            {/* Subheadline with concrete proof */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty">
              Avaliado com nota máxima 5.0 por mais de 350 tutores apaixonados.
              Banho relaxante, tosa estética especializada e Táxi Dog com quem realmente ama o que faz.
            </p>

            {/* Trust markers unboxed list */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-stone-600 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                Táxi Dog seguro climatizado
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-600" />
                Acolhimento para filhotes & idosos
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Cosméticos hipoalergênicos
              </span>
            </div>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Agendar pelo WhatsApp</span>
              </button>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl shadow-sm hover:border-stone-300 transition-all whitespace-nowrap"
              >
                <span>Conhecer Serviços</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

            {/* Local Trust Note */}
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
              <span>
                Atendendo {BUSINESS_DATA.neighborhood}, Cocaia, Macedo, Bom Clima e toda Guarulhos.
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 shadow-xl border border-stone-800/40">
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative flex items-center justify-between pb-6 border-b border-stone-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 font-serif-luxury text-lg font-bold">
                    ★
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      Pet Shop Dog de Luxo
                    </h3>
                    <p className="text-xs text-stone-300">
                      R. Jaroslav Hajek, 104 · Jd. Moreira
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-amber-300 tabular-nums">
                    5.0 / 5.0
                  </div>
                  <div className="text-[10px] text-stone-300 tracking-wider uppercase">
                    Google Maps
                  </div>
                </div>
              </div>

              {/* Highlighted Verified Quote */}
              <div className="relative my-6 space-y-3">
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-stone-300 text-xs font-medium">
                    Experiência Real
                  </span>
                </div>
                <blockquote className="text-sm sm:text-base font-normal italic text-stone-200 leading-relaxed">
                  &ldquo;O Wesley e a equipe tiveram uma paciência de ouro no 1º banho da minha cachorrinha.
                  Ela voltou cheirosa, tranquila e com um lacinho lindo!&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs text-stone-300 pt-1">
                  <span className="font-semibold text-white">Gabrielle Rodrigues</span>
                  <span>Tutor(a) em Guarulhos</span>
                </div>
              </div>

              {/* Feature Grid Inside Hero */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-700/60">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-amber-300">Táxi Dog Próprio</div>
                  <div className="text-[11px] text-stone-300 mt-0.5">Buscamos no seu portão</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-emerald-300">Sem Sedativos</div>
                  <div className="text-[11px] text-stone-300 mt-0.5">Cuidado e paciência</div>
                </div>
              </div>

              {/* Direct Booking Link on Card */}
              <div className="mt-6 pt-2">
                <a
                  href={defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-emerald-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
