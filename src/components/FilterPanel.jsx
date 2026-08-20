'use client';

import FilterChip from './FilterChip';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function FilterPanel({
  activeFilters,
  toggleFilter,
  sortBy,
  setSortBy,
  totalResultsCount
}) {
  const filterOptions = [
    { id: 'hasWebsite', label: 'Has Website' },
    { id: 'noWebsite', label: 'No Website (Leads)' },
    { id: 'hasPhone', label: 'Has Phone' },
    { id: 'hasWhatsapp', label: 'Has WhatsApp' },
    { id: 'rating4', label: 'Rating 4+' },
    { id: 'rating45', label: 'Rating 4.5+' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left Info */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-500" />
          <span className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
            Filter Results
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {totalResultsCount} {totalResultsCount === 1 ? 'business' : 'businesses'}
          </span>
        </div>

        {/* Right Sort Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <ArrowUpDown className="w-4 h-4 text-slate-400" />
          <label htmlFor="sort-select" className="text-xs font-medium text-slate-600">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-slate-900 cursor-pointer"
          >
            <option value="relevance">Relevance</option>
            <option value="rating">Rating (High to Low)</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Horizontal Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {filterOptions.map((filter) => (
          <FilterChip
            key={filter.id}
            label={filter.label}
            active={!!activeFilters[filter.id]}
            onClick={() => toggleFilter(filter.id)}
          />
        ))}
      </div>
    </div>
  );
}
