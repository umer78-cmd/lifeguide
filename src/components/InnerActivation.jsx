import React from 'react';
import { motion } from 'framer-motion';

const InnerActivation = () => {
  return (
    <section id="inner-activation" className="py-32 bg-brand-cream px-6 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center py-20">
          {[
            "An impulse is set.",
            "You respond.",
            "Inside, something begins to open.",
            "Movement.",
            "Release.",
            "Reorganization.",
            "In your own rhythm."
          ].map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="min-h-[70vh] w-full flex items-center justify-center"
            >
              <p className="text-stone-800 text-2xl md:text-3xl font-serif font-normal leading-relaxed tracking-wide">
                {phrase}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle background element */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #b45309 0%, transparent 70%)' }}
      ></div>
    </section>
  );
};

export default InnerActivation;
