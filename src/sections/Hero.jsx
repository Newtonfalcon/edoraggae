import { useState, useEffect } from "react";
import { Calendar, MapPin, Sparkles, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";
import BackgroundMusic from "../components/Music";

const slides = [
  {
    image: "/src/assets/images/reggae_hero_banner_1782844474123.jpg",
    fallback: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80",
    tagline: "One Culture! One Vibes!! One Shine!!!",
    title: "EDO International",
    subtitle: "Reggae Festival",
    description: "Join us in Kings Square, Benin City, Nigeria for an extraordinary celebration where legendary global reggae vibrations seamlessly fuse with the ancient majesty and heritage of the Edo Kingdom.",
    colorAccent: "#58111a"
  },
  {
    image: "/src/assets/images/cultural_fusion_1782844520544.jpg",
    fallback: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    tagline: "#OneCultureOneVibesOneShine",
    title: "Kings Square",
    subtitle: "Benin City, Nigeria",
    description: "Witness spectacular coral-beaded royal costumes, traditional Edo folklore, and live percussion bands sharing the stage with globally acclaimed roots reggae musicians.",
    colorAccent: "#bc6c25"
  },
  {
    image: "/src/assets/images/live_performance_1782844506404.jpg",
    fallback: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
    tagline: "Confirmed Headliner: May Shua",
    title: "Live Roots Reggae",
    subtitle: "Legends & Future Stars",
    description: "Explore the culinary village, local bronze casting demonstrations, organic ital foods, and an exquisite showcase of African craftsmanship fostering unity.",
    colorAccent: "#283618"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Slide transition handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Countdown timer: Target date October 23, 2026
  useEffect(() => {
    const targetDate = new Date("2026-10-23T10:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#faf7ec]"
    >
      {/* Cinematic Image Background Layers with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.22, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                // If local image fails to load, fallback gracefully to a high-res Unsplash image
                e.currentTarget.src = slides[currentSlide].fallback;
              }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Brand Ambient Grading Gradients for Max Text Contrast on Cream Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7ec] via-[#faf7ec]/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7ec] via-transparent to-[#faf7ec]/70 z-10" />
      </div>

      <BackgroundMusic />

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Carousel Content */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Announcement Pill with Dynamic Accent */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`pill-${currentSlide}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#58111a]/5 border border-[#58111a]/15 text-[#58111a] font-sans text-[10px] font-extrabold uppercase tracking-widest shadow-xs"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#58111a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#58111a]"></span>
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[#58111a]">
                  <Sparkles className="w-3.5 h-3.5 text-[#bc6c25]" />
                  {slides[currentSlide].tagline}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title & Headline Animation */}
            <div className="min-h-[180px] sm:min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#283618] italic leading-[1.05] tracking-tight">
                    {slides[currentSlide].title} <br />
                    <span className="text-[#58111a] not-italic font-black block mt-1">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>
                  
                  {/* Dynamic Subtitle Description */}
                  <p className="text-sm sm:text-base md:text-lg text-[#5a5a40] max-w-2xl leading-relaxed font-medium">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Metadata Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 text-xs font-bold text-[#58111a] uppercase tracking-wider"
            >
              <div className="flex items-center space-x-2.5 bg-[#faedcd]/40 border border-[#bc6c25]/15 px-4 py-3.5 rounded-[16px] justify-center sm:justify-start shadow-xs">
                <Calendar className="w-4 h-4 text-[#bc6c25]" />
                <span className="font-mono">{siteData.hero.date}</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-[#faedcd]/40 border border-[#bc6c25]/15 px-4 py-3.5 rounded-[16px] justify-center sm:justify-start shadow-xs">
                <MapPin className="w-4 h-4 text-[#bc6c25]" />
                <span>{siteData.hero.venue}</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#experience"
                className="px-10 py-5 rounded-[20px] font-sans font-bold uppercase text-xs tracking-widest bg-[#58111a] text-[#fefae0] hover:bg-[#283618] hover:text-[#fefae0] transition-all duration-300 shadow-md hover:scale-105 text-center cursor-pointer"
              >
                {siteData.hero.ctaPrimary}
              </a>
              <a
                href="#about"
                className="px-10 py-5 rounded-[20px] font-sans font-bold uppercase text-xs tracking-widest border-2 border-[#58111a]/30 text-[#58111a] hover:bg-[#58111a] hover:text-[#fefae0] hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                {siteData.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Carousel Controls & Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end space-y-6">
            
            {/* Play/Pause Autoplay Controls */}
            <div className="flex items-center gap-3 bg-[#faf7ec]/90 backdrop-blur-md border border-[#bc6c25]/20 p-3 rounded-2xl self-start lg:self-auto shadow-sm">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-xl bg-[#faedcd]/20 hover:bg-[#58111a] hover:text-[#fefae0] text-[#58111a] transition-all duration-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
                title={isPlaying ? "Pause Carousel Autoplay" : "Resume Carousel Autoplay"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 text-[#bc6c25]" />
                    <span>Autoplay Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-[#58111a]" />
                    <span>Autoplay Paused</span>
                  </>
                )}
              </button>
            </div>

            {/* Next / Previous Slides Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-4 rounded-full bg-[#faf7ec]/80 hover:bg-[#58111a] text-[#58111a] hover:text-[#fefae0] border border-[#bc6c25]/20 transition-all duration-300 shadow-xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Step indicator pills */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide ? "w-8 bg-[#58111a]" : "w-2 bg-[#bc6c25]/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-4 rounded-full bg-[#faf7ec]/80 hover:bg-[#58111a] text-[#58111a] hover:text-[#fefae0] border border-[#bc6c25]/20 transition-all duration-300 shadow-xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              
            </div>

          </div>
        </div>

        {/* Live Countdown Timer Widget positioned at base of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-[#faf7ec]/90 border border-[#bc6c25]/15 backdrop-blur-md rounded-[32px] p-6 sm:p-8 shadow-lg"
        >
          <h2 className="text-xs uppercase tracking-widest text-[#58111a] font-mono font-extrabold mb-5 text-center">
            Counting Down To The Reggae &amp; Coral Majesty
          </h2>
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-[#fefae0] border border-[#bc6c25]/10 rounded-2xl py-4 flex flex-col justify-center items-center shadow-xs">
              <span className="text-2xl sm:text-4xl font-mono font-extrabold text-[#58111a] leading-none">
                {timeLeft.days}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#5a5a40] font-bold mt-2">
                Days
              </span>
            </div>
            <div className="bg-[#fefae0] border border-[#bc6c25]/10 rounded-2xl py-4 flex flex-col justify-center items-center shadow-xs">
              <span className="text-2xl sm:text-4xl font-mono font-extrabold text-[#58111a] leading-none">
                {timeLeft.hours}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#5a5a40] font-bold mt-2">
                Hours
              </span>
            </div>
            <div className="bg-[#fefae0] border border-[#bc6c25]/10 rounded-2xl py-4 flex flex-col justify-center items-center shadow-xs">
              <span className="text-2xl sm:text-4xl font-mono font-extrabold text-[#58111a] leading-none">
                {timeLeft.minutes}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#5a5a40] font-bold mt-2">
                Mins
              </span>
            </div>
            <div className="bg-[#fefae0] border border-[#bc6c25]/10 rounded-2xl py-4 flex flex-col justify-center items-center shadow-xs">
              <span className="text-2xl sm:text-4xl font-mono font-extrabold text-[#58111a] leading-none">
                {timeLeft.seconds}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#5a5a40] font-bold mt-2">
                Secs
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
