import React, { useEffect, useRef, useState } from 'react';
import BrushHighlight from './BrushHighlight';

const tiers = [
  {
    title: "Foundation",
    sessions: "3 Sessions",
    subtitle: "Entry / First Movement",
    desc: "A focused entry to sense the systemic architecture and initiate the first reorganization. Ideal for establishing a base of inner stability."
  },
  {
    title: "Stabilization",
    sessions: "5 Sessions",
    subtitle: "Clarification / Integration",
    desc: "Moving deeper into the bound energy. This tier allows for sustained integration and the clarification of recurring life patterns."
  },
  {
    title: "Deep Work",
    sessions: "8 Sessions",
    subtitle: "Depth / Reorganization",
    desc: "The full arc of the Guidance Path. A comprehensive reorganization from within, addressing the deepest systemic layers for lasting transformation."
  }
];

const GuidanceWork = () => {
  const sectionRef = useRef(null);

  return (
    <section id="guidance-work" ref={sectionRef} className="py-40 bg-stone-100 px-6 relative z-10 overflow-hidden">
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)',
          transform: 'translateZ(0)' 
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <p className="text-brand-gold/80 text-sm uppercase tracking-brand-wide mb-8 font-semibold">
            The Structure
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-wide group leading-tight mb-10">
            Structure of the <BrushHighlight className="italic text-brand-gold">Work</BrushHighlight>
          </h2>
          <p className="text-stone-500 font-serif italic text-lg md:text-2xl tracking-wide max-w-3xl mx-auto">
            "The depth of the process is not defined by time—but by how far you are ready to go."
          </p>
        </div>

        {/* Depth-Based Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-[2rem] bg-white/40 backdrop-blur-sm ring-1 ring-stone-200/50 hover:ring-brand-gold/20 transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(180,83,9,0.1)]"
            >
              <p className="text-brand-gold/60 text-xs uppercase tracking-[0.3em] font-bold mb-6">
                {tier.sessions}
              </p>
              
              <h3 className="text-2xl md:text-3xl font-serif text-amber-950 mb-3 tracking-wide group-hover:text-brand-gold transition-colors duration-500">
                {tier.title}
              </h3>
              
              <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-medium mb-8">
                {tier.subtitle}
              </p>

              <div className="w-12 h-[1px] bg-stone-200 mb-10 group-hover:w-20 group-hover:bg-brand-gold/30 transition-all duration-700"></div>

              <p className="text-stone-600 font-light leading-relaxed tracking-wide text-sm md:text-base">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GuidanceWork;
