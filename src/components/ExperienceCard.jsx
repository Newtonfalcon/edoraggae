import { Music, Compass, Palette, Utensils } from "lucide-react";
import { motion } from "motion/react";

const iconMap = {
  Music: Music,
  Compass: Compass,
  Palette: Palette,
  Utensils: Utensils,
};

export default function ExperienceCard({ item, index }) {
  const IconComponent = iconMap[item.icon] || Music;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[400px] rounded-[32px] overflow-hidden bg-[#f5f2e9] border border-[#e5e1d8] shadow-xs hover:shadow-md transition-shadow duration-300"
    >
      {/* Background Image with lazy loading and referrerPolicy */}
      <img
        src={item.image}
        alt={item.title}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
      />

      {/* Elegant Gradient Overlay with Natural Forest Tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#283618]/95 via-[#283618]/45 to-transparent" />

      {/* Icon Badge */}
      <div className="absolute top-5 left-5 p-3.5 rounded-2xl bg-[#fefae0] border border-[#e5e1d8] text-[#bc6c25] z-10 group-hover:scale-110 transition-all duration-300 shadow-sm">
        <IconComponent className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end z-10">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#fefae0] italic tracking-tight mb-2 group-hover:text-[#faedcd] transition-colors">
          {item.title}
        </h3>
        
        {/* Animated Slide Up Description */}
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
          {item.description}
        </p>

        {/* Dynamic color footer accent based on index (Earthy Natural Tones Palette) */}
        <div 
          className={`w-12 h-1 rounded-full mt-4 transition-all duration-300 group-hover:w-full ${
            index % 3 === 0 
              ? "bg-[#bc6c25]" 
              : index % 3 === 1 
                ? "bg-[#5A5A40]" 
                : "bg-[#faedcd]"
          }`}
        />
      </div>
    </motion.div>
  );
}
export { iconMap };
