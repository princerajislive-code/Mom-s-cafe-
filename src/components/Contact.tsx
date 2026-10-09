import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A65F3B]">
            Find Us in Bhabua
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1F1F] tracking-tight mt-1">
            Visit & Contact
          </h2>
        </div>

        {/* Two-Column Layout (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Business Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED2] shadow-xs space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#1F1F1F]">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-xs font-medium text-[#A65F3B] uppercase tracking-wider mt-0.5">
                  {RESTAURANT_INFO.category}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/60">Address</p>
                  <p className="text-sm font-medium text-[#1F1F1F] mt-0.5 leading-relaxed">
                    Beside Lallu Bhai Mall,<br />
                    Ward No 18,<br />
                    Bhabua, Bihar 821101
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/60">Phone</p>
                  <a
                    href={RESTAURANT_INFO.callUrl}
                    className="text-sm font-semibold text-[#1F1F1F] hover:text-[#A65F3B] transition-colors mt-0.5 inline-block font-mono"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/60">Email</p>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-sm font-medium text-[#1F1F1F] hover:text-[#A65F3B] transition-colors mt-0.5 inline-block break-all"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/60">Opening Hours</p>
                  <p className="text-sm font-medium text-[#1F1F1F] mt-0.5">
                    Every Day • 12 PM – 9 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Google Maps Style Location Card + Instagram Card */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Google Maps Style Location Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DED2] shadow-xs flex flex-col">
              
              {/* Stylized Interactive Map Canvas */}
              <div className="relative h-64 sm:h-72 bg-[#E9E5DC] overflow-hidden flex items-center justify-center">
                {/* SVG Map Grid / Roads Representation */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D3CDC1" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  {/* Stylized main road curves representing Bhabua town grid */}
                  <path d="M-100 120 C 150 110, 300 180, 800 150" stroke="#FFF" strokeWidth="14" fill="none" />
                  <path d="M-100 120 C 150 110, 300 180, 800 150" stroke="#E2DAC9" strokeWidth="10" fill="none" />
                  <path d="M 320 -50 L 320 400" stroke="#FFF" strokeWidth="12" fill="none" />
                  <path d="M 320 -50 L 320 400" stroke="#E2DAC9" strokeWidth="8" fill="none" />
                  <path d="M 120 400 L 520 -50" stroke="#FFF" strokeWidth="8" fill="none" />
                </svg>

                {/* Map Pin Marker */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="bg-[#A65F3B] text-white p-2.5 rounded-full shadow-lg border-2 border-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="w-3 h-1.5 bg-black/30 rounded-full blur-[1px] mt-1" />
                </div>

                {/* Overlaid Location Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#E8DED2] shadow-sm max-w-xs">
                  <p className="text-xs font-bold text-[#1F1F1F]">Mom's Cafe / Mom's Dosa</p>
                  <p className="text-[11px] text-[#1F1F1F]/70 mt-0.5">Beside Lallu Bhai Mall, Ward 18, Bhabua</p>
                </div>

                {/* Bottom link to Google Maps */}
                <a
                  href={RESTAURANT_INFO.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-btn absolute bottom-4 right-4 inline-flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#333333] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Map Card Details Bar */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E8DED2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-[#1F1F1F]/70">
                  <span className="font-semibold text-[#1F1F1F]">Landmark:</span> Beside Lallu Bhai Mall, Ward No 18, Bhabua, Bihar 821101
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#A65F3B] hover:text-[#8F4E2E] inline-flex items-center gap-1 shrink-0"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Instagram Card with verified URL */}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-r from-[#FAF8F3] to-[#F2EBE1] hover:to-[#E8DED2] p-4 sm:p-5 rounded-2xl border border-[#E8DED2] hover:border-[#D6B56C] transition-all shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] text-white flex items-center justify-center shadow-xs">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A65F3B]">
                      Follow Us On Instagram
                    </span>
                    <h4 className="font-heading text-base font-bold text-[#1F1F1F] group-hover:text-[#A65F3B] transition-colors">
                      {RESTAURANT_INFO.instagramHandle}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-[#A65F3B] group-hover:translate-x-1 transition-transform">
                  <span>View Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
