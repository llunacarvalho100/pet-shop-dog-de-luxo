/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Gift, Smile, Award, MessageCircle } from 'lucide-react';
import { buildWhatsAppDirectUrl } from '../services/businessService';

interface FirstBathSpotlightProps {
  onOpenBooking: () => void;
}

export const FirstBathSpotlight: React.FC<FirstBathSpotlightProps> = ({
  onOpenBooking,
}) => {
  const whatsAppUrl = buildWhatsAppDirectUrl(
    'Olá! Tenho um filhote/pet idoso e gostaria de saber mais sobre o Primeiro Banho com adaptação carinhosa.'
  );

  return (
    <section id="primeiro-banho" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-amber-50/70 via-stone-50 to-emerald-50/40 p-8 sm:p-12 border border-amber-200/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-900 bg-amber-100/70 px-3 py-1 rounded-md">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Especialidade Reconhecida em Guarulhos</span>
              </div>

              <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 tracking-tight leading-snug">
                Primeiro banho sem traumas: paciência e afeto com filhotes e pets idosos.
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Sabemos o receio que todo tutor sente ao deixar um filhotinho pela primeira vez ou um companheiro idoso que necessita de cuidados articulares. No <strong>Pet Shop Dog de Luxo</strong>, o <strong>Wesley e nossa equipe</strong> conduzem o processo com amor, conversa mansa, temperatura controlada e reforço positivo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                  <Smile className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Dessensibilização Gradual</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">Apresentação suave da água, toalhas e secador silencioso.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                  <Gift className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Mimo de Boas-Vindas</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">Seu filhotinho ganha brinde e lembrancinha do 1º banho.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                  <Heart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Pausas para Descanso</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">Respeitamos o ritmo do animal, sem pressão nem correria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                  <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Pisos Antiderrapantes</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">Segurança biomecânica total para cães com displasia ou idosos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-950 hover:bg-emerald-900 rounded-xl shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Tirar Dúvidas sobre Filhotes</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <span>Agendar Adaptação</span>
                </button>
              </div>
            </div>

            {/* Testimonial highlight card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold">
                  <span>★★★★★</span>
                  <span className="text-stone-400">·</span>
                  <span className="text-stone-600">Depoimento Real do Google</span>
                </div>
                <p className="text-stone-700 text-sm italic leading-relaxed">
                  &ldquo;Meu coração apertou na hora de deixar a Laica filhotinha, mas o carinho e atenção do Wesley foram indescritíveis. Ela voltou feliz da vida, cheirosa, relaxada e com um presentinho que guardamos até hoje! O melhor pet de Guarulhos.&rdquo;
                </p>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-stone-900">Gabrielle Rodrigues</div>
                    <div className="text-stone-500 text-[11px]">Tutora da Laica · Jardim Moreira</div>
                  </div>
                  <span className="text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md text-[11px]">
                    1º Banho
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
