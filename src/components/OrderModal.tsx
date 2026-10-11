import { X, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMenu: () => void;
}

export function OrderModal({ isOpen, onClose, onOpenMenu }: OrderModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-[#FAF8F3] rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#E8DED2]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1F1F1F]/60 hover:text-[#1F1F1F] rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center mb-4">
          <MessageSquare className="w-6 h-6" />
        </div>

        <h3 id="order-modal-title" className="font-heading text-2xl font-bold text-[#1F1F1F]">
          Order from Mom's Cafe
        </h3>

        <p className="text-xs text-[#1F1F1F]/70 mt-1">
          Dine-in & Fast Home Delivery in Bhabua
        </p>

        {/* Info card */}
        <div className="my-5 p-3.5 rounded-xl bg-white border border-[#E8DED2] text-xs space-y-2 text-[#1F1F1F]/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#A65F3B] shrink-0" />
            <span>Beside Lallu Bhai Mall, Ward No 18, Bhabua</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#A65F3B] shrink-0" />
            <span>Open Every Day • 12:00 PM – 9:00 PM</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href={RESTAURANT_INFO.digitalMenuUrl}
            className="font-btn w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#D6B56C] hover:bg-[#E5C679] text-[#121110] text-xs uppercase tracking-wider font-bold rounded-lg shadow-sm hover:shadow transition-colors"
          >
            <span>Explore Digital Menu ↗</span>
          </a>

          <a
            href={RESTAURANT_INFO.callUrl}
            className="font-btn w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#1F1F1F] hover:bg-[#333333] text-white text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Order ({RESTAURANT_INFO.phone})</span>
          </a>

          <a
            href={RESTAURANT_INFO.digitalMenuUrl}
            className="font-btn w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-[#D6B56C] bg-[#121110] hover:bg-[#1c1a17] rounded-lg transition-colors border border-[#D6B56C]/30 shadow-xs"
          >
            <span>Explore 3D Digital Menu ↗</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenMenu();
            }}
            className="font-btn w-full inline-flex items-center justify-center py-2 px-4 text-xs font-semibold text-[#A65F3B] hover:text-[#8F4E2E] hover:bg-[#E8DED2]/40 rounded-lg transition-colors"
          >
            Explore Full Kitchen Menu →
          </button>
        </div>
      </div>
    </div>
  );
}
