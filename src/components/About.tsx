import { Sparkles, Heart, Zap } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

export function About() {
  const highlights = [
    {
      title: 'Fresh Taste',
      description: 'Prepared using traditional stone-ground batter and premium spices.',
      icon: Sparkles,
    },
    {
      title: 'Made With Love',
      description: 'Careful homestyle attention that makes every bite comfort food.',
      icon: Heart,
    },
    {
      title: 'Fast Delivery',
      description: 'Dispatched hot and crisp right to your home in Bhabua.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAF8F3] border-t border-[#E8DED2]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Asset (Large Real Food Image Beside Content) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div 
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-br from-[#D6B56C]/20 via-[#A65F3B]/10 to-transparent rounded-2xl blur-lg pointer-events-none"
              />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#E8DED2] shadow-lg">
                <SafeImage
                  src={IMAGES.about}
                  fallbackSrc={IMAGES.aboutFallback}
                  alt="Crafting fresh, crisp dosas with authentic ghee and fragrant spices at Mom's Dosa"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle caption */}
                <div className="absolute bottom-3 left-3 bg-[#1F1F1F]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg text-white text-xs font-medium">
                  Fresh on the tawa daily
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A65F3B]">
                Our Philosophy
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1F1F] tracking-tight mt-1">
                Made With Love
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#1F1F1F]/80 leading-relaxed">
              <p>
                At Mom's Dosa, every dish is prepared with fresh ingredients, proper hygiene and a homemade touch.
              </p>
              <p>
                We believe good food should feel familiar, comforting and memorable.
              </p>
            </div>

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-[#E8DED2] shadow-xs hover:border-[#A65F3B]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#A65F3B]/10 text-[#A65F3B] flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1F1F1F]/70 mt-1 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
