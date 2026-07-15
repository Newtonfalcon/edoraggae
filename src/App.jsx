import { useEffect, useState } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/loadingScreen";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhatWeDo from "./sections/Whatwedo";
import Lineup from "./sections/Lineup";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Tickets from "./sections/Tickets";
import Partners from "./sections/Partners";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Basic global scroll tracking or page effects
    document.title = "EDO International Reggae Festival - One Culture! One Vibes!! One Shine!!!";
  }, []);

  useEffect(() => {
    // Keep the loading screen up until the whole page (images, fonts, audio, etc.)
    // has actually finished loading, with a small minimum display time so it
    // never just flashes on fast connections.
    const MIN_DISPLAY_MS = 1200;
    const startedAt = Date.now();
    let timeoutId;

    const finishLoading = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      timeoutId = setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // Lock background scroll while the loading screen is visible
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#0b0c10] text-[#f3f4f6] font-sans overflow-x-hidden antialiased">
      {/* Loading Screen: shown until the page has fully loaded */}
      <LoadingScreen isLoading={isLoading} />

      {/* Dynamic Header / Navigation */}
      <Header />

      {/* Main Sections Stack */}
      <main>
        {/* Immersive Hero with Live Countdown */}
        <Hero />

        {/* About & CEO profile */}
        <About />

        {/* What We Do: Promotion, Artist Management, Music Production */}
        <WhatWeDo />

        {/* Official Artist Lineup (Interactive Tabbed Showcase) */}
        <Lineup />

        {/* Experience Showcase */}
        <Experience />

        {/* Interactive Gallery */}
        <Gallery />

        {/* Secure Ticketing Grid */}
        <Tickets />

        {/* Sponsors & Patrons */}
        <Partners />

        {/* FAQ Accordions */}
        <Faq />

        {/* Contact Form & Coordinates */}
        <Contact />
      </main>

      {/* Corporate & Cultural Footer */}
      <Footer />

      {/* Floating WhatsApp Chat Button */}
      <WhatsAppButton />
    </div>
  );
}