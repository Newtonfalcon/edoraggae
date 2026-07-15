import { Briefcase, Megaphone, Users, Rocket, Disc3 } from "lucide-react";
import { motion } from "motion/react";
import { siteData } from "../data/siteData";

const iconMap = {
  Megaphone: Megaphone,
  Users: Users,
  Rocket: Rocket,
  Disc3: Disc3,
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-[#f8f7f2] relative overflow-hidden">
      {/* Decorative top separator */}
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
            <Briefcase className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Our Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#283618] italic tracking-tight leading-tight mb-4"
          >
            {siteData.whatWeDo.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6b705c] font-medium"
          >
            {siteData.whatWeDo.subtitle}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteData.whatWeDo.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Briefcase;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative p-6 sm:p-8 rounded-[28px] bg-[#f5f2e9] border border-[#e5e1d8] shadow-xs hover:shadow-md hover:border-[#6b705c]/20 hover:bg-[#faedcd]/30 transition-all duration-300"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#fefae0] border border-[#e5e1d8] flex items-center justify-center text-[#bc6c25] mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#283618] italic tracking-tight mb-2 group-hover:text-[#bc6c25] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6b705c] leading-relaxed">
                  {service.description}
                </p>

                {/* Footer accent */}
                <div
                  className={`w-10 h-1 rounded-full mt-5 transition-all duration-300 group-hover:w-full ${
                    index % 3 === 0
                      ? "bg-[#bc6c25]"
                      : index % 3 === 1
                        ? "bg-[#5A5A40]"
                        : "bg-[#e9edc9]"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CEO callout strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center bg-[#faedcd]/20 border border-[#e5e1d8] rounded-[32px] p-6 sm:p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-sm"
        >
          <p className="text-xs sm:text-sm text-[#6b705c] leading-relaxed">
            Led by <span className="font-bold text-[#283618]">{siteData.ceo}</span>, {siteData.ceoTitle.toLowerCase()}, our team works year-round promoting reggae music, managing both established and upcoming artists, and producing original music that keeps the culture alive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}