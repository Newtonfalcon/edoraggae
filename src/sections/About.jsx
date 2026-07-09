import { Crown, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import { siteData } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f7f2] relative overflow-hidden">
      {/* Decorative top wave/glow border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A5A40]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#e9edc9] border border-[#e5e1d8] text-xs text-[#5A5A40] font-sans font-bold uppercase tracking-wider mb-3"
          >
            <Crown className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>{siteData.about.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#283618] italic tracking-tight leading-tight mb-4"
          >
            {siteData.about.subtitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6b705c] font-medium"
          >
            Blending royalty, rhythm, and rich history in the heart of Benin.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Festival History/Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#bc6c25] italic flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#bc6c25] not-italic" />
              {siteData.about.historyTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#6b705c] leading-relaxed">
              {siteData.about.historyText1}
            </p>
            <p className="text-sm sm:text-base text-[#6b705c]/85 leading-relaxed">
              {siteData.about.historyText2}
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {siteData.trustBadges.map((badge, idx) => (
                <div
                  key={badge.name}
                  className="p-5 rounded-[20px] bg-[#faedcd]/20 border border-[#e5e1d8] flex flex-col hover:border-[#6b705c]/20 hover:bg-[#faedcd]/30 transition-all duration-350"
                >
                  <span className="text-sm font-bold text-[#283618] font-display mb-1 flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        idx === 0
                          ? "bg-[#bc6c25]"
                          : idx === 1
                            ? "bg-[#5A5A40]"
                            : idx === 2
                              ? "bg-[#e9edc9]"
                              : "bg-[#faedcd]"
                      } border border-[#283618]/10`}
                    />
                    {badge.name}
                  </span>
                  <span className="text-xs text-[#6b705c] leading-normal">
                    {badge.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: CEO Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[32px] p-6 sm:p-8 bg-[#f5f2e9] border border-[#e5e1d8] overflow-hidden shadow-sm">
              {/* Decorative top band styled in earthy colors */}
              <div className="absolute top-0 left-0 w-full h-1.5 flex">
                <div className="w-1/3 h-full bg-[#bc6c25]" />
                <div className="w-1/3 h-full bg-[#5A5A40]" />
                <div className="w-1/3 h-full bg-[#faedcd]" />
              </div>

              {/* CEO Headshot */}
              <div className="relative w-28 h-28 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#5A5A40]/30 shadow-sm">
                <img
                  src={siteData.about.ceoImage}
                  alt={siteData.ceo}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CEO Identity */}
              <div className="text-center mb-6">
                <span className="text-lg font-bold text-[#283618] font-display block">
                  {siteData.ceo}
                </span>
                <span className="text-xs text-[#bc6c25] font-bold tracking-wide block mt-1 uppercase font-mono">
                  {siteData.ceoTitle}
                </span>
              </div>

              {/* Quote text bubble */}
              <div className="relative p-5 rounded-2xl bg-[#fefae0] border border-[#e5e1d8] mb-4">
                <p className="text-xs sm:text-sm italic text-[#283618] leading-relaxed text-center relative z-10">
                  &ldquo;{siteData.about.ceoQuote}&rdquo;
                </p>
              </div>

              {/* Message from CEO */}
              <p className="text-xs text-[#6b705c] leading-relaxed text-center">
                {siteData.about.ceoMessage}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
