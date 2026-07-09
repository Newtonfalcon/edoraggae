import { Award } from "lucide-react";
import { motion } from "motion/react";
import { siteData } from "../data/siteData";

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-[#f8f7f2] bg-mesh relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#5A5A40]/10" />

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
            <Award className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Sponsors</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#283618] italic tracking-tight leading-tight mb-4"
          >
            {siteData.partners.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6b705c] font-medium"
          >
            {siteData.partners.subtitle}
          </motion.p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {siteData.partners.categories.map((category, catIdx) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-center text-[#bc6c25] font-mono font-extrabold">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {category.logos.map((logo, logoIdx) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: logoIdx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center justify-center p-6 rounded-[24px] bg-[#f5f2e9] border border-[#e5e1d8] hover:bg-[#faedcd]/30 transition-all text-center min-h-[100px] relative group overflow-hidden shadow-xs hover:shadow-sm"
                  >
                    {/* Decorative color border on hover */}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#bc6c25] via-[#5A5A40] to-[#e9edc9] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <span className="font-display font-bold text-sm text-[#283618] group-hover:text-[#bc6c25] transition-colors leading-tight">
                      {logo.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#6b705c] font-mono mt-1 font-bold">
                      {logo.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
