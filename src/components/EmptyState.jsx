'use client';

import { SearchX, RefreshCw } from 'lucide-react';

export default function EmptyState({ onNewSearch }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto my-12 shadow-sm">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">No businesses found</h3>
      <p className="text-sm text-slate-600 mb-8 leading-relaxed">
        Try searching for another business category or location.
      </p>
      <button
        onClick={onNewSearch}
        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        <span>New Search</span>
      </button>
    </div>
  );
}
