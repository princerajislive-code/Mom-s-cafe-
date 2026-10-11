import { useState } from 'react';
import { X, Search, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['All', 'South Indian', 'Chinese', 'Beverages'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppItemLink = (itemName: string) => {
    const message = encodeURIComponent(`Hi Mom's Cafe, I would like to order: ${itemName}. Please confirm availability.`);
    return `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${message}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F3] rounded-2xl shadow-2xl border border-[#E8DED2] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#E8DED2] flex items-center justify-between bg-white/70">
          <div>
            <h3 id="menu-modal-title" className="font-heading text-2xl font-bold text-[#1F1F1F]">
              From Our Kitchen — Full Menu
            </h3>
            <p className="text-xs sm:text-sm text-[#1F1F1F]/70 mt-0.5">
              South Indian • Chinese • Beverages in Bhabua
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#1F1F1F]/60 hover:text-[#1F1F1F] hover:bg-[#E8DED2]/40 rounded-lg transition-colors"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Luxury 3D Digital Menu Banner */}
        <div className="px-4 pt-3 sm:px-6 bg-[#FAF8F3]">
          <a
            href={RESTAURANT_INFO.digitalMenuUrl}
            className="w-full p-3 rounded-xl bg-gradient-to-r from-[#171512] via-[#221F19] to-[#171512] border border-[#D6B56C]/40 flex items-center justify-between text-white hover:border-[#D6B56C] transition-all shadow-sm group"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D6B56C] animate-ping" />
              <span className="text-xs font-semibold text-[#F7E7B4]">
                ✨ Prefer our Luxury 3D Digital Menu?
              </span>
            </div>
            <span className="text-xs font-bold text-[#D6B56C] group-hover:text-white flex items-center gap-1">
              <span>EXPLORE DIGITAL MENU</span>
              <span>↗</span>
            </span>
          </a>
        </div>

        {/* Filter bar & Search */}
        <div className="p-4 border-b border-[#E8DED2] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-[#FAF8F3]">
          
          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-btn px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65F3B] ${
                  activeCategory === cat
                    ? 'bg-[#A65F3B] text-white shadow-xs'
                    : 'bg-white text-[#1F1F1F]/80 hover:bg-[#E8DED2]/50 border border-[#E8DED2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1F1F1F]/40" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E8DED2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A65F3B] text-[#1F1F1F]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#1F1F1F]/60 text-sm">
              No items found matching your filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8DED2] flex gap-3 sm:gap-4 hover:border-[#A65F3B]/40 transition-colors shadow-2xs"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-[#FAF8F3] border border-[#E8DED2]">
                    <SafeImage
                      src={item.image}
                      fallbackSrc={item.fallbackImage}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#A65F3B]">
                          {item.category}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-semibold text-[#D6B56C]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="font-heading text-base font-bold text-[#1F1F1F] truncate mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#1F1F1F]/70 line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-[#1F1F1F]/60">Freshly Made</span>
                      <a
                        href={getWhatsAppItemLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-btn inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65F3B] hover:text-[#8F4E2E] py-1 px-2 rounded hover:bg-[#FAF8F3] transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#E8DED2] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1F1F1F]/70">
          <div>
            Call <a href={RESTAURANT_INFO.callUrl} className="font-semibold text-[#A65F3B] underline">{RESTAURANT_INFO.phone}</a> for instant dine-in or delivery.
          </div>
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-btn inline-flex items-center gap-2 px-4 py-2 bg-[#A65F3B] hover:bg-[#8F4E2E] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Direct WhatsApp Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
