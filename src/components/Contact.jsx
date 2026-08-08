import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Timber Logs',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setFormSubmitted(true);
    setTimeout(() => {
      const waText = `Hello Shree Mahavir Timber Mart,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested Product: ${formData.product}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(waText)}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#141414] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-xs tracking-widest uppercase mb-3">
            <MapPin className="w-4 h-4" />
            <span>Surat Timber Yard & Headquarters</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact <span className="text-gold-gradient">Shree Mahavir Timber Mart</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-lg font-light">
            Visit our Surat warehouse or drop an inquiry for custom wood cutting, pricing quotes, and timber log specifications.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Column - Contact Details & Inquiry Form */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Contact Info Cards */}
            <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-white/10 space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {COMPANY_INFO.name}
              </h3>
              
              {/* Address */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gold-gradient text-black shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#C89D5B] uppercase tracking-wider">Yard Address</span>
                  <p className="text-gray-200 text-xs sm:text-sm mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gold-gradient text-black shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#C89D5B] uppercase tracking-wider">Phone Numbers</span>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                    {COMPANY_INFO.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel-gold text-white text-xs font-semibold hover:border-[#C89D5B] transition-all"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C89D5B]" />
                        <span>+91 {phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gold-gradient text-black shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#C89D5B] uppercase tracking-wider">Yard Hours</span>
                  <p className="text-gray-200 text-xs sm:text-sm mt-1">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-5">
                Send Direct Message
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl glass-panel-gold text-center border border-[#C89D5B]/40">
                  <CheckCircle2 className="w-10 h-10 text-[#C89D5B] mx-auto mb-2" />
                  <h4 className="text-base font-serif font-bold text-white">Inquiry Ready!</h4>
                  <p className="text-xs text-gray-300 mt-1">Opening WhatsApp to send your inquiry...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl glass-panel text-white text-sm focus:outline-none focus:border-[#C89D5B] border border-white/10"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9825224702"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl glass-panel text-white text-sm focus:outline-none focus:border-[#C89D5B] border border-white/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Select Product Interest</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#1A1A1A] text-white text-sm focus:outline-none focus:border-[#C89D5B] border border-white/10"
                    >
                      <option value="Timber Logs">Timber Logs</option>
                      <option value="Valsadi Teak Wood">Valsadi Teak Wood</option>
                      <option value="Furniture Wood Planks">Furniture Wood Planks</option>
                      <option value="Custom Cut Timber">Custom Cut Timber</option>
                      <option value="Live Edge Slabs">Live Edge Slabs</option>
                      <option value="Architectural Beams">Architectural Beams</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Project Details / Sizes</label>
                    <textarea
                      rows={3}
                      placeholder="Specify sizes or project location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl glass-panel text-white text-sm focus:outline-none focus:border-[#C89D5B] border border-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-full bg-gold-gradient text-black font-semibold text-sm hover:scale-102 transition-transform shadow-lg shadow-[#9A6B34]/30 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Timber Yard</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column - Interactive Google Map */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 h-full min-h-[320px] sm:min-h-[450px] relative group shadow-2xl">
              <iframe
                title="Shree Mahavir Timber Mart Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.613941421063!2d72.8123167!3d21.1677334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e3860000001%3A0x6b872b0e69123456!2sMahatma%20Industrial%20Estate%2C%20Khatodra%20Wadi%2C%20Surat%2C%20Gujarat%20395002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[320px] sm:min-h-[450px] border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 hover:filter-none transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 glass-panel-gold px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-[#C89D5B]/30 max-w-[260px] sm:max-w-xs shadow-xl">
                <span className="block text-[10px] font-mono text-[#C89D5B] uppercase">Surat Landmark</span>
                <span className="text-xs font-semibold text-white">Behind Reliance Mall, Khatodra Wadi</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
