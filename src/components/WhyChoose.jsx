import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trees, Truck, LayoutGrid, Tag, Shield, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/timberData';

const iconMap = {
  Award: Award,
  Trees: Trees,
  TruckCheck: Truck,
  LayoutGrid: LayoutGrid,
  Tag: Tag,
  Shield: Shield
};

export default function WhyChoose() {
  return (
    <section id="whyChoose" className="py-12 sm:py-24 bg-[#0F0F0F] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#9A6B34]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Uncompromising Excellence</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why Choose <span className="text-gold-gradient">Shree Mahavir</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-400 text-xs sm:text-lg font-light">
            We bridge the gap between raw natural forest wealth and fine architectural luxury, guaranteeing authentic timber quality for every scale of project.
          </p>
        </div>

        {/* 6 Feature Cards Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-panel p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#C89D5B]/50 transition-all duration-300 relative group flex flex-col justify-between hover:shadow-2xl hover:shadow-[#9A6B34]/20"
              >
                <div>
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold-gradient text-black flex items-center justify-center mb-3 sm:mb-6 shadow-lg shadow-[#9A6B34]/30 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-4 h-4 sm:w-7 sm:h-7" />
                  </div>
                  
                  <h3 className="text-xs sm:text-xl font-serif font-bold text-white group-hover:text-[#C89D5B] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-3 text-gray-400 text-[10px] sm:text-sm font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-xs text-[#C89D5B] font-mono">
                  <span>GRADE A</span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C89D5B] animate-ping" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
