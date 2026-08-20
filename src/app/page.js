'use client';

import { useState } from 'react';
import PageLoader from '@/components/PageLoader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import About from '@/components/About';
import BusinessGrid from '@/components/BusinessGrid';
import BusinessDetailsModal from '@/components/BusinessDetailsModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  // Send search query directly to n8n webhook from browser
  const handleSearchSubmit = async (queryText) => {
    const cleanQuery = typeof queryText === 'string' ? queryText.trim() : searchQuery.trim();
    if (!cleanQuery) return;

    setIsLoading(true);
    setIsError(false);
    setHasSearched(true);
    setBusinesses([]);

    // Next.js API route (runs as Vercel Serverless Function in production)
    const searchEndpoint = '/api/search';

    try {
      const response = await fetch(searchEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: cleanQuery }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Search error ${response.status}: ${errorText}`);
      }

      // Parse n8n response — handle any JSON shape
      let n8nData;
      try {
        n8nData = await response.json();
      } catch {
        throw new Error('n8n returned invalid JSON');
      }

      // n8n returns: [ { "data": [ { title, rating, reviews, address, phone, website, whatsapp } ] } ]
      // Extract the inner data array
      let rawResults = [];
      if (Array.isArray(n8nData) && n8nData[0]?.data) {
        rawResults = n8nData[0].data;
      } else if (Array.isArray(n8nData)) {
        rawResults = n8nData;
      } else if (Array.isArray(n8nData?.data)) {
        rawResults = n8nData.data;
      }

      // Map n8n fields directly to card fields
      const formatted = rawResults.map((item, idx) => ({
        id: item.id ?? `lead-${idx}`,
        name: item.title ?? item.name ?? 'Unknown Business',
        rating: item.rating ?? null,
        reviewsCount: item.reviews ?? item.reviewsCount ?? 0,
        address: item.address ?? '',
        phone: item.phone ?? '',
        whatsapp: item.whatsapp ?? '',          // already a full wa.me URL
        website: item.website ?? '',             // null → empty string
      }));


      setBusinesses(formatted);

      // Scroll to results
      setTimeout(() => {
        document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);

    } catch (err) {
      console.error('n8n webhook error:', err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setHasSearched(false);
    setBusinesses([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      document.getElementById('search-input')?.focus();
    }, 100);
  };

  const handleScrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('search-input')?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <PageLoader />
      <Navbar onScrollToSearch={handleScrollToSearch} />

      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearchSubmit}
        isLoading={isLoading}
      />

      {hasSearched && (
        <BusinessGrid
          businesses={businesses}
          isLoading={isLoading}
          isError={isError}
          searchQuery={searchQuery}
          onResetSearch={handleResetSearch}
          onViewDetails={(biz) => setSelectedBusiness(biz)}
          onTryAgain={() => handleSearchSubmit(searchQuery)}
        />
      )}

      <HowItWorks onScrollToSearch={handleScrollToSearch} />
      <Features />
      <About />
      <Footer onScrollToSearch={handleScrollToSearch} />

      {selectedBusiness && (
        <BusinessDetailsModal
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      )}
    </div>
  );
}
