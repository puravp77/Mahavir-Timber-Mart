import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Info, Send } from 'lucide-react';
import { PRODUCTS } from '../data/timberData';

export default function Products({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hardwood Logs', 'Signature Teak', 'Precision Slabs', 'Bespoke Millwork', 'Architectural Statement', 'Heavy Timber'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-12 sm:py-24 bg-[#141414] relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#9A6B34]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Master Craftsmen Sourced</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Timber <span className="text-gold-gradient">Collection</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-400 text-xs sm:text-lg font-light">
            Explore our curated inventory of luxury hardwood logs, seasoned planks, architectural beams, and bespoke timber cut for high-end construction and furniture.
          </p>
        </div>

        {/* Scrollable Filter Tabs on Mobile */}
        <div className="mt-6 sm:mt-10 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-black font-semibold shadow-lg shadow-[#9A6B34]/30 scale-105'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-[#C89D5B]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 2 columns on mobile, 3 columns on desktop */}
        <motion.div
          layout
          className="mt-6 sm:mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#C89D5B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9A6B34]/20 flex flex-col justify-between group"
              >
                
                {/* Top Section: Image + Category */}
                <div>
                  {/* Image Container with Zoom */}
                  <div className="relative h-28 sm:h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/30" />
                    
                    {/* Category Pill */}
                    <div className="absolute top-1.5 left-1.5 sm:top-4 sm:left-4 glass-panel-gold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold text-[#C89D5B] border border-[#C89D5B]/30 truncate max-w-[85%]">
                      {product.badge}
                    </div>

                    {/* Quick Detail Trigger */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute top-1.5 right-1.5 sm:top-4 sm:right-4 p-1.5 sm:p-2.5 rounded-full bg-black/60 text-white hover:bg-gold-gradient hover:text-black transition-all"
                      aria-label="View Details"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-2.5 sm:p-6">
                    <span className="text-[9px] sm:text-xs text-[#C89D5B] font-mono tracking-wider uppercase block truncate">
                      {product.category}
                    </span>
                    <h3 className="text-xs sm:text-xl font-serif font-bold text-white mt-0.5 sm:mt-1 group-hover:text-[#C89D5B] transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="hidden sm:block text-gray-400 text-xs sm:text-sm mt-2 font-light line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Quick Specs Snippet */}
                    <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-300">
                        <span className="text-gray-400 font-light">Density:</span>
                        <span className="font-mono text-[#C89D5B] font-semibold text-[9px] sm:text-xs truncate max-w-[60%] text-right">{product.specs.density}</span>
                      </div>
                      <div className="hidden sm:flex items-center justify-between text-xs text-gray-300">
                        <span className="text-gray-400 font-light">Moisture:</span>
                        <span className="font-mono text-gray-200">{product.specs.moisture}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-2.5 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 pt-2 sm:pt-4 border-t border-white/5">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-1.5 sm:py-2.5 px-2 sm:px-3.5 rounded-full glass-panel text-white text-[10px] sm:text-xs font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-1 border border-white/10 truncate"
                    >
                      <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C89D5B] shrink-0" />
                      <span>Specs</span>
                    </button>
                    <a
                      href={`https://wa.me/919825224702?text=${encodeURIComponent(`Hello SHREE MAHAVIR TIMBER MART, I am interested in inquiring about ${product.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2.5 sm:py-2.5 sm:px-4 rounded-full bg-gold-gradient text-black text-[10px] sm:text-xs font-semibold hover:scale-105 transition-transform flex items-center justify-center shrink-0"
                    >
                      Inquire
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
