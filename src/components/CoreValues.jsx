import React from 'react';
import BrushHighlight from './BrushHighlight';

const signals = [
  { text: 'Confusion', icon: '◈' },
  { text: 'Recurring Situations', icon: '◈' },
  { text: 'The feeling that something is no longer right', icon: '◈' }
];

const OrderingForce = () => {
  return (
    <section id="life-potential" className="py-40 bg-brand-cream px-6 relative z-10 border-t border-stone-200/50 overflow-hidden">
      
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)' }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-brand-gold/80 text-base uppercase tracking-brand-wide font-semibold mb-8">
            The Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-normal mb-8 group leading-tight">
            The <BrushHighlight className="italic text-brand-gold">Guidance Path</BrushHighlight>
          </h2>
          <p className="text-stone-700 font-medium leading-snug text-xl md:text-xl tracking-normal px-4">
            This is not a problem-based intervention. It is a process of restoration—a journey that follows your unique inner rhythm rather than a predetermined schedule.
          </p>
        </div>

        {/* Focused Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-100/60 backdrop-blur-sm rounded-2xl md:rounded-[3rem] p-10 md:p-20 ring-1 ring-stone-200/50 relative overflow-hidden">
            
            {/* Decorative background text */}
            <div className="absolute -bottom-6 -right-6 text-[10rem] md:text-[14rem] font-serif text-stone-200/30 leading-none select-none z-0">
              GP
            </div>

            <div className="relative z-10">
              <div className="w-16 h-[1px] bg-brand-gold/30 mb-10"></div>
              
              <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-8 tracking-normal">
                Inner Reorganization
              </h3>
              
              <div className="space-y-8 text-stone-700 font-medium leading-snug text-xl md:text-xl tracking-normal max-w-2xl">
                <p>
                  The Guidance Path recognizes that life potential works silently in the background to support order and stability. It is the organizing principle within you that constantly seeks wholeness.
                </p>
                <p>
                  By engaging with this potential, the work allows for a natural reorganization. What was once bound energy becomes movement; what was once confusion becomes clarity.
                </p>
              </div>

              <div className="mt-12 w-24 h-[1px] bg-brand-gold/20"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OrderingForce;
