import { Compass, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { siteData } from "../data/siteData";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#f8f7f2] relative">
      {/* Decorative vertical separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-[#5A5A40]/10" />

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
            <Compass className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Discover</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#283618] italic tracking-tight leading-tight mb-4"
          >
            {siteData.experience.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6b705c] font-medium"
          >
            {siteData.experience.subtitle}
          </motion.p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {siteData.experience.items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA Banner at the bottom of Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-[#faedcd]/20 border border-[#e5e1d8] rounded-[32px] p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="w-8 h-8 text-[#bc6c25] mx-auto mb-4" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#283618] italic mb-2">
            Want to see the daily schedules, workshops, and setlists?
          </h3>
          <p className="text-xs sm:text-sm text-[#6b705c] max-w-xl mx-auto mb-6">
            We are curating a spectacular three-day timeline starting from Friday cultural parades to Sunday final heavy dub reggae sessions.
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-3.5 rounded-[16px] text-xs font-bold uppercase tracking-widest text-[#fefae0] bg-[#5A5A40] hover:bg-[#283618] transition-all duration-300 shadow-sm"
          >
            {siteData.experience.ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
