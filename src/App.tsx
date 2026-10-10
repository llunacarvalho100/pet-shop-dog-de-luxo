/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStatsStrip } from './components/TrustStatsStrip';
import { ServicesSection } from './components/ServicesSection';
import { FirstBathSpotlight } from './components/FirstBathSpotlight';
import { TaxiDogCalculator } from './components/TaxiDogCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { BoutiqueSection } from './components/BoutiqueSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();

  const handleOpenBooking = () => {
    setPreselectedServiceId(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectServiceToBook = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-stone-800 flex flex-col font-sans">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <TrustStatsStrip />
        <ServicesSection onSelectServiceToBook={handleSelectServiceToBook} />
        <FirstBathSpotlight onOpenBooking={handleOpenBooking} />
        <TaxiDogCalculator />
        <ReviewsSection />
        <BoutiqueSection />
        <LocationHoursSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceId={preselectedServiceId}
      />
    </div>
  );
}
