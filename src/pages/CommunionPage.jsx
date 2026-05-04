import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DustMotes from '../components/DustMotes';
import BrushHighlight from '../components/BrushHighlight';

const CommunionPage = () => {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const wordReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div ref={containerRef} className="bg-brand-cream overflow-x-hidden">
      {/* 1. Hero: A Space for Choice */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/communion_hero.png" 
            alt="Minimalist architectural horizon" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/20 via-transparent to-brand-cream"></div>
          <DustMotes />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-brand-gold/70 text-xs md:text-base uppercase tracking-brand-wide mb-8 font-semibold"
          >
            The Offerings
          </motion.p>
          
          <h1 className="text-6xl md:text-9xl font-serif text-brand-stone mb-10 leading-tight">
            Choose Your <BrushHighlight className="italic text-brand-gold">Depth.</BrushHighlight>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="max-w-2xl mx-auto text-stone-700 text-xl md:text-xl font-medium leading-snug tracking-normal"
          >
            "Whether you seek self-directed stability or a deep, personal recalibration, every path is built on the same systemic foundation."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-16"
          >
            <div className="w-px h-24 bg-gradient-to-b from-brand-gold/40 to-transparent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Paths A & B: The Spaces */}
      <section id="paths" className="py-24 md:py-40 px-6 bg-brand-cream relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Path A: LifeGuide-KaTao */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-200 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
            >
              <p className="text-brand-gold/60 text-xs uppercase tracking-brand-wide font-bold mb-6">Path A — The Foundation</p>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-stone mb-6">LifeGuide-KaTao</h2>
              <p className="text-stone-700 font-medium text-base mb-10 leading-snug italic">
                "Starts with a specific symptom, challenge, or problem, moving toward the core to create a lasting ripple-effect."
              </p>
              
              <div className="space-y-8 mb-12 flex-grow">
                <div className="flex gap-4 items-start">
                  <span className="text-brand-gold/30 font-serif text-xl mt-1">01</span>
                  <div>
                    <h3 className="text-xl font-serif text-brand-stone mb-1">The Symptom</h3>
                    <p className="text-stone-700 font-medium text-[10px] uppercase tracking-normalst">Identifying the recurring pattern.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-brand-gold/30 font-serif text-xl mt-1">02</span>
                  <div>
                    <h3 className="text-xl font-serif text-brand-stone mb-1">The Core</h3>
                    <p className="text-stone-700 font-medium text-[10px] uppercase tracking-normalst">Reordering the foundation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-brand-gold/30 font-serif text-xl mt-1">03</span>
                  <div>
                    <h3 className="text-xl font-serif text-brand-stone mb-1">The Ripple-Effect</h3>
                    <p className="text-stone-700 font-medium text-[10px] uppercase tracking-normalst">Natural systemic rebalancing.</p>
                  </div>
                </div>
              </div>
              <p className="text-stone-700 text-[11px] italic mb-8 font-medium leading-snug">
                "Deeply effective within the field it addresses for over two decades."
              </p>

              <button className="w-full py-4 border border-brand-stone text-brand-stone uppercase text-[10px] tracking-brand-wide font-bold rounded-full hover:bg-brand-stone hover:text-white transition-colors duration-500">
                Explore the Foundation
              </button>
            </motion.div>

            {/* Path B: The commIN Space */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-stone-200/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
            >
              <p className="text-brand-gold/60 text-xs uppercase tracking-brand-wide font-bold mb-6">Path B — The Entry</p>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-stone mb-6">comm<span className="text-brand-gold">IN</span> Group Space</h2>
              <p className="text-stone-700 font-medium text-base mb-10 leading-snug italic">
                "For those ready to begin understanding themselves differently and build inner stability within a shared calling."
              </p>
              
              <div className="space-y-8 mb-12 flex-grow">
                {[
                  { title: "The Silent Pause", subtitle: "Learning to listen." },
                  { title: "The Unravelling", subtitle: "Identifying bound energy." },
                  { title: "The Integration", subtitle: "New quality of life." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-brand-gold/30 font-serif text-xl mt-1">0{i+1}</span>
                    <div>
                      <h3 className="text-xl font-serif text-brand-stone mb-1">{item.title}</h3>
                      <p className="text-stone-700 font-medium text-[10px] uppercase tracking-normalst">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 mt-auto bg-stone-900 text-white uppercase text-[10px] tracking-brand-wide font-bold rounded-full hover:bg-brand-gold transition-colors duration-500 shadow-xl">
                Join the Space
              </button>
            </motion.div>

            {/* Path C: Holistic LifeGuide */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-stone-950 p-8 md:p-12 rounded-[2.5rem] border border-stone-800 hover:shadow-[0_40px_100px_-20px_rgba(180,83,9,0.3)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full text-white"
            >
              <p className="text-brand-gold text-xs uppercase tracking-brand-wide font-bold mb-6">Path C — The Depth</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Individual Guidance</h2>
              <p className="text-stone-300 font-medium text-base mb-10 leading-snug italic">
                "A direct, intensive path that unfolds through personal guidance. Exactly where something has fallen out of balance, we begin the reordering."
              </p>

              <div className="space-y-8 mb-12 flex-grow">
                {[
                  { title: "Foundation", subtitle: "Entry and first movement." },
                  { title: "Stabilization", subtitle: "Clarification and integration." },
                  { title: "Deep Work", subtitle: "Depth and reorganization." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-brand-gold/40 font-serif text-xl mt-1">0{i+1}</span>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-1">{item.title}</h3>
                      <p className="text-stone-700 font-medium text-[10px] uppercase tracking-normalst">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-stone-700 text-[11px] italic mb-8 font-medium leading-snug">
                "The depth of the process is not defined by time—but by readiness."
              </p>

              <button className="w-full py-4 border border-brand-gold text-brand-gold uppercase text-[10px] tracking-brand-wide font-bold rounded-full hover:bg-brand-gold hover:text-white transition-all duration-500">
                Apply for Guidance
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Why Guidance? (Science of Energy) */}
      <section className="py-32 md:py-52 bg-white relative overflow-hidden">
        {/* Visuals reduced to pure abstraction */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-brand-gold text-base uppercase tracking-brand-wide font-bold mb-8">The Methodology</p>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-tight">
              Why <span className="italic">Guidance?</span>
            </h2>
            <div className="space-y-8 max-w-xl">
              <p className="text-stone-700 text-xl font-medium leading-snug">
                Many approaches solve problems. We operate at the <span className="text-brand-gold font-medium">level where problems originate.</span>
              </p>
              <p className="text-stone-700 text-xl font-medium leading-snug">
                This is not a method, but a direct access to an inner realm. By working at the systemic foundation, we release bound energy so your life power can reorganize itself naturally.
              </p>
            </div>
            
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-3xl font-serif text-brand-stone">0%</p>
                <p className="text-stone-700 text-xs uppercase mt-2 tracking-normalst">Pressure</p>
              </div>
              <div className="w-px h-12 bg-stone-200"></div>
              <div>
                <p className="text-3xl font-serif text-brand-stone">100%</p>
                <p className="text-stone-700 text-xs uppercase mt-2 tracking-normalst">Potential</p>
              </div>
            </div>
          </motion.div>

          {/* Reduced Architectural Visual */}
          <div className="relative aspect-square max-w-md mx-auto lg:ml-auto flex items-center justify-center">
             <div className="absolute inset-0 border border-stone-100 rounded-full"></div>
             <div className="absolute inset-16 border border-stone-50 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_20px_#b45309]"></div>
          </div>
        </div>
      </section>

      {/* 5. Seamless Checkout */}
      <section className="py-32 px-6 bg-brand-cream border-t border-stone-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-stone mb-16">Begin Your Integration.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
             <div className="p-10 bg-white border border-stone-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-serif mb-4">Self-Directed</h3>
                <p className="text-stone-700 mb-8 text-base italic">"I build my own foundation."</p>
                <button className="w-full py-4 text-brand-stone border border-brand-stone uppercase text-xs tracking-brand-wide font-bold rounded-full hover:bg-brand-stone hover:text-white transition-all">
                  Join the space
                </button>
             </div>
             
             <div className="p-10 bg-white border border-brand-gold/30 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-serif mb-4">Direct Guidance</h3>
                <p className="text-stone-700 mb-8 text-base italic">"I activate the collaboration."</p>
                <button className="w-full py-4 bg-brand-gold text-white uppercase text-xs tracking-brand-wide font-bold rounded-full hover:bg-amber-700 transition-all shadow-lg">
                  Begin the Inquiry
                </button>
             </div>
          </div>
          
          <p className="text-stone-700 font-medium text-base max-w-xl mx-auto mb-16 leading-snug">
            This work is entirely individual and not standardized. Every path is a unique recalibration of your systemic potential.
          </p>
          
          <div className="pt-10 border-t border-stone-200">
            <p className="text-stone-700 text-xs uppercase tracking-[0.2em]">
              All paths begin with a moment of silence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunionPage;
