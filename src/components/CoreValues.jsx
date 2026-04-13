import React from 'react';
import BrushHighlight from './BrushHighlight';

const signals = [
  { text: 'Confusion', icon: '◈' },
  { text: 'Recurring Situations', icon: '◈' },
  { text: 'The feeling that something is no longer right', icon: '◈' }
];

const OrderingForce = () => {
  return (
    <section id="life-potential" className="py-32 bg-brand-cream px-6 relative z-10 border-t border-stone-200/50 overflow-hidden">
      
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)' }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <p className="text-brand-gold/80 text-sm uppercase tracking-brand-wide font-semibold mb-6">
            The Framework
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-wide mb-6 group leading-tight">
            The Ordering Force: <BrushHighlight className="italic text-brand-gold">Life Potential</BrushHighlight>
          </h2>
          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide px-4">
            The human being functions as an interconnected system. What we think, feel, and how we act are not separate—they interact continuously.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Signals of Imbalance */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-stone-800 mb-8 tracking-wide">
              Signals of <span className="text-brand-gold italic">Imbalance</span>
            </h3>
            <p className="text-stone-500 font-light text-sm tracking-wide mb-8 leading-relaxed">
              When this inner interplay loses its balance, it shows up as:
            </p>
            
            <div className="space-y-6">
              {signals.map((signal, idx) => (
                <div key={idx} className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:border-brand-gold/50 group-hover:bg-amber-50/50 transition-all duration-500">
                    <span className="text-brand-gold/40 text-sm group-hover:text-brand-gold transition-colors duration-500">{signal.icon}</span>
                  </div>
                  <span className="text-stone-700 font-light text-sm md:text-base tracking-wide group-hover:text-stone-900 transition-colors duration-300">
                    {signal.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Life Potential card */}
          <div className="bg-stone-100/80 rounded-2xl md:rounded-[2rem] p-8 md:p-12 ring-1 ring-stone-200/50 relative overflow-hidden">
            
            {/* Decorative background text */}
            <div className="absolute -bottom-4 -right-4 text-[8rem] md:text-[10rem] font-serif text-stone-200/40 leading-none select-none z-0">
              LP
            </div>

            <div className="relative z-10">
              <div className="w-12 h-[1px] bg-brand-gold/30 mb-8"></div>
              
              <h3 className="text-xl md:text-2xl font-serif text-stone-800 mb-6 tracking-wide">
                Life Potential
              </h3>
              
              <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide">
                This life potential works in the background to support order, development, and stability. It is the silent organizing principle within every human being—constantly seeking wholeness.
              </p>

              <div className="mt-8 w-16 h-[1px] bg-brand-gold/20"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OrderingForce;
