import { Leaf, Heart, ShieldCheck, Zap } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      title: 'Fresh Ingredients',
      description: 'Hand-picked vegetables, authentic fermented batters, and freshly ground spices for wholesome flavor.',
      icon: Leaf,
    },
    {
      title: 'Homestyle Taste',
      description: 'Authentic South Indian & café recipes cooked with the love, warmth, and care of home.',
      icon: Heart,
    },
    {
      title: 'Hygienic Preparation',
      description: 'Pristine kitchen hygiene, purified water, and strict culinary food safety standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Fast Delivery',
      description: 'Speedy order dispatch and hot delivery to your doorstep anywhere in Bhabua.',
      icon: Zap,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F2EBE1]/50 border-y border-[#E8DED2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A65F3B]">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1F1F] tracking-tight mt-1">
            Why Mom's Cafe
          </h2>
          <p className="text-xs sm:text-sm text-[#1F1F1F]/70 mt-2">
            Every dish is served with warmth, pure ingredients, and the comforting taste of home.
          </p>
        </div>

        {/* 4 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-xl p-6 border border-[#E8DED2] shadow-2xs hover:shadow-md hover:border-[#A65F3B]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#A65F3B]/10 text-[#A65F3B] group-hover:bg-[#A65F3B] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#1F1F1F] mb-1.5">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-[#1F1F1F]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
