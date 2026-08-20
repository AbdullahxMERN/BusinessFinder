'use client';

import { Search, RefreshCw, ListFilter } from 'lucide-react';

export default function HowItWorks({ onScrollToSearch }) {
  const steps = [
    {
      number: "01",
      title: "You Search Our Site",
      description: "Type any business category and location — for example 'Plumbers in New York' or 'Dentists in Islamabad'. Our smart search bar accepts any niche or city worldwide.",
      icon: Search,
    },
    {
      number: "02",
      title: "We Collect Real-Time Data",
      description: "Once you hit search, our backend instantly scrapes live business listings for your query. We gather every available result — names, addresses, phone numbers, WhatsApp contacts, and whether a website exists.",
      icon: RefreshCw,
    },
    {
      number: "03",
      title: "Only No-Website Leads With Contacts Shown",
      description: "We automatically filter the results to show you only businesses that have NO website — but DO have a phone number or WhatsApp. These are the highest-value leads: reachable businesses actively missing an online presence.",
      icon: ListFilter,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block">SIMPLE PROCESS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How BusinessFinder Works</h2>
          <p className="text-sm text-slate-500">BusinessFinder makes it simple to discover and connect with businesses anywhere.</p>
        </div>

        {/* 3 Steps List */}
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex items-start justify-between gap-6 shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
                <span className="text-3xl sm:text-4xl font-black text-slate-200 tracking-tighter shrink-0">
                  {step.number}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner matching Figma Screenshot 4 */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-center text-white space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to find businesses?</h3>
          <div>
            <button
              onClick={onScrollToSearch}
              className="px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Start Searching
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
