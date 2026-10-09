import { Instagram, MessageSquare, Phone, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191919] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-heading text-2xl font-bold text-white tracking-tight">
              {RESTAURANT_INFO.name}
            </span>
            <p className="text-xs uppercase tracking-wider text-[#D6B56C]">
              South Indian • Chinese • Beverages
            </p>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed pt-1">
              "Mom's Dosa – Home Style Taste, Made with Love." Freshly prepared with quality ingredients and warm hospitality in Bhabua, Bihar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D6B56C]">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact Connections */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D6B56C]">
              Connect With Us
            </p>
            <div className="space-y-2 text-xs">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Instagram ({RESTAURANT_INFO.instagramHandle})</span>
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.callUrl}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B56C]" />
                <span>Call: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Credit & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
          </p>

          {/* Creator Credit: RoadsideDeveloper */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/80 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
            <span className="flex items-center gap-1 font-medium">
              <Globe className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>Designed & Developed by {RESTAURANT_INFO.developerCredit.name}</span>
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-3 text-[11px] text-white/70">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.developerCredit.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                📱 WhatsApp: {RESTAURANT_INFO.developerCredit.whatsapp}
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.developerCredit.call}`}
                className="hover:text-white transition-colors"
              >
                📞 Call: {RESTAURANT_INFO.developerCredit.call}
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
