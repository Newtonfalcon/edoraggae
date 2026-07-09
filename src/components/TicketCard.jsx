import { useState } from "react";
import { Check, Sparkles, Loader2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TicketCard({ tier, index }) {
  const [bookingState, setBookingState] = useState("idle"); // idle, booking, completed

  const handleBooking = () => {
    setBookingState("booking");
    setTimeout(() => {
      setBookingState("completed");
      setTimeout(() => {
        setBookingState("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-full transition-all border ${
        tier.popular
          ? "bg-[#faedcd] border-[#bc6c25] shadow-md shadow-[#bc6c25]/5"
          : "bg-[#f5f2e9] border-[#e5e1d8] hover:border-[#6b705c]/30"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#bc6c25] text-[9px] font-bold uppercase tracking-widest text-[#fefae0] flex items-center gap-1.5 shadow-sm border border-white/20">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          Most Popular
        </span>
      )}

      <div>
        <div className="mb-4">
          <h3 className="font-display font-bold text-xl text-[#283618] italic">
            {tier.name}
          </h3>
          <p className="text-xs text-[#6b705c] mt-2 line-clamp-2 min-h-[32px]">
            {tier.description}
          </p>
        </div>

        <div className="flex items-baseline gap-2 my-5">
          <span className="text-3xl sm:text-4xl font-mono font-extrabold text-[#283618] tracking-tight">
            {tier.price}
          </span>
          <span className="text-xs text-[#bc6c25] font-bold font-mono">
            / {tier.period}
          </span>
        </div>

        <hr className="border-[#e5e1d8] my-6" />

        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-xs text-[#283618] font-medium">
              <Check className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        {/* Interactive feedback states */}
        <AnimatePresence mode="wait">
          {bookingState === "booking" && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex items-center justify-center gap-2 p-3 bg-[#e9edc9] text-[#5A5A40] rounded-[16px] text-xs font-bold"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Securing checkout slot...</span>
            </motion.div>
          )}

          {bookingState === "completed" && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col gap-1 p-3 bg-[#e9edc9] text-[#283618] rounded-[16px] text-xs font-bold border border-[#5A5A40]/20 shadow-xs"
            >
              <div className="flex items-center justify-center gap-1.5 text-[#5A5A40]">
                <ShieldCheck className="w-4 h-4" />
                <span>Redirecting to Checkout!</span>
              </div>
              <p className="text-[10px] text-[#6b705c] font-normal text-center">
                Check browser popup blocker if tab doesn't load.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={handleBooking}
          disabled={bookingState !== "idle"}
          className={`w-full py-4 rounded-[16px] text-xs font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 ${
            tier.popular
              ? "bg-[#5A5A40] text-[#fefae0] hover:bg-[#283618]"
              : "bg-[#e9edc9] hover:bg-[#5A5A40] hover:text-[#fefae0] text-[#283618] border border-[#e5e1d8]"
          }`}
        >
          {bookingState === "idle" ? tier.cta : "Processing..."}
        </button>
      </div>
    </motion.div>
  );
}
