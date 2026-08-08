import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Send, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative glass-panel-gold rounded-3xl border border-[#C89D5B]/40 max-w-3xl w-full p-6 sm:p-8 z-10 shadow-2xl overflow-hidden bg-[#171717]"
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden h-56 md:h-full min-h-[220px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase bg-gold-gradient px-3 py-1 rounded-full text-black font-semibold">
                {product.badge}
              </span>
            </div>

            {/* Product Details */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs text-[#C89D5B] font-mono uppercase tracking-widest">
                  {product.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {product.title}
                </h3>
              </div>

              <p className="text-gray-300 text-sm font-light leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Box */}
              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-gray-400">Timber Density:</span>
                  <span className="font-mono text-[#C89D5B] font-semibold">{product.specs.density}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-gray-400">Moisture Target:</span>
                  <span className="font-mono text-gray-200">{product.specs.moisture}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Surface Finish:</span>
                  <span className="font-mono text-gray-200">{product.specs.finish}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-1.5 pt-1">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#C89D5B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center space-x-3">
                <a
                  href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(`Hello Shree Mahavir Timber Mart, I want to inquire about specs and pricing for ${product.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full bg-gold-gradient text-black font-semibold text-xs text-center flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="py-3 px-5 rounded-full glass-panel text-white font-semibold text-xs hover:bg-white/10 transition-colors border border-white/10 flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89D5B]" />
                  <span>Call</span>
                </a>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
