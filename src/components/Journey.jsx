import React from 'react';
import { motion } from 'framer-motion';

const FinalInvitation = () => {
  return (
    <section id="structure" className="py-32 bg-brand-cream px-6 relative z-10 border-t border-stone-200/50 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        <p className="text-brand-gold/60 text-xs md:text-sm uppercase tracking-brand-wide font-bold mb-12">
          Structure
        </p>

        <h2 className="text-2xl md:text-3xl font-serif text-stone-900 leading-relaxed mb-16">
          The process does not follow a fixed structure.<br/>
          <span className="italic text-stone-600">But it can be entered at different levels of depth.</span>
        </h2>

        <div className="max-w-xl mx-auto space-y-8 mb-24">
          {[
            { title: "Foundation", duration: "3 Sessions" },
            { title: "Stabilization", duration: "5 Sessions" },
            { title: "Deep Work", duration: "8 Sessions" }
          ].map((tier, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline border-b border-stone-200/50 pb-6 group"
            >
              <span className="text-xl md:text-2xl font-sans font-medium text-stone-800">{tier.title}</span>
              <span className="text-stone-500 font-sans tracking-widest uppercase text-sm mt-2 sm:mt-0">{tier.duration}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="#contact" 
            className="group relative inline-block px-12 py-5 bg-transparent text-stone-800 uppercase text-xs tracking-brand-wide font-semibold overflow-hidden rounded-full border border-stone-300 hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center justify-center gap-3">
              Request a Consultation
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalInvitation;
