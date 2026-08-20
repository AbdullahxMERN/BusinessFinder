'use client';

import { Globe, AlertCircle, MessageSquare } from 'lucide-react';

export default function Badge({ type, label }) {
  if (type === 'website-available') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <Globe className="w-3 h-3 text-emerald-600" />
        <span>Website: {label || 'Available'}</span>
      </span>
    );
  }

  if (type === 'no-website-lead') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
        <AlertCircle className="w-3 h-3 text-amber-600" />
        <span>Website Opportunity</span>
      </span>
    );
  }

  if (type === 'whatsapp-phone-lead') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
        <MessageSquare className="w-3 h-3 text-blue-600" />
        <span>WhatsApp available via phone</span>
      </span>
    );
  }

  if (type === 'whatsapp-available') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <MessageSquare className="w-3 h-3 text-emerald-600" />
        <span>WhatsApp: Available</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
      {label}
    </span>
  );
}
