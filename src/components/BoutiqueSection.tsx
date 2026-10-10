/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingBag, Sparkles, Heart, Pill, MessageCircle } from 'lucide-react';
import { buildWhatsAppDirectUrl } from '../services/businessService';

interface BoutiqueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const BoutiqueItem: React.FC<BoutiqueItemProps> = ({
  icon,
  title,
  description,
  tag,
}) => (
  <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-xs space-y-3">
    <div className="flex items-center justify-between">
      <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/50">
        {icon}
      </div>
      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
        {tag}
      </span>
    </div>
    <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export const BoutiqueSection: React.FC = () => {
  const whatsAppUrl = buildWhatsAppDirectUrl(
    'Olá! Gostaria de consultar os itens da Boutique Pet (lacinhos, roupinhas, panettones ou medicamentos) disponíveis no Dog de Luxo!'
  );

  return (
    <section className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            Estilo & Saúde Pet
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Boutique & Farmácia: mimos exclusivos para o seu melhor amigo.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Além do banho de alta qualidade, encontre lacinhos artesanais
            exclusivos, caminhas, roupinhas e itens essenciais de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BoutiqueItem
            icon={<Sparkles className="w-5 h-5" />}
            title="Lacinhos Artesanais"
            description="Confeccionados à mão com tecidos nobres, elásticos suaves que não puxam os pelos e pedrarias delicadas."
            tag="Exclusividade"
          />
          <BoutiqueItem
            icon={<Heart className="w-5 h-5" />}
            title="Moda Pet & Agasalhos"
            description="Roupinhas quentes e confortáveis para o inverno guarulhense, vestidos leves e bandanas personalizadas."
            tag="Conforto"
          />
          <BoutiqueItem
            icon={<ShoppingBag className="w-5 h-5" />}
            title="Snacks & Panettones Caninos"
            description="Petiscos saudáveis livres de corantes artificiais e opções sazonais comemorativas que os cães amam."
            tag="Gourmet"
          />
          <BoutiqueItem
            icon={<Pill className="w-5 h-5" />}
            title="Farmácia de Cuidados"
            description="Antipulgas e carrapatos, vermífugos, protetores de patinhas e soluções auriculares recomendadas."
            tag="Saúde Diária"
          />
        </div>

        <div className="pt-2 flex justify-center">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-emerald-950 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors border border-stone-200 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Consultar Disponibilidade de Acessórios no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
