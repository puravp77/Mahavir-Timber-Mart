import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../data/timberData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-2 sm:py-3 border-b border-white/10 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Official Image, Full Title & SURAT Subtitle */}
          <a href="#hero" className="flex items-center space-x-2.5 sm:space-x-3.5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#C89D5B]/60 shadow-lg shadow-[#9A6B34]/30 group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center shrink-0">
              <img
                src={COMPANY_INFO.logo}
                alt="SHREE MAHAVIR TIMBER MART Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm sm:text-lg md:text-xl font-extrabold tracking-tight text-white group-hover:text-[#C89D5B] transition-colors leading-tight uppercase">
                SHREE MAHAVIR TIMBER MART
              </span>
              <span className="text-[9px] sm:text-[11px] tracking-widest text-[#C89D5B] uppercase font-mono font-semibold">
                SURAT, GUJARAT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#C89D5B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C89D5B] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gold-gradient text-black font-semibold text-sm hover:shadow-lg hover:shadow-[#9A6B34]/30 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="p-2 sm:p-2.5 rounded-full bg-gold-gradient text-black"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-panel border-t border-white/10 mt-2 px-5 py-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm sm:text-base font-medium text-gray-200 hover:text-[#C89D5B] py-2 border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C89D5B]" />
                </a>
              ))}
              
              <div className="pt-3 flex flex-col space-y-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="flex items-center justify-center space-x-2 py-3 rounded-full bg-gold-gradient text-black font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent("Hello SHREE MAHAVIR TIMBER MART, I would like to inquire about your timber products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
