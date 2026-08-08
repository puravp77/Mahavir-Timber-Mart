import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle2, Award, Building2, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0F0F0F] relative overflow-hidden">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#9A6B34]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#C89D5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - User's Real Photograph (2.JPG) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src="/assets/2.JPG"
                alt="SHREE MAHAVIR TIMBER MART Stock Yard"
                className="w-full h-[320px] sm:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-white/15">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img src={COMPANY_INFO.logo} alt="Logo" className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-contain bg-white shrink-0" />
                  <div>
                    <h4 className="text-white font-serif font-bold text-sm sm:text-lg">Authentic Timber Sourcing</h4>
                    <p className="text-[10px] sm:text-xs text-gray-300">Live Surat inventory of high-grade logs & hardwood</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="hidden sm:flex absolute -top-6 -right-6 glass-panel-gold px-6 py-4 rounded-2xl shadow-xl items-center space-x-3 border border-[#C89D5B]/40">
              <span className="font-serif text-3xl font-bold text-gold-gradient">25+</span>
              <span className="text-xs text-gray-200 uppercase font-semibold tracking-wider leading-tight">
                Years of Trust<br/>In Surat
              </span>
            </div>
          </motion.div>

          {/* Right Column - Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Our Heritage & Promise</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              About <span className="text-gold-gradient">SHREE MAHAVIR TIMBER MART</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed font-light">
              Located in Surat, Gujarat, <strong className="text-white font-semibold">SHREE MAHAVIR TIMBER MART</strong> has earned the trust of builders, architects, furniture manufacturers, and interior designers by supplying premium quality timber and natural hardwood.
            </p>

            <p className="mt-3 sm:mt-4 text-gray-400 text-xs sm:text-base leading-relaxed font-light">
              We specialize in supplying timber logs, signature Valsadi wood, ready-to-use furniture planks, and custom architectural cuts tailored to project dimensions. Every log in our Surat yard is inspected for strength, grain density, and structural integrity.
            </p>

            {/* Feature Highlights */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {[
                { title: "Direct Sawmill & Forest Procurement", desc: "Genuine hardwood logs sourced with zero middleman markups." },
                { title: "Kiln-Dried & Treated Wood Planks", desc: "Processed for termite resistance, zero warping, and longevity." },
                { title: "Custom Sizing & Blueprint Sectioning", desc: "Precision saw cutting according to architectural CAD drawings." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 sm:space-x-4 glass-panel p-3 sm:p-4 rounded-xl border border-white/5 hover:border-[#C89D5B]/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C89D5B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold text-xs sm:text-base font-serif">{item.title}</h3>
                    <p className="text-gray-400 text-[11px] sm:text-sm font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stacked Full-Width Buttons on Mobile for Perfect Touch Comfort */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gold-gradient text-black font-semibold text-sm hover:scale-102 transition-all shadow-lg shadow-[#9A6B34]/30 text-center"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Visit Our Surat Yard</span>
              </a>
              
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 sm:px-8 py-3.5 rounded-full glass-panel text-white font-semibold text-sm hover:bg-white/10 transition-all border border-white/10 text-center"
              >
                <span>View Product Specs</span>
                <ArrowRight className="w-4 h-4 text-[#C89D5B] shrink-0" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
