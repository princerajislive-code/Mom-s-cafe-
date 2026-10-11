/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ZomatoBanner } from './components/ZomatoBanner';
import { About } from './components/About';
import { MenuPreview } from './components/MenuPreview';
import { WhyUs } from './components/WhyUs';
import { OrderCTA } from './components/OrderCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuModal } from './components/MenuModal';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrder = () => {
    setIsOrderModalOpen(true);
  };

  const handleOpenMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsMenuModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#1F1F1F] flex flex-col antialiased selection:bg-[#A65F3B] selection:text-white">
      {/* Sticky Blur Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrder} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onOrderClick={handleOpenOrder}
          onMenuClick={handleOpenMenu}
        />

        {/* 2. Zomato Ordering Banner */}
        <ZomatoBanner />

        {/* 3. About Section */}
        <About />

        {/* 4. Kitchen Menu Showcase */}
        <MenuPreview onOpenFullMenu={handleOpenMenu} />

        {/* 5. Why Mom's Cafe */}
        <WhyUs />

        {/* 6. Order / Visit CTA */}
        <OrderCTA />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Back-To-Top button */}
      <FloatingWhatsApp />

      {/* Full Menu Modal */}
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />

      {/* Quick Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onOpenMenu={handleOpenMenu}
      />
    </div>
  );
}
