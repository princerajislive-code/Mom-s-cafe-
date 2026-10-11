import { useState } from 'react';
import { ArrowRight, ShoppingBag, X, Sparkles, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function ZomatoBanner() {
  const [showStatusModal, setShowStatusModal] = useState(false);

  const handleBannerClick = () => {
    // As per strict instructions:
    // If a verified Zomato URL is not available, keep the banner visually active but non-functional.
    // In that case display: "Zomato ordering link coming soon."
    setShowStatusModal(true);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-4 mb-8 sm:mb-12">
        <button
          type="button"
          onClick={handleBannerClick}
          className="w-full text-left group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2A1E1E] via-[#3B2222] to-[#261D1A] p-4 sm:p-5 text-white shadow-md hover:shadow-lg transition-all duration-300 border border-[#D6B56C]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56C]"
          aria-label="Order on Zomato"
        >
          {/* Subtle warm ambient highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-[#A65F3B]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#E23744]/20 border border-[#E23744]/40 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5 text-[#FF646F]" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D6B56C]">
                    Online Delivery
                  </span>
                  <span className="text-xs text-white/50">·</span>
                  <span className="text-xs text-white/70">Bhabua</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold tracking-wide text-white">
                  ORDER ON ZOMATO
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                  Indian • Chinese • Beverages
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 self-start sm:self-center text-xs sm:text-sm font-medium text-[#D6B56C] group-hover:text-white transition-colors">
              <span className="relative">
                Order on Zomato
                <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-px bg-[#D6B56C] transition-all duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </button>
      </div>

      {/* Zomato Status Notice Modal */}
      {showStatusModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="zomato-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md bg-[#FAF8F3] rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#E8DED2]">
            <button
              type="button"
              onClick={() => setShowStatusModal(false)}
              className="absolute top-4 right-4 p-2 text-[#1F1F1F]/60 hover:text-[#1F1F1F] rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6" />
            </div>

            <h4 id="zomato-modal-title" className="font-heading text-xl font-bold text-[#1F1F1F]">
              Zomato ordering link coming soon.
            </h4>

            <p className="text-sm text-[#1F1F1F]/70 mt-2 leading-relaxed">
              Mom's Cafe is active in Bhabua. While our direct Zomato link is being updated, you can order instantly via WhatsApp or Call for fresh doorstep delivery!
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={RESTAURANT_INFO.digitalMenuUrl}
                className="font-btn inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D6B56C] hover:bg-[#E5C679] text-[#121110] text-xs uppercase tracking-wider font-bold rounded-lg transition-colors shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#121110]" />
                <span>Explore Digital Menu ↗</span>
              </a>

              <a
                href={RESTAURANT_INFO.callUrl}
                className="font-btn inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1F1F1F] hover:bg-[#333333] text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly to Order</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
