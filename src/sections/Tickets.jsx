import { useState } from "react";
import { Mail, CheckCircle2, Ticket, Loader2, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";

export default function Tickets() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const { tickets } = siteData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !fullname) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setPhone("");
      setFullname("");
    }, 1800);
  };

  return (
    <section id="tickets" className="py-24 bg-[#faf7ec] relative overflow-hidden">
      {/* Wave / Gradient Border Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bc6c25]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] bg-gradient-to-br from-[#faf7ec] to-[#faedcd]/40 border border-[#bc6c25]/20 p-8 sm:p-12 md:p-16 shadow-xl text-center overflow-hidden"
        >
          {/* Subtle design accents */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#bc6c25]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#58111a]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#58111a]/5 border border-[#58111a]/15 text-[#58111a] mb-8">
            <Ticket className="w-8 h-8 text-[#bc6c25]" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#283618] italic tracking-tight leading-none mb-4">
            {tickets.title}
          </h2>

          <p className="text-xs uppercase font-extrabold tracking-widest text-[#58111a] font-mono mb-4">
            {tickets.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#5a5a40] max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            {tickets.description}
          </p>

          {/* Form and Feedback States */}
          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* Full Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full px-5 py-4 pl-12 rounded-2xl bg-white/80 border border-[#bc6c25]/20 text-[#283618] text-sm font-medium placeholder-[#5a5a40]/60 focus:outline-hidden focus:border-[#58111a] focus:bg-white transition-all shadow-xs"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bc6c25]">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 pl-12 rounded-2xl bg-white/80 border border-[#bc6c25]/20 text-[#283618] text-sm font-medium placeholder-[#5a5a40]/60 focus:outline-hidden focus:border-[#58111a] focus:bg-white transition-all shadow-xs"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bc6c25]">
                      <Mail className="w-4 h-4" />
                    </span>
                  </div>

                  {/* WhatsApp/Phone (Optional) */}
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="WhatsApp Number (Optional)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-4 pl-12 rounded-2xl bg-white/80 border border-[#bc6c25]/20 text-[#283618] text-sm font-medium placeholder-[#5a5a40]/60 focus:outline-hidden focus:border-[#58111a] focus:bg-white transition-all shadow-xs"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bc6c25] font-mono text-xs font-bold">
                      +234
                    </span>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-2xl bg-[#58111a] hover:bg-[#283618] text-[#fefae0] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Securing Priority Spot...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Join Priority Waiting List</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-3xl bg-[#e9edc9]/50 border border-[#5a5a40]/20 space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#283618]/10 text-[#283618]">
                    <CheckCircle2 className="w-6 h-6 text-[#283618]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#283618]">
                    You are on the list!
                  </h4>
                  <p className="text-xs text-[#5a5a40] leading-relaxed">
                    Thank you for joining the <strong>EDO International Reggae Festival Waiting List</strong>. A confirmation email has been dispatched. You will receive first-priority notifications and an exclusive discount code once tickets go live.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-bold uppercase tracking-wider text-[#58111a] hover:text-[#bc6c25] transition-colors"
                  >
                    Register another email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 pt-8 border-t border-[#bc6c25]/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#5a5a40] font-medium font-mono">
            <span>🎟️ 10,000+ Fans Pre-Registered</span>
            <span className="hidden sm:inline">|</span>
            <span>✨ Exclusive Early-Bird Discounts</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
