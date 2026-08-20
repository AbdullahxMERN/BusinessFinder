'use client';

export default function FilterChip({ label, active, onClick, badgeCount }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
        active
          ? 'bg-slate-900 text-white shadow-xs'
          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      <span>{label}</span>
      {badgeCount !== undefined && (
        <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
          active ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'
        }`}>
          {badgeCount}
        </span>
      )}
    </button>
  );
}
