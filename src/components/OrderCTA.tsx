import { MessageSquare, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function OrderCTA() {
  return (
    <section id="order" className="py-16 sm:py-20 bg-[#1F1F1F] text-white relative overflow-hidden">
      {/* Subtle warm ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A65F3B]/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D6B56C]">
          Dine-In • Delivery in Bhabua
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Come Hungry. Leave Happy.
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          Visit Mom's Cafe in Bhabua or order your favourites for delivery.
        </p>

        {/* Buttons: ORDER ON WHATSAPP & CALL NOW */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>ORDER ON WHATSAPP</span>
          </a>

          <a
            href={RESTAURANT_INFO.callUrl}
            className="font-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-[#FAF8F3] text-[#1F1F1F] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] border border-[#E8DED2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4 text-[#A65F3B]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Quiet phone number verification display */}
        <p className="text-xs text-white/60 pt-2">
          Contact: <span className="text-[#D6B56C] font-mono">{RESTAURANT_INFO.phone}</span> • Daily 12:00 PM – 9:00 PM
        </p>
      </div>
    </section>
  );
}
