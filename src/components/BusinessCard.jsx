'use client';

import { useState } from 'react';
import { MapPin, Star } from 'lucide-react';

export default function BusinessCard({ business }) {
  const [copiedField, setCopiedField] = useState(null);

  const {
    name,
    rating,
    reviewsCount,
    address,
    phone,
    website,
    whatsapp,
  } = business;

  const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : '';
  const whatsappHref = whatsapp
    ? (whatsapp.startsWith('http') ? whatsapp : `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`)
    : (cleanPhone ? `https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}` : '#');

  const handleCopy = (text, fieldName, e) => {
    e.stopPropagation();
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-md transition-all flex flex-col justify-between h-full space-y-5">
      
      {/* Title, Rating, Address */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {name}
        </h3>

        <div className="flex items-center gap-2 text-xs font-semibold">
          <div className="flex items-center text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
            <span>{rating || '4.5'}</span>
          </div>
          <span className="text-slate-400 font-normal">·</span>
          <span className="text-slate-500 font-medium">{reviewsCount || 0} reviews</span>
        </div>

        {address && (
          <div className="flex items-start gap-1.5 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{address}</span>
          </div>
        )}
      </div>

      {/* Direct Contact Fields returned from n8n */}
      <div className="space-y-3 pt-2">
        
        {/* PHONE SUPPORT */}
        {phone && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              PHONE SUPPORT
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold text-slate-900 truncate">
                {phone}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={(e) => handleCopy(phone, 'phone', e)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  ) : (
                    'Copy'
                  )}
                </button>
                <a
                  href={`tel:${cleanPhone}`}
                  className="px-3 py-1 text-[11px] font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}

        {/* WHATSAPP CONTACT */}
        {(whatsapp || phone) && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              WHATSAPP CONTACT
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold text-slate-900 truncate">
                {whatsapp || phone}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={(e) => handleCopy(whatsappHref, 'whatsapp', e)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  {copiedField === 'whatsapp' ? (
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  ) : (
                    'Copy URL'
                  )}
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* WEB ADDRESS */}
        {website && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              WEB ADDRESS
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-blue-600 font-mono truncate">
                {website}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={(e) => handleCopy(website, 'website', e)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  {copiedField === 'website' ? (
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  ) : (
                    'Copy URL'
                  )}
                </button>
                <a
                  href={website.startsWith('http') ? website : `https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-[11px] font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                >
                  Visit Now
                </a>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
