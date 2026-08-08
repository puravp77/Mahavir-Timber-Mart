import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Send, CheckCircle2, Sliders, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';

export default function WoodSpecifier() {
  const [woodType, setWoodType] = useState('Valsadi Teak');
  const [lengthFeet, setLengthFeet] = useState(8);
  const [widthInches, setWidthInches] = useState(12);
  const [thicknessInches, setThicknessInches] = useState(3);
  const [quantity, setQuantity] = useState(10);
  const [finish, setFinish] = useState('Kiln Dried S4S');

  // CFT Calculation: (Length (ft) * Width (in) * Thickness (in)) / 144 * Quantity
  const singleCft = (lengthFeet * widthInches * thicknessInches) / 144;
  const totalCft = (singleCft * quantity).toFixed(2);

  const handleWhatsAppSend = () => {
    const msg = `Hello Shree Mahavir Timber Mart! I would like a quote for:\n\n` +
      `- Wood Species: ${woodType}\n` +
      `- Dimensions: ${lengthFeet} ft (L) x ${widthInches} in (W) x ${thicknessInches} in (T)\n` +
      `- Quantity: ${quantity} pieces\n` +
      `- Estimated Volume: ${totalCft} CFT (Cubic Feet)\n` +
      `- Desired Finish: ${finish}\n\n` +
      `Please provide estimated pricing and delivery timelines to Surat/Gujarat.`;
    window.open(`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-xs tracking-widest uppercase mb-3">
            <Calculator className="w-4 h-4" />
            <span>Interactive Architectural Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Timber Volume <span className="text-gold-gradient">Estimator & Inquiry</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg font-light">
            Custom-calculate cubic feet (CFT) requirements for your architectural drawings or furniture project and generate an instant quotation request directly to our timber yard.
          </p>
        </div>

        {/* Interactive Estimator Panel */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#C89D5B]/30 shadow-2xl shadow-black/80 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Wood Species Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#C89D5B] tracking-wider mb-2">
                1. Select Timber Species / Grade
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Valsadi Teak', 'Hardwood Logs', 'Furniture Planks', 'Heavy Beams', 'Live Edge Slab'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setWoodType(type)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all text-center ${
                      woodType === type
                        ? 'bg-gold-gradient text-black font-semibold shadow-md'
                        : 'glass-panel text-gray-300 hover:text-white border border-white/5'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Length Feet */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="font-medium">Length (Feet):</span>
                  <span className="font-mono text-[#C89D5B] font-bold text-base">{lengthFeet} ft</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="0.5"
                  value={lengthFeet}
                  onChange={(e) => setLengthFeet(parseFloat(e.target.value))}
                  className="w-full accent-[#C89D5B] cursor-pointer"
                />
              </div>

              {/* Width Inches */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="font-medium">Width (Inches):</span>
                  <span className="font-mono text-[#C89D5B] font-bold text-base">{widthInches} in</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="48"
                  step="0.5"
                  value={widthInches}
                  onChange={(e) => setWidthInches(parseFloat(e.target.value))}
                  className="w-full accent-[#C89D5B] cursor-pointer"
                />
              </div>

              {/* Thickness Inches */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="font-medium">Thickness (Inches):</span>
                  <span className="font-mono text-[#C89D5B] font-bold text-base">{thicknessInches} in</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="18"
                  step="0.25"
                  value={thicknessInches}
                  onChange={(e) => setThicknessInches(parseFloat(e.target.value))}
                  className="w-full accent-[#C89D5B] cursor-pointer"
                />
              </div>

              {/* Quantity */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="font-medium">Quantity (Pieces):</span>
                  <span className="font-mono text-[#C89D5B] font-bold text-base">{quantity} pcs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="200"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full accent-[#C89D5B] cursor-pointer"
                />
              </div>

            </div>

            {/* Finish selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#C89D5B] tracking-wider mb-2">
                2. Surface Finish / Processing
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Kiln Dried S4S', 'Natural Rough Sawn', 'Debarked Log', 'Polished Slab'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFinish(f)}
                    className={`py-2 px-3 rounded-lg text-xs transition-all ${
                      finish === f
                        ? 'bg-white/20 text-white font-semibold border border-white/30'
                        : 'glass-panel text-gray-400 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 text-center flex flex-col justify-between h-full bg-black/40">
            <div>
              <span className="text-xs text-[#C89D5B] uppercase font-mono tracking-widest">
                Calculated Timber Requirement
              </span>

              <div className="mt-6 py-6 px-4 glass-panel-gold rounded-2xl border border-[#C89D5B]/40">
                <span className="block text-xs text-gray-300 font-mono">ESTIMATED VOLUME</span>
                <div className="font-serif text-5xl sm:text-6xl font-bold text-gold-gradient mt-2">
                  {totalCft}
                </div>
                <span className="block text-xs text-[#C89D5B] font-mono tracking-wider mt-1">
                  CUBIC FEET (CFT)
                </span>
              </div>

              <div className="mt-6 space-y-2 text-left text-xs text-gray-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Single Piece Vol:</span>
                  <span className="font-mono text-white">{singleCft.toFixed(3)} CFT</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Total Specs:</span>
                  <span className="font-mono text-white">{lengthFeet}' × {widthInches}" × {thicknessInches}"</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Selected Species:</span>
                  <span className="font-semibold text-[#C89D5B]">{woodType}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send WhatsApp Quote Request</span>
              </button>
              <span className="block text-[11px] text-gray-400 mt-2 font-light">
                Instant response from Surat Timber Yard team
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
