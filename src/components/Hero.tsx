import { ArrowRight, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOrderClick: () => void;
  onMenuClick: () => void;
}

export function Hero({ onOrderClick, onMenuClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Brand & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small Premium Badge (Clean unboxed luxury marker) */}
            <div className="inline-flex items-center gap-2 self-start text-xs font-medium tracking-wider uppercase text-[#A65F3B] bg-[#E8DED2]/40 px-3 py-1.5 rounded-full border border-[#D6B56C]/40">
              <MapPin className="w-3.5 h-3.5 text-[#A65F3B]" />
              <span>Open in Bhabua</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1F1F] leading-[1.12] text-balance">
              HOME-STYLE TASTE. <br />
              <span className="text-[#A65F3B] italic font-normal">MADE WITH LOVE.</span>
            </h1>

            {/* Small text / Categories */}
            <p className="text-sm font-medium tracking-wide uppercase text-[#1F1F1F]/70 flex items-center gap-2">
              <span>South Indian</span>
              <span className="text-[#D6B56C]">·</span>
              <span>Chinese</span>
              <span className="text-[#D6B56C]">·</span>
              <span>Beverages</span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#1F1F1F]/80 leading-relaxed max-w-xl text-pretty">
              Freshly prepared food, warm hospitality and the comforting taste of home — right here in Bhabua.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOrderClick}
                className="font-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65F3B] hover:bg-[#8F4E2E] active:scale-[0.98] transition-all rounded shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B]"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onMenuClick}
                className="font-btn inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1F1F1F] bg-white hover:bg-[#FAF8F3] border border-[#E8DED2] hover:border-[#A65F3B] active:scale-[0.98] transition-all rounded shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B]"
              >
                <span>VIEW MENU</span>
              </button>
            </div>

            {/* Quiet reassurance line */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#1F1F1F]/60">
              <span>Dine-in Available</span>
              <span>·</span>
              <span>Fast Home Delivery</span>
              <span>·</span>
              <span>12 PM – 9 PM Daily</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle warm decorative glow */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2 bg-gradient-to-tr from-[#A65F3B]/20 via-[#D6B56C]/20 to-transparent rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" 
              />

              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#E8DED2] shadow-xl">
                <SafeImage
                  src={IMAGES.hero}
                  fallbackSrc={IMAGES.heroFallback}
                  alt="Mom's Cafe authentic crispy Masala Dosa with fresh chutneys and sambar"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Light gradient scrim for rich contrast */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/60 via-[#1F1F1F]/10 to-transparent pointer-events-none" 
                />

                {/* Bottom floating caption badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1F1F1F]/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-[#D6B56C]">Signature Delicacy</p>
                    <p className="text-sm font-medium">Mom's Crispy Masala Dosa</p>
                  </div>
                  <span className="text-xs text-white/80">Made Fresh</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
