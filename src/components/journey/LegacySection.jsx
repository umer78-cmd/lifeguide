import React from 'react';
import { motion } from 'framer-motion';
import BrushHighlight from '../BrushHighlight';

const LegacySection = () => {
  const milestones = [
    {
      year: '2003',
      title: 'Foundational Work (LifeGuide-KaTao)',
      desc: 'The stable foundation. Addressing systemic challenges and recurring patterns directly. This root architecture initiated deep structural reorganization, serving as the basis from which all deeper access eventually emerged.'
    },
    {
      year: '2015',
      title: 'Systemic Expansion',
      desc: 'Integrating human behavioral patterns with systemic order. Identifying the silent organizing principles that facilitate deeper shifts beyond the foundational level.'
    },
    {
      year: '2026',
      title: 'Evolution of commIN',
      desc: 'The birth of a dedicated group space for those called to their highest life potential. A portal for modern access to timeless inner foundations.'
    }
  ];

  return (
    <section className="relative py-32 md:py-64 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <img 
          src="/images/roots.png" 
          alt="" 
          loading="lazy"
          decoding="async"
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-[0.1] mix-blend-multiply"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center mb-48">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-tight tracking-normal"
             >
                Two Decades of <br />
                <BrushHighlight className="italic text-brand-gold">Guidance.</BrushHighlight>
            </motion.h2>
        </div>

        {/* Milestone Sequence - Evolution Boxes */}
        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {milestones.map((ms, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white border border-stone-200 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-md"
            >
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-stone-200 pb-8 md:pb-0 md:pr-10 shrink-0">
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-gold mb-4 block">Evolution</span>
                <span className="text-5xl md:text-6xl font-serif text-brand-stone leading-none">{ms.year}</span>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif text-brand-stone mb-4 font-semibold tracking-normal">
                  {ms.title}
                </h3>
                <p className="text-stone-700 text-xl md:text-xl leading-snug">
                  {ms.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Methodology Block - Architecting the Future */}
        <div className="mt-64 md:mt-96">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 md:p-24 bg-white/95 border border-stone-100 rounded-[3rem] shadow-[0_48px_140px_-40px_rgba(28,25,23,0.12)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-gold mb-12 block">The Scientist Edge</span>
              <h3 className="text-3xl md:text-5xl font-serif text-brand-stone mb-10 leading-tight">
                Human = <br />
                <span className="italic">System.</span>
              </h3>
              
              <p className="text-stone-700 font-medium text-xl md:text-xl leading-snug tracking-normal mb-14 max-w-2xl mx-auto">
                "There is no separation. The human is the system. My methodology treats the person, the family, and the organization as a singular, interconnected network that seeking its own precise point of balance."
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                 {['Information', 'Biology', 'Intention', 'Systemic Order'].map((tag, i) => (
                   <span key={i} className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-[0.15em] text-brand-stone/60 font-bold border border-white/80 shadow-sm">
                      {tag}
                   </span>
                 ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LegacySection;
