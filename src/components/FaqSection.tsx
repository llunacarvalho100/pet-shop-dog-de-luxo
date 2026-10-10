/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getFrequentlyAskedQuestions } from '../repositories/businessRepository';
import { FaqItem } from '../types';

const FaqAccordionItem: React.FC<{
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => (
  <div className="border border-stone-200 rounded-2xl bg-white overflow-hidden transition-all shadow-xs">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-5 text-left text-sm sm:text-base font-bold text-stone-900 hover:text-emerald-950 transition-colors cursor-pointer"
      aria-expanded={isOpen}
    >
      <span>{item.question}</span>
      <ChevronDown
        className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
          isOpen ? 'rotate-180 text-emerald-900' : ''
        }`}
      />
    </button>
    {isOpen && (
      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
        {item.answer}
      </div>
    )}
  </div>
);

export const FaqSection: React.FC = () => {
  const faqs = getFrequentlyAskedQuestions();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
            Dúvidas Frequentes
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Tudo o que você precisa saber sobre o nosso atendimento.
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            Transparência total para você e seu melhor amigo se sentirem em casa.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FaqAccordionItem
              key={idx}
              item={faq}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
