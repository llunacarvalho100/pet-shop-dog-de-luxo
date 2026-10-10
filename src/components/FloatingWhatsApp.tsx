/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppDirectUrl } from '../services/businessService';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsAppUrl = buildWhatsAppDirectUrl(
    'Olá, Wesley e equipe do Dog de Luxo! Gostaria de agendar um horário para o meu pet 🐾'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:block bg-stone-900 text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg border border-stone-700 whitespace-nowrap animate-fade-in">
          Agende direto no WhatsApp do Wesley 🐾
        </div>
      )}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        aria-label="Falar com Pet Shop Dog de Luxo no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
