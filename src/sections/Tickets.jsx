import { MessageCircle, Phone, Mail, Ticket, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { siteData } from "../data/siteData";

export default function Tickets() {
  const { tickets, socials, contact } = siteData;

  const channels = [
    {
      key: "whatsapp",
      label: "Chat on WhatsApp",
      value: contact.phoneDisplay,
      href: socials.whatsapp,
      icon: MessageCircle,
      accent: "#25D366",
    },
    {
      key: "call",
      label: "Call Us",
      value: contact.phoneDisplay,
      href: socials.phone,
      icon: Phone,
      accent: "#bc6c25",
    },
    {
      key: "email",
      label: "Email Us",
      value: contact.emailDisplay,
      href: socials.email,
      icon: Mail,
      accent: "#58111a",
    },
  ];

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

          {/* Direct Contact Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {channels.map(({ key, label, value, href, icon: Icon, accent }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/70 border border-[#bc6c25]/15 hover:border-[#58111a]/30 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${accent}1A`, color: accent }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                    {label}
                  </span>
                  <span className="block text-[11px] text-[#5a5a40] font-medium break-all">
                    {value}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#bc6c25] absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#bc6c25]/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#5a5a40] font-medium font-mono">
            <span>🎟️ Reach us directly for ticket status</span>
            <span className="hidden sm:inline">|</span>
            <span>✨ Fast response on WhatsApp</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}