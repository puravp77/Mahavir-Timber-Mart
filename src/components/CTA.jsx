import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F0F0F] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 sm:h-96 bg-[#9A6B34]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-14 text-center border border-[#C89D5B]/40 shadow-2xl relative overflow-hidden">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-white/10 text-[#C89D5B] text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Surat's Most Trusted Timber Supplier</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Build Something <br className="hidden sm:inline" />
              <span className="text-gold-gradient italic font-serif">That Lasts For Generations</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-xl font-light max-w-2xl mx-auto">
              Get in touch with our timber experts in Surat for wood log requirements, architectural custom cuts, and bulk pricing.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 w-full">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-gold-gradient text-black font-semibold text-sm sm:text-base hover:scale-102 transition-all shadow-xl shadow-[#9A6B34]/40"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent("Hello SHREE MAHAVIR TIMBER MART, I would like to inquire about your timber products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base hover:scale-102 transition-all shadow-xl"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-gray-400 font-mono">
              <span>✓ Direct Sawmill Supply</span>
              <span>✓ Instant Quote</span>
              <span>✓ Pan-Gujarat Delivery</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
