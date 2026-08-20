'use client';

export default function Footer({ onScrollToSearch }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-bold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">BusinessFinder</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Find businesses. Discover opportunities.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-8 text-sm font-semibold text-slate-300">
            <button onClick={onScrollToSearch} className="hover:text-white transition-colors">Search</button>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
        </div>

        <div className="h-px bg-slate-800 w-full" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <span>© 2026 BusinessFinder. All rights reserved.</span>
          <span>Fast Search · Real Business Data · Lead Generation</span>
        </div>

      </div>
    </footer>
  );
}
