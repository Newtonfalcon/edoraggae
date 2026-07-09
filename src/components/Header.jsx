import { useState, useEffect } from "react";
import { Menu, X, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f8f7f2]/95 backdrop-blur-md border-b border-[#e5e1d8] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center bg-transparent shrink-0">
              {!logoError ? (
                <img
                  src={logo}
                  alt="EDO International Reggae Festival Logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#bc6c25] via-[#5A5A40] to-[#e9edc9] flex items-center justify-center p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-full bg-[#f8f7f2] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#bc6c25] group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#5A5A40] block leading-none">
                {siteData.festivalName.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#bc6c25] font-mono font-bold block mt-0.5">
                {siteData.festivalName.split(" ").slice(2).join(" ") || "Festival"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteData.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#6b705c] hover:text-[#283618] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#bc6c25] after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#tickets"
              className="px-6 py-2.5 rounded-[16px] text-xs font-bold tracking-wider uppercase text-[#fefae0] bg-[#5A5A40] hover:bg-[#283618] transition-all duration-300 shadow-sm hover:scale-105"
            >
              Get Tickets
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#5A5A40] hover:text-[#283618] hover:bg-[#e9edc9]/50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f8f7f2] border-b border-[#e5e1d8]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {siteData.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#6b705c] hover:text-[#283618] hover:bg-[#e9edc9]/30 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3 border-t border-[#e5e1d8]">
                <a
                  href="#tickets"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 rounded-[16px] text-center text-xs font-bold uppercase tracking-wider text-[#fefae0] bg-[#5A5A40] hover:bg-[#283618] transition-colors"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
