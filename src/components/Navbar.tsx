import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { 
      label: 'Digital Menu ↗', 
      href: RESTAURANT_INFO.digitalMenuUrl, 
      isDigitalMenu: true 
    },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm border-b border-[#E8DED2]'
            : 'bg-[#FAF8F3]/80 backdrop-blur-sm border-b border-[#E8DED2]/50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Zone 1: Brand Title (Single text element wordmark as per Top Bar Contract) */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B] rounded"
          >
            <span className="font-heading text-2xl sm:text-2xl font-bold tracking-tight text-[#1F1F1F] group-hover:text-[#A65F3B] transition-colors">
              Mom's Cafe
            </span>
          </a>

          {/* Zone 2: Navigation Links (Text with clean hover styling + Gold Digital Menu) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.isDigitalMenu) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-[#8F4E2E] hover:text-[#1F1F1F] bg-[#D6B56C]/15 hover:bg-[#D6B56C]/25 border border-[#D6B56C]/50 hover:border-[#D6B56C] shadow-2xs hover:shadow-xs transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56C]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D6B56C] group-hover:scale-110 transition-transform" />
                    <span>Digital Menu ↗</span>
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#D6B56C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  </a>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#1F1F1F]/80 hover:text-[#A65F3B] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B] rounded"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#order"
              onClick={(e) => {
                if (onOpenOrderModal) {
                  e.preventDefault();
                  onOpenOrderModal();
                }
              }}
              className="hidden sm:inline-flex items-center justify-center font-btn px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#A65F3B] hover:bg-[#8F4E2E] active:scale-[0.98] transition-all rounded shadow-sm hover:shadow whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B]"
            >
              Order Now
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1F1F1F] hover:text-[#A65F3B] hover:bg-[#E8DED2]/50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1F1F1F]/50 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-3/4 max-w-xs bg-[#FAF8F3] shadow-2xl p-6 pt-24 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-[#E8DED2] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#E8DED2]">
              <span className="font-heading text-xl font-bold text-[#1F1F1F]">Mom's Cafe</span>
              <p className="text-xs text-[#1F1F1F]/70 mt-1">Home Style Taste, Made with Love</p>
            </div>

            <nav className="flex flex-col space-y-3.5">
              {navLinks.map((link) => {
                if (link.isDigitalMenu) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#8F4E2E] bg-[#D6B56C]/15 border border-[#D6B56C]/50 hover:bg-[#D6B56C]/25 transition-all shadow-2xs"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#D6B56C]" />
                        <span>Digital Menu ↗</span>
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#D6B56C]/25 text-[#8F4E2E] font-semibold">
                        Online
                      </span>
                    </a>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#1F1F1F] hover:text-[#A65F3B] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E8DED2] space-y-3">
            <a
              href="#order"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenOrderModal) onOpenOrderModal();
              }}
              className="w-full inline-flex items-center justify-center font-btn py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#A65F3B] hover:bg-[#8F4E2E] rounded text-center transition-colors"
            >
              Order Now
            </a>
            <a
              href={RESTAURANT_INFO.callUrl}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#1F1F1F] bg-[#E8DED2]/60 hover:bg-[#E8DED2] rounded transition-colors"
            >
              <Phone className="w-4 h-4 text-[#A65F3B]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
