'use client';

import { useState } from 'react';
import { X, Star, MapPin, Phone, MessageSquare, Globe, ArrowLeft, Check, Sparkles } from 'lucide-react';

export default function BusinessDetailsModal({ business, onClose }) {
  const [copiedField, setCopiedField] = useState(null);

  if (!business) return null;

  const {
    name,
    category,
    rating,
    reviewsCount,
    address,
    city,
    phone,
    website,
    whatsapp,
    description,
    openingHours,
  } = business;

  const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : '';
  const whatsappHref = whatsapp
    ? (whatsapp.startsWith('http') ? whatsapp : `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`)
    : (cleanPhone ? `https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}` : '#');

  const handleCopy = (text, fieldName) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scheduleDays = [
    { day: 'Monday', hours: openingHours || '24 Hours' },
    { day: 'Tuesday', hours: openingHours || '24 Hours' },
    { day: 'Wednesday', hours: openingHours || '24 Hours' },
    { day: 'Thursday', hours: openingHours || '24 Hours' },
    { day: 'Friday', hours: openingHours || '24 Hours' },
    { day: 'Saturday', hours: openingHours || '24 Hours' },
    { day: 'Sunday', hours: openingHours || '24 Hours' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Breadcrumb matching Figma Screenshot 3 */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <span>Search Results</span>
          <span>&gt;</span>
          <span className="text-slate-900 font-bold">{name}</span>
        </div>

        {/* Header Block matching Figma Screenshot 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{name}</h2>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <div className="flex items-center text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                <span>{rating ? rating.toFixed(1) : '4.8'}</span>
              </div>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">{reviewsCount || 214} reviews</span>
              <span className="text-slate-300">·</span>
              <span className="text-blue-600 uppercase font-bold">{category}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{address}</span>
            </div>
          </div>

          {/* Top Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            {website && (
              <a
                href={website.startsWith('http') ? website : `https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
              >
                Visit Website
              </a>
            )}

            {phone && (
              <a
                href={`tel:${cleanPhone}`}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
              >
                Call Now
              </a>
            )}
          </div>
        </div>

        {/* Main Grid Section (Contact Info + Business Hours) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left 2 Cols: Contact Information matching Figma Screenshot 3 */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Contact Information</h3>

            {/* Phone Row */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                PHONE SUPPORT
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-slate-900">{phone || 'Not available'}</span>
                {phone && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(phone, 'phone')}
                      className="px-3 py-1 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                    >
                      {copiedField === 'phone' ? <span className="text-emerald-600 font-bold">Copied!</span> : 'Copy'}
                    </button>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="px-3.5 py-1 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="h-px bg-slate-200/80 w-full" />

            {/* WhatsApp Row */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                WHATSAPP CONTACT
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-slate-900">{whatsapp || phone || 'Not available'}</span>
                {(whatsapp || phone) && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(whatsappHref, 'whatsapp')}
                      className="px-3 py-1 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                    >
                      {copiedField === 'whatsapp' ? <span className="text-emerald-600 font-bold">Copied!</span> : 'Copy URL'}
                    </button>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="h-px bg-slate-200/80 w-full" />

            {/* Web Address Row */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                WEB ADDRESS
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className={`text-xs font-semibold ${website ? 'text-blue-600 font-mono' : 'text-amber-900 font-bold'}`}>
                  {website || 'No website detected'}
                </span>
                {website ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(website, 'website')}
                      className="px-3 py-1 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                    >
                      {copiedField === 'website' ? <span className="text-emerald-600 font-bold">Copied!</span> : 'Copy URL'}
                    </button>
                    <a
                      href={website.startsWith('http') ? website : `https://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      Visit Now
                    </a>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-amber-800 bg-amber-200/80 px-3 py-1 rounded">
                    Website Opportunity
                  </span>
                )}
              </div>
            </div>

            <div className="h-px bg-slate-200/80 w-full" />

            {/* Exact Address */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                EXACT ADDRESS
              </span>
              <span className="text-xs font-medium text-slate-700 block">{address}</span>
            </div>

          </div>

          {/* Right 1 Col: Business Hours matching Figma Screenshot 3 */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Business Hours</h3>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Open Now
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {scheduleDays.map((item) => (
                <div key={item.day} className="flex items-center justify-between text-slate-600">
                  <span>{item.day}</span>
                  <span className="font-semibold text-emerald-600 font-mono">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: About This Business */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">About This Business</h3>
          <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
        </div>

        {/* Back Button matching Figma Screenshot 3 */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Search Results</span>
          </button>
        </div>

      </div>
    </div>
  );
}
