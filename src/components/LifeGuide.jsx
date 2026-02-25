import React from 'react';

const LifeGuide = () => {
  return (
    <section id="roots-lifeguide" className="py-32 bg-stone-50 px-6 relative z-10 border-t border-stone-200/50">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Area */}
        <div className="flex flex-col text-left order-2 lg:order-1">
          <p className="text-amber-700/80 text-sm uppercase tracking-[0.3em] mb-6 font-semibold">
            The Foundation
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight mb-8 group">
            Roots in the <span className="italic text-amber-700 block mt-2 animated-underline w-max">LifeGuide-Institut</span>
          </h2>
          
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide">
            <p>
              Founded in 2000, LifeGuide-Institut has been the vessel for over two decades of transformative practice. Blending psychotherapy, employee training, and holistic energy therapy, the institute serves as a sanctuary for profound personal evolution.
            </p>
            <p>
              <em className="text-stone-800 font-serif tracking-wider">"I guide people to their own core."</em><br />
              There, brilliant life force and creativity are securely held. This deep energy work is the silent heartbeat behind every interaction.
            </p>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-amber-600">22+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-2 font-medium">Years of Practice</span>
            </div>
            <div className="w-[1px] h-12 bg-stone-300"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-amber-600">2000</span>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-2 font-medium">Year Founded</span>
            </div>
          </div>
        </div>

        {/* Visual Embellishment Area with Generative Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 mt-10 lg:mt-0 group/image">
          
          {/* Massive soft glowing background orb behind the image */}
          <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-amber-500/20 rounded-full blur-[80px] md:blur-[120px] transition-all duration-1000 group-hover/image:scale-110 group-hover/image:bg-amber-500/30"></div>
          
          {/* Subtle text overlay behind the image */}
          <div className="absolute text-[6rem] md:text-[10rem] lg:text-[12rem] font-serif text-stone-200/60 leading-none select-none z-0 tracking-widest transition-transform duration-1000 group-hover/image:scale-105">
            Roots
          </div>

          {/* Actual Image container with elegant curves */}
          <div className="relative z-10 w-4/5 h-4/5 md:w-[70%] md:h-[80%] rounded-t-[50%] rounded-b-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(120,53,15,0.4)] ring-1 ring-amber-600/20 group-hover/image:ring-amber-600/40 transition-all duration-700">
             <div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover/image:opacity-0"></div>
             <img src="/images/roots.png" alt="Ancient roots intertwined with glowing amber light" loading="lazy" className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-[2000ms] ease-out will-change-transform opacity-95 group-hover/image:opacity-100" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default LifeGuide;
