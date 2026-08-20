'use client';

import { AlertOctagon, RotateCcw, Search } from 'lucide-react';

export default function ErrorState({ onTryAgain, onNewSearch }) {
  return (
    <div className="bg-white border border-rose-200 rounded-2xl p-12 text-center max-w-lg mx-auto my-12 shadow-sm">
      <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mx-auto mb-6">
        <AlertOctagon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h3>
      <p className="text-sm text-slate-600 mb-8 leading-relaxed">
        We couldn't retrieve business results right now. Please try again.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={onTryAgain}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
        <button
          onClick={onNewSearch}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>New Search</span>
        </button>
      </div>
    </div>
  );
}
