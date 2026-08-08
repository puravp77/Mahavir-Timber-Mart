import React from 'react';
import { ArrowUp, Phone, MapPin, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { COMPANY_INFO, NAV_ITEMS } from '../data/timberData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C89D5B]/40 bg-white flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logo}
                  alt="SHREE MAHAVIR TIMBER MART Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg font-bold text-white uppercase leading-tight">
                  SHREE MAHAVIR TIMBER MART
                </span>
                <span className="text-[10px] tracking-widest text-[#C89D5B] uppercase font-mono font-semibold">
                  SURAT, GUJARAT
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              "{COMPANY_INFO.tagline}" — Surat's premier timber logs, natural hardwood, and architectural timber supplier for construction and furniture manufacturing.
            </p>

            {/* Instagram Link */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-pink-400 hover:text-pink-300 font-mono transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
                <span>Follow @{COMPANY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm uppercase tracking-wider mb-4 text-[#C89D5B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#C89D5B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm uppercase tracking-wider mb-4 text-[#C89D5B]">
              Timber Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#products" className="hover:text-[#C89D5B] transition-colors">Premium Timber Logs</a></li>
              <li><a href="#products" className="hover:text-[#C89D5B] transition-colors">Valsadi Teak Wood</a></li>
              <li><a href="#products" className="hover:text-[#C89D5B] transition-colors">Furniture Wood Planks</a></li>
              <li><a href="#products" className="hover:text-[#C89D5B] transition-colors">Custom Cut Timber</a></li>
              <li><a href="#products" className="hover:text-[#C89D5B] transition-colors">Live Edge Hardwood Slabs</a></li>
              <li><a href="#products" className="hover:text-[#C89D5B] transition-colors">Structural Beams</a></li>
            </ul>
          </div>

          {/* Surat Yard Quick Contact */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm uppercase tracking-wider mb-4 text-[#C89D5B]">
              Surat Office
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C89D5B] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C89D5B] shrink-0" />
                <span>+91 {COMPANY_INFO.phones.join(' / +91 ')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-light text-center sm:text-left">
            © {new Date().getFullYear()} SHREE MAHAVIR TIMBER MART. All rights reserved. Designed for luxury architecture & natural hardwood.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel-gold text-[#C89D5B] hover:text-white transition-all shadow-lg"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
