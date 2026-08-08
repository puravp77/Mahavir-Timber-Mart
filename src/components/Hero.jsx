import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, TreePine, Layers, Truck, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_INFO, FLOATING_CARDS } from '../data/timberData';

const iconMap = {
  TreePine: TreePine,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Truck: Truck
};

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Cinematic Background Video with Image Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/assets/Vid-1.mp4"
          poster="/assets/1.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
        />
        
        {/* Layered cinematic dark gradients for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-black/75" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Video Audio Control Toggle Pill */}
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 p-2.5 sm:p-3 rounded-full glass-panel-gold text-[#C89D5B] hover:text-white transition-all shadow-xl flex items-center space-x-2 border border-[#C89D5B]/40"
        title={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />}
        <span className="text-[11px] sm:text-xs font-mono hidden xs:inline">{isMuted ? "Audio Off" : "Audio On"}</span>
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Luxury Logo Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full glass-panel-gold mb-4 sm:mb-6 border border-[#C89D5B]/40 shadow-xl max-w-full"
        >
          <img src={COMPANY_INFO.logo} alt="Logo" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-contain bg-white shrink-0" />
          <span className="text-[10px] sm:text-sm font-medium uppercase tracking-widest text-[#C89D5B] truncate">
            Surat's Premier Hardwood & Timber House
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]"
        >
          Premium Timber For{' '}
          <span className="text-gold-gradient italic font-serif">Timeless Creations</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-4 sm:mt-6 text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-2"
        >
          Delivering premium timber logs, natural hardwood and quality craftsmanship for construction, interiors and furniture throughout Surat and Gujarat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 w-full"
        >
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 sm:py-4 rounded-full bg-gold-gradient text-black font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-xl shadow-[#9A6B34]/30"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phones[0]}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 sm:py-4 rounded-full glass-panel text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-[#C89D5B]/50 transition-all duration-300"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#C89D5B] shrink-0" />
            <span>Call Now</span>
          </a>
        </motion.div>

        {/* Floating Luxury Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto text-left"
        >
          {FLOATING_CARDS.map((card) => {
            const IconComponent = iconMap[card.icon] || TreePine;
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-3.5 sm:p-5 rounded-2xl border border-white/10 hover:border-[#C89D5B]/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#9A6B34]/20 border border-[#C89D5B]/30 flex items-center justify-center mb-2 sm:mb-3">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#C89D5B]" />
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-white font-serif leading-snug">
                  {card.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 font-light leading-tight">
                  {card.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
      
      {/* Decorative Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none" />
    </section>
  );
}
