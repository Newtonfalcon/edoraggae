import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Lineup from "./sections/Lineup";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Tickets from "./sections/Tickets";
import Partners from "./sections/Partners";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  useEffect(() => {
    // Basic global scroll tracking or page effects
    document.title = "EDO International Reggae Festival - One Culture! One Vibes!! One Shine!!!";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0c10] text-[#f3f4f6] font-sans overflow-x-hidden antialiased">
      {/* Dynamic Header / Navigation */}
      <Header />

      {/* Main Sections Stack */}
      <main>
        {/* Immersive Hero with Live Countdown */}
        <Hero />

        {/* About & CEO profile */}
        <About />

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