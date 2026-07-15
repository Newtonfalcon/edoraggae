import { motion } from "motion/react";
import { siteData } from "../data/siteData";

// Official WhatsApp glyph (brand-accurate outline, unlike a generic chat icon)
function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.822.738 5.58 2.14 8.005L0 32l8.2-2.1A15.93 15.93 0 0 0 16.004 32C24.84 32 32 24.837 32 16S24.84 0 16.004 0zm0 29.09c-2.523 0-4.99-.678-7.14-1.96l-.512-.303-4.865 1.246 1.298-4.744-.334-.487A13.06 13.06 0 0 1 2.91 16c0-7.22 5.874-13.09 13.094-13.09 7.22 0 13.086 5.87 13.086 13.09 0 7.22-5.866 13.09-13.086 13.09zm7.18-9.79c-.393-.196-2.323-1.146-2.683-1.276-.36-.132-.622-.196-.884.196-.262.393-1.014 1.276-1.243 1.538-.23.262-.458.295-.85.098-.393-.196-1.658-.61-3.158-1.947-1.167-1.04-1.955-2.325-2.184-2.718-.23-.393-.025-.605.172-.8.176-.176.393-.458.59-.687.196-.23.262-.393.393-.655.13-.262.065-.49-.033-.687-.098-.196-.884-2.13-1.212-2.918-.32-.767-.645-.663-.884-.676-.229-.011-.49-.013-.753-.013-.262 0-.687.098-1.047.49-.36.393-1.375 1.343-1.375 3.277s1.408 3.802 1.604 4.064c.196.262 2.77 4.23 6.71 5.933.937.405 1.668.647 2.238.828.94.299 1.796.257 2.472.156.754-.113 2.323-.95 2.65-1.865.327-.916.327-1.702.229-1.865-.098-.164-.36-.262-.753-.458z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'd like to know more about the EDO International Reggae Festival."
  );
  const href = `${siteData.socials.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-lg shadow-black/20 group"
    >
      {/* Pulse ring for attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <WhatsAppIcon className="relative w-7 h-7 sm:w-8 sm:h-8 text-white" />

      {/* Hover tooltip (desktop only) */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 rounded-lg bg-[#283618] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}