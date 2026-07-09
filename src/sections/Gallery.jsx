import { useState } from "react";
import { Image, Maximize2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Extract unique categories, adding 'All' as the first option
  const categories = ["All", ...new Set(siteData.gallery.images.map((img) => img.category))];

  // Filter images based on selected category
  const filteredImages =
    activeFilter === "All"
      ? siteData.gallery.images
      : siteData.gallery.images.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#f8f7f2] bg-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#e9edc9] border border-[#e5e1d8] text-xs text-[#5A5A40] font-sans font-bold uppercase tracking-wider mb-3"
          >
            <Image className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Visuals</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#283618] italic tracking-tight leading-tight mb-4"
          >
            {siteData.gallery.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6b705c] font-medium"
          >
            {siteData.gallery.subtitle}
          </motion.p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12 max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-[16px] text-xs font-bold tracking-wider uppercase transition-all duration-300 relative ${
                activeFilter === category
                  ? "text-[#fefae0]"
                  : "text-[#6b705c] hover:text-[#283618] bg-[#f5f2e9] border border-[#e5e1d8]"
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 rounded-[16px] bg-[#bc6c25]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={image.src}
                className="group relative h-80 rounded-[32px] overflow-hidden bg-[#f5f2e9] border border-[#e5e1d8] shadow-xs hover:shadow-md cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.caption}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Dark Overlay Gradient (Natural Forest tone) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#283618]/95 via-[#283618]/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end z-10">
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-[#bc6c25] tracking-wider bg-[#faedcd] border border-[#e5e1d8] px-2.5 py-1 rounded-md">
                      {image.category}
                    </span>
                    <p className="text-sm font-semibold text-[#fefae0] mt-3 font-display italic tracking-tight leading-tight">
                      {image.caption}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-xs border border-white/25 text-[#fefae0] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#283618]/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-[32px] border border-[#e5e1d8] bg-[#f8f7f2] flex flex-col shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#fefae0] text-[#283618] hover:bg-[#faedcd] transition-colors border border-[#e5e1d8] shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Large Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  referrerPolicy="no-referrer"
                  className="w-full object-contain max-h-[70vh] bg-[#f8f7f2]"
                />

                {/* Details Footer */}
                <div className="bg-[#f5f2e9] p-6 border-t border-[#e5e1d8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#bc6c25] tracking-widest block mb-1">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display italic text-[#283618]">
                      {selectedImage.caption}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-[16px] bg-[#e9edc9] hover:bg-[#5A5A40] hover:text-[#fefae0] border border-[#e5e1d8] text-[#283618] transition-all duration-200 w-full sm:w-auto"
                  >
                    Close Viewer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
