'use client';

import BusinessCard from './BusinessCard';
import { SkeletonGrid } from './SkeletonCard';
import EmptyState from './EmptyState';
import ErrorState from './ErrorState';

export default function BusinessGrid({
  businesses,
  isLoading,
  isError,
  searchQuery,
  onResetSearch,
  onTryAgain,
}) {
  return (
    <section id="search-results" className="py-12 bg-slate-50 min-h-[600px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Search Results
            </h2>
            {searchQuery && (
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Showing results for <span className="text-slate-900 font-bold">"{searchQuery}"</span>
              </p>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-500 font-mono">
            {businesses ? businesses.length : 0} {businesses && businesses.length === 1 ? 'business' : 'businesses'} found
          </div>
        </div>

        {/* Main Lead Cards Grid (Filter Panel Removed completely) */}
        {isLoading ? (
          <SkeletonGrid />
        ) : isError ? (
          <ErrorState onTryAgain={onTryAgain} onNewSearch={onResetSearch} />
        ) : !businesses || businesses.length === 0 ? (
          <EmptyState onNewSearch={onResetSearch} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {businesses.map((business) => (
              <BusinessCard
                key={business.id || business.name}
                business={business}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
