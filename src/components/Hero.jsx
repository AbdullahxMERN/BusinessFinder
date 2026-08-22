'use client';

import SearchBar from './SearchBar';

export default function Hero({ searchQuery, setSearchQuery, onSearch, isLoading }) {
  const exampleSearches = [
    { label: 'Restaurants in Swat', query: 'Restaurants in Swat' },
    { label: 'Dentists in Peshawar', query: 'Dentists in Peshawar' },
    { label: 'Plumbers in New York', query: 'Plumbers in New York' },
  ];

  return (
    <section className="relative bg-white border-b border-slate-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Hero Title & Subtitle matching Figma */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Find Businesses. Fast.
          </h1>
          <p className="text-base sm:text-lg text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
            Search any category or location to instantly discover business leads that have no website — but are directly contactable via phone or WhatsApp.
          </p>
        </div>

        {/* Large Search Bar */}
        <div className="pt-2 max-w-2xl mx-auto">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={onSearch}
            isLoading={isLoading}
          />
        </div>

        {/* Popular Searches Tags */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium pt-2">
          <span>Popular searches:</span>
          {exampleSearches.map((ex, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchQuery(ex.query);
                onSearch(ex.query);
              }}
              className="font-bold text-slate-900 hover:text-blue-600 hover:underline transition-colors"
            >
              {ex.label}
              {idx < exampleSearches.length - 1 && <span className="ml-2 text-slate-300 font-normal">·</span>}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
