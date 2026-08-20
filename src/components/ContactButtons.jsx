'use client';

import { Phone, MessageSquare, Globe } from 'lucide-react';

export default function ContactButtons({ phone, whatsapp, website, onWhatsAppClick, onCallClick, onWebsiteClick }) {
  const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : '';
  const cleanWhatsapp = whatsapp ? whatsapp.replace(/[^0-9+]/g, '') : cleanPhone;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {phone && (
        <a
          href={`tel:${cleanPhone}`}
          onClick={onCallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>
      )}

      {(whatsapp || phone) && (
        <a
          href={`https://wa.me/${cleanWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsAppClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      )}

      {website && (
        <a
          href={website.startsWith('http') ? website : `https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWebsiteClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-colors"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Visit Website</span>
        </a>
      )}
    </div>
  );
}
