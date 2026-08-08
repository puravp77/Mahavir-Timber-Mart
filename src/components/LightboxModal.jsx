import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Eye } from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full glass-panel-gold rounded-3xl overflow-hidden border border-[#C89D5B]/40 z-10 shadow-2xl bg-[#0F0F0F]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-black/60 text-white hover:bg-gold-gradient hover:text-black transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            
            {/* Image display */}
            <div className="lg:col-span-8 bg-black flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Side information panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#C89D5B] uppercase tracking-widest">
                  {item.category} • Shree Mahavir
                </span>

                <h3 className="text-2xl font-serif font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-white/10 text-xs text-gray-400 space-y-2">
                  <div className="flex justify-between">
                    <span>Source Location:</span>
                    <span className="text-white font-mono">Surat Yard</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade Standard:</span>
                    <span className="text-[#C89D5B] font-mono font-semibold">Architectural Premium</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <a
                  href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(`Hello Shree Mahavir Timber Mart, I am inquiring about the ${item.title} featured in your gallery.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-semibold text-xs flex items-center justify-center space-x-2 hover:scale-102 transition-transform shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Inquire About This Piece</span>
                </a>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
