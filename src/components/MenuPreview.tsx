import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface MenuPreviewProps {
  onOpenFullMenu: () => void;
}

export function MenuPreview({ onOpenFullMenu }: MenuPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'South Indian' | 'Chinese' | 'Beverages'>('All');

  const categories = ['All', 'South Indian', 'Chinese', 'Beverages'] as const;

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS.slice(0, 6)
    : MENU_ITEMS.filter((item) => item.category === activeCategory).slice(0, 6);

  const getWhatsAppItemLink = (itemName: string) => {
    const message = encodeURIComponent(`Hi Mom's Cafe, I would like to order: ${itemName}. Please confirm availability and delivery.`);
    return `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${message}`;
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A65F3B]">
              Handcrafted Everyday
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1F1F] tracking-tight mt-1">
              From Our Kitchen
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E8DED2]/40 rounded-xl overflow-x-auto self-start sm:self-auto border border-[#E8DED2]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-btn px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B] ${
                  activeCategory === cat
                    ? 'bg-[#1F1F1F] text-white shadow-xs'
                    : 'text-[#1F1F1F]/70 hover:text-[#1F1F1F] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Food Cards Grid (Max 6 featured items, clean spacing, no invented prices) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DED2] shadow-xs hover:shadow-md hover:border-[#A65F3B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Food Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF8F3]">
                  <SafeImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle category tag */}
                  <div className="absolute top-3 left-3 bg-[#1F1F1F]/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-white text-[11px] font-medium tracking-wide z-10">
                    {item.category}
                  </div>

                  {item.badge && (
                    <div className="absolute top-3 right-3 bg-[#D6B56C] px-2.5 py-1 rounded-md text-[#1F1F1F] text-[10px] font-bold tracking-wider uppercase shadow-xs z-10">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1F1F1F] group-hover:text-[#A65F3B] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F1F1F]/70 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Digital Menu Action */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-[#E8DED2]/60 flex items-center justify-between">
                <span className="text-xs font-medium text-[#1F1F1F]/60">
                  Made to Order
                </span>

                <a
                  href={RESTAURANT_INFO.digitalMenuUrl}
                  className="font-btn inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C522B] hover:text-[#1F1F1F] py-1 px-3 rounded-full bg-[#D6B56C]/20 hover:bg-[#D6B56C]/35 border border-[#D6B56C]/50 transition-colors shadow-2xs"
                >
                  <Sparkles className="w-3 h-3 text-[#D6B56C]" />
                  <span>Digital Menu ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={onOpenFullMenu}
            className="font-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1F1F1F] bg-white hover:bg-[#FAF8F3] border border-[#E8DED2] hover:border-[#A65F3B] rounded-lg shadow-xs hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B]"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
