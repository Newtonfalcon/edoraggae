import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#f8f7f2] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-[#5A5A40]/10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#e9edc9] border border-[#e5e1d8] text-xs text-[#5A5A40] font-sans font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Support</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#283618] italic tracking-tight leading-tight mb-4">
            {siteData.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6b705c] font-medium">
            {siteData.faq.subtitle}
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {siteData.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#e5e1d8] bg-[#f5f2e9] hover:bg-[#faedcd]/25 overflow-hidden transition-all shadow-xs"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none group"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#283618] italic group-hover:text-[#bc6c25] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-[#e9edc9]/50 border border-[#e5e1d8] text-[#bc6c25] group-hover:text-[#283618] transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-[#faedcd] border-[#bc6c25]/30 text-[#bc6c25]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-4 text-xs sm:text-sm text-[#6b705c] leading-relaxed border-t border-[#e5e1d8]/70">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
