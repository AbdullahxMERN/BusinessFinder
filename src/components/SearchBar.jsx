'use client';

import { Search, ArrowRight, X } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery, onSearch, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-slate-200 rounded-2xl sm:rounded-full shadow-lg hover:border-slate-300 focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/10 transition-all p-2 sm:p-2 sm:pl-6 gap-2">

        {/* Input Field Area */}
        <div className="flex items-center flex-1 px-3 py-2 sm:px-0 sm:py-0">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 shrink-0 mr-3" />
          <input
            id="search-input"
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What business are you looking for?"
            className="w-full text-sm sm:text-base text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none py-1"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full mr-1 shrink-0"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Search Button: Full width on mobile, pill button on desktop */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 text-sm sm:text-base font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 rounded-xl sm:rounded-full shadow-md sm:shadow transition-all shrink-0 cursor-pointer"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Search Businesses</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

      </div>
    </form>
  );
}
