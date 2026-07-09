import { useState } from "react";
import { Music, Mic, Star, Crown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";

const categories = [
  { id: "legends", label: "Reggae Legends", icon: Crown },
  { id: "featured", label: "Featured Artists", icon: Star },
  { id: "supporting", label: "Supporting Acts", icon: Music },
  { id: "mcs", label: "Official MCs", icon: Mic }
];

export default function Lineup() {
  const [activeTab, setActiveTab] = useState("legends");
  const { lineup } = siteData;

  const getArtistsList = () => {
    switch (activeTab) {
      case "legends":
        return lineup.legends;
      case "featured":
        return lineup.featured;
      case "supporting":
        return lineup.supporting;
      case "mcs":
        return lineup.mcs;
      default:
        return [];
    }
  };

  const getThemeBg = () => {
    switch (activeTab) {
      case "legends":
        return "from-[#58111a]/5 to-[#bc6c25]/5 border-[#58111a]/10";
      case "featured":
        return "from-[#bc6c25]/5 to-[#faedcd]/10 border-[#bc6c25]/10";
      case "supporting":
        return "from-[#283618]/5 to-[#faedcd]/10 border-[#283618]/10";
      case "mcs":
        return "from-[#58111a]/5 to-[#283618]/5 border-[#58111a]/10";
      default:
        return "";
    }
  };

  const currentArtists = getArtistsList();

  return (
    <section id="lineup" className="py-24 bg-[#faf7ec] relative overflow-hidden">
      {/* Background Ambience Subtle Yellow/Cream Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#faedcd]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#e9edc9]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#58111a]/5 border border-[#58111a]/15 text-xs text-[#58111a] font-sans font-extrabold uppercase tracking-widest mb-4"
          >
            <Music className="w-3.5 h-3.5 text-[#bc6c25]" />
            <span>Artist Lineup</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#283618] italic tracking-tight leading-tight mb-4"
          >
            {lineup.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#5a5a40] font-medium"
          >
            {lineup.subtitle}
          </motion.p>
        </div>

        {/* Confirmed Headliner Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto mb-16 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#58111a] via-[#3a0a10] to-[#283618] p-8 sm:p-12 shadow-2xl border border-white/10"
        >
          {/* Subtle background overlay map or graphics */}
          <div className="absolute inset-0 bg-radial-at-tr from-[#bc6c25]/20 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Col: Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-xs aspect-square rounded-[32px] overflow-hidden border-4 border-[#faedcd] shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src={lineup.confirmedHeadliner.image}
                  alt={lineup.confirmedHeadliner.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Right Col: Bio / Content */}
            <div className="md:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#faedcd]/20 text-[#faedcd] border border-[#faedcd]/30 text-[10px] font-extrabold uppercase tracking-widest">
                <Crown className="w-3.5 h-3.5 text-[#faedcd] animate-pulse" />
                <span>{lineup.confirmedHeadliner.role}</span>
              </div>
              
              <h3 className="font-display font-black text-4xl sm:text-6xl text-[#fefae0] tracking-tight italic">
                {lineup.confirmedHeadliner.name}
              </h3>
              
              <p className="text-sm sm:text-base text-[#e5e1d8] leading-relaxed font-medium">
                {lineup.confirmedHeadliner.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono font-bold text-[#e9edc9] uppercase tracking-wider">
                <span className="px-4 py-2 bg-white/5 rounded-xl border border-white/10">Kings Square Main Stage</span>
                <span className="px-4 py-2 bg-white/5 rounded-xl border border-white/10">Confirmed Live Performance</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-[#58111a] text-[#fefae0] border-transparent shadow-md scale-105"
                    : "bg-white text-[#58111a] border-[#58111a]/15 hover:bg-[#faedcd]/30"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#faedcd]" : "text-[#bc6c25]"}`} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Card Grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {currentArtists.map((artist, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b ${getThemeBg()} border transition-all duration-300 shadow-xs`}
                >
                  {/* Small decorative index number */}
                  <span className="absolute top-3.5 left-3.5 font-mono text-[9px] font-extrabold text-[#5a5a40]/40">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Micro Visual Decor */}
                  <div className="w-12 h-12 rounded-full bg-[#faedcd]/40 flex items-center justify-center mb-4 text-[#58111a] border border-[#bc6c25]/10">
                    <Music className="w-5 h-5 opacity-80" />
                  </div>

                  {/* Artist Name */}
                  <h4 className="font-display font-extrabold text-base sm:text-lg text-[#283618] tracking-tight leading-snug line-clamp-2">
                    {artist}
                  </h4>

                  {/* Custom subtitle badge */}
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#bc6c25] mt-3 block font-mono">
                    {activeTab === "legends" 
                      ? "Reggae Legend" 
                      : activeTab === "featured" 
                        ? "Featured Act" 
                        : activeTab === "supporting" 
                          ? "Supporting" 
                          : "Compere / MC"
                    }
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Hashtag Callout at the Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-20"
        >
          <span className="text-xs font-bold text-[#5a5a40] uppercase tracking-widest block mb-2">
            Share the excitement on socials
          </span>
          <a
            href="https://instagram.com/edo_reggae_festival"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-black text-2xl sm:text-4xl text-[#58111a] hover:text-[#bc6c25] transition-colors duration-300 italic tracking-tight"
          >
            {siteData.hashtag}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
