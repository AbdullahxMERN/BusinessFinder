'use client';

import { Star } from 'lucide-react';

export default function Rating({ rating = 0, reviewsCount = 0 }) {
  return (
    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
      <div className="flex items-center text-amber-500 font-semibold">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
        <span>{rating ? rating.toFixed(1) : 'New'}</span>
      </div>
      {reviewsCount > 0 && (
        <span className="text-slate-400 font-normal">
          ({reviewsCount} {reviewsCount === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
}
