import { useState, useEffect } from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function FloatingWhatsApp() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1F1F1F] shadow-lg border border-[#E8DED2] hover:border-[#A65F3B] transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Digital Menu Action Button */}
      <a
        href={RESTAURANT_INFO.digitalMenuUrl}
        className="pointer-events-auto group flex items-center gap-2 bg-gradient-to-r from-[#F7E7B4] via-[#D6B56C] to-[#E5C679] hover:from-white hover:to-[#F7E7B4] text-[#121110] p-3 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 border border-[#D6B56C]/40"
        aria-label="Explore Digital Menu"
      >
        <Sparkles className="w-4 h-4 shrink-0 text-[#121110]" />
        <span className="font-btn text-xs font-bold uppercase tracking-wider">
          Digital Menu ↗
        </span>
      </a>
    </div>
  );
}
