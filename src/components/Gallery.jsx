import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/timberData';

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Logs', 'Live Edge', 'Architectural', 'Planks', 'Custom Millwork'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-12 sm:py-24 bg-[#141414] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Timber <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-400 text-xs sm:text-lg font-light">
            High-resolution photography showcasing our prime timber logs, natural edge slabs, kiln-dried planks, and architectural beams in Surat.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mt-6 sm:mt-10 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-black font-semibold shadow-md'
                  : 'glass-panel text-gray-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid: 2 columns on mobile, 3 columns on desktop */}
        <motion.div
          layout
          className="mt-6 sm:mt-12 columns-2 md:columns-2 lg:columns-3 gap-2.5 sm:gap-6 space-y-2.5 sm:space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 group cursor-pointer break-inside-avoid"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Caption on Mobile & Desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-6">
                  
                  <span className="text-[9px] sm:text-[11px] font-mono text-[#C89D5B] uppercase tracking-wider block truncate">
                    {item.category}
                  </span>
                  
                  <h3 className="text-xs sm:text-xl font-serif font-bold text-white mt-0.5 leading-tight line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="hidden sm:block text-xs text-gray-300 font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-1 sm:mt-4 inline-flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs font-semibold text-[#C89D5B]">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">View</span>
                  </div>

                </div>

                {/* Corner Expand Icon */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1 sm:p-2 rounded-full glass-panel-gold text-[#C89D5B] opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
