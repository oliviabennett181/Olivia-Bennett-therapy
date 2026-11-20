"use client";

import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Reviews from "./Reviews";

export default function LandingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBookingModal = () => setIsBookingOpen(true);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Hero />
      <About />
      <Gallery />
      <Services onBookNow={openBookingModal} />
      <Reviews onBookNow={openBookingModal} />

      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
    </main>
  );
}
