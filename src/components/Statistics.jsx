import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATISTICS } from '../data/timberData';

function CounterItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = item.count;
      const duration = 2000;
      const incrementTime = 30;
      const totalSteps = duration / incrementTime;
      const stepValue = end / totalSteps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, item.count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-panel-gold p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#C89D5B]/30 text-center relative overflow-hidden group hover:border-[#C89D5B] transition-all duration-300 shadow-xl"
    >
      <div className="font-serif text-3xl sm:text-6xl font-extrabold text-gold-gradient tracking-tight">
        {count.toLocaleString()}{item.suffix}
      </div>

      <h3 className="mt-1.5 sm:mt-3 text-xs sm:text-lg font-serif font-semibold text-white leading-tight">
        {item.label}
      </h3>

      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-gray-300 font-light leading-snug line-clamp-2">
        {item.description}
      </p>

      <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/5 rounded-full blur-xl pointer-events-none -mr-4 -mt-4 sm:-mr-8 sm:-mt-8" />
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="py-12 sm:py-20 bg-[#141414] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8">
          {STATISTICS.map((item, idx) => (
            <CounterItem key={item.label} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
