'use client';

import { Database, PhoneCall, Zap, UserX, Smartphone, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: "N8N / RPC Data",
      description: "Real-time query execution, no stale fixed database.",
      icon: Database,
    },
    {
      title: "Direct Business Info",
      description: "Phones, WhatsApp, and website URLs cleanly structured.",
      icon: PhoneCall,
    },
    {
      title: "Fast & Simple",
      description: "Direct click-to-act buttons without clutter.",
      icon: Zap,
    },
    {
      title: "No Account Required",
      description: "Search and act instantly without login flow.",
      icon: UserX,
    },
    {
      title: "Mobile Friendly",
      description: "Fully responsive UI built for modern smartphones.",
      icon: Smartphone,
    },
    {
      title: "Accurate Results",
      description: "Direct channel fetch to ensure direct lead contacts.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header matching Figma Screenshot 1 */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block">DIRECTORY ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Engineered For Precision</h2>
        </div>

        {/* Grid matching Figma Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-3 hover:border-slate-300 hover:shadow-2xs transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
