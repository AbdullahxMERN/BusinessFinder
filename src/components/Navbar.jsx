'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onScrollToSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('search');

  useEffect(() => {
    // Sections ordered top-to-bottom as they appear on the page
    const sections = ['how-it-works', 'features', 'about'];

    const handleScroll = () => {
      // If near top of page → highlight Search
      if (window.scrollY < 300) {
        setActiveSection('search');
        return;
      }

      // If near bottom of page → highlight About
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100) {
        setActiveSection('about');
        return;
      }

      // Find which section is currently in view using getBoundingClientRect
      let current = 'search';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above middle of viewport, it's the active one
          if (rect.top <= 200) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (section) =>
    `text-sm font-semibold transition-colors ${
      activeSection === section
        ? 'text-slate-900 border-b-2 border-slate-900 pb-0.5'
        : 'text-slate-500 hover:text-slate-900'
    }`;

  const mobileLinkClass = (section) =>
    `block px-3 py-2 text-base font-semibold rounded-md ${
      activeSection === section
        ? 'text-slate-900 bg-slate-100'
        : 'text-slate-600 hover:bg-slate-50'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="font-extrabold text-2xl text-slate-900 tracking-tight">BusinessFinder</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={onScrollToSearch}
            className={`${navLinkClass('search')} cursor-pointer`}
          >
            Search
          </button>
          <a href="#how-it-works" className={navLinkClass('how-it-works')}>
            How It Works
          </a>
          <a href="#features" className={navLinkClass('features')}>
            Features
          </a>
          <a href="#about" className={navLinkClass('about')}>
            About
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => { setMobileMenuOpen(false); onScrollToSearch(); }}
            className={`${mobileLinkClass('search')} w-full text-left`}
          >
            Search
          </button>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass('how-it-works')}
          >
            How It Works
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass('features')}
          >
            Features
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass('about')}
          >
            About
          </a>
        </div>
      )}
    </header>
  );
}
