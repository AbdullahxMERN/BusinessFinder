'use client';

import { ShieldCheck, Zap, Globe, Filter } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block">ABOUT US</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">About BusinessFinder</h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Empowering instant local business discovery and real-time lead generation without stale databases or account sign-ups.
          </p>
        </div>

        {/* Info Grid with icons styled identically to Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-2xs font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Real-Time Lead Engine</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              When you search for any niche — skin specialists, dentists, contractors — our backend scrapes live business listings on the spot. No stale databases. Every search returns fresh, real-world data collected at that exact moment.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-2xs font-bold">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Smart No-Website Filter</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              From all results we collect, we show ONLY businesses that have no website — but have a phone number or WhatsApp. This makes every result an actionable lead: a real business you can contact right now with your services.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-2xs font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Global Search Reach</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Search any city, country, or specialty — from plumbers in New York to dentists in Peshawar or restaurants in Swat. BusinessFinder auto-formats every phone number into a ready-to-click WhatsApp URL.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-2xs font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Zero Friction Architecture</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No registration, no accounts, no password walls, and no paywalls. BusinessFinder is engineered for pure efficiency, speed, and commercial credibility.
            </p>
          </div>

        </div>

        <div className="text-center pt-4 space-y-1">
          <p className="text-sm font-semibold text-slate-900">
            Made by{' '}
            <a
              href="https://github.com/AbdullahxMERN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Abdullah
            </a>
          </p>
          <p className="text-xs text-slate-400">Built to help people find real business leads — fast free and without any sign-up</p>
        </div>

      </div>
    </section>
  );
}
