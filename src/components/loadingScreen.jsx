import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/images/logo.png";

// Rasta flag colors
const RED = "#DA291C";
const YELLOW = "#FED100";
const GREEN = "#007A33";

const musicEmojis = ["🎵", "🎶", "🎷", "🥁", "🎸", "🎶"];

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0c10] overflow-hidden"
        >
          {/* Pulsing red / yellow / green glow rings behind the logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[RED, YELLOW, GREEN].map((color, i) => (
              <motion.div
                key={color}
                className="absolute rounded-full border-2"
                style={{ borderColor: color, width: 180, height: 180 }}
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: [0.8, 2.2], opacity: [0.6, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.6,
                }}
              />
            ))}
          </div>

          {/* Floating music emojis drifting upward */}
          <div className="absolute inset-0 pointer-events-none">
            {musicEmojis.map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-xl sm:text-2xl select-none"
                style={{ left: `${8 + i * 15}%`, bottom: "10%" }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: [40, -220], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 4 + (i % 3) * 0.6,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#0b0c10] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)] flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Edo Reggae Festival"
              className="w-full h-full object-contain p-3"
            />
          </motion.div>

          {/* Tri-color sweeping progress bar */}
          <div className="relative z-10 mt-8 w-52 sm:w-64 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${RED}, ${YELLOW}, ${GREEN})`,
              }}
              animate={{ x: ["-100%", "260%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Loading text, each letter-group cycling through the flag colors */}
          <div className="relative z-10 mt-5 flex items-center gap-1 font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#fefae0]/80">
            <span>Loading</span>
            {[RED, YELLOW, GREEN].map((color, i) => (
              <motion.span
                key={i}
                style={{ color }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}