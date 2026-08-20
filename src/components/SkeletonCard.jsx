'use client';

export default function SkeletonCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs animate-pulse space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-200 rounded-lg shrink-0" />
          <div className="space-y-2">
            <div className="h-5 w-40 bg-slate-200 rounded" />
            <div className="h-3 w-24 bg-slate-100 rounded" />
          </div>
        </div>
        <div className="h-4 w-12 bg-slate-200 rounded" />
      </div>

      <div className="space-y-2 py-2">
        <div className="h-3.5 w-full bg-slate-100 rounded" />
        <div className="h-3.5 w-4/5 bg-slate-100 rounded" />
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="h-6 w-28 bg-slate-200 rounded-md" />
        <div className="h-8 w-24 bg-slate-200 rounded-lg" />
      </div>
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="space-y-6 py-8">
      <div className="flex items-center justify-center gap-3 text-slate-600 font-semibold text-sm">
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
        <span>Finding businesses...</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    </div>
  );
}
