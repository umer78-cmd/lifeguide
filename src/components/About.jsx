import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BrushHighlight from './BrushHighlight';

// Subtle counter — starts near the target for a quick, alive sweep
const useCounter = (target, startFrom, duration = 1000) => {
  const [count, setCount] = useState(startFrom);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const range = target - startFrom;
    let startTime = 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out quart — fast start, gentle land
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(startFrom + eased * range));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target); // lock to exact target
      }
    };
    requestAnimationFrame(step);
  }, [started, target, startFrom, duration]);

  return { count, ref };
};

const About = () => {
  const years = useCounter(23, 14, 900);
  const founded = useCounter(2000, 1988, 1200);

  return (
    <section id="the-expert" className="py-32 bg-brand-cream px-6 relative z-10 border-t border-stone-200/50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left - Portrait */}
        <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full flex items-center justify-center group/image">
          {/* Optimized Glow — Using radial-gradient instead of blur filter */}
          <div 
            className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] transition-all duration-1000 group-hover/image:scale-110"
            style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.1) 0%, rgba(180, 83, 9, 0) 70%)' }}
          ></div>
          <div className="relative z-10 w-full max-w-[400px] h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(120,53,15,0.3)] ring-1 ring-amber-600/10 group-hover/image:ring-amber-600/30 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src="/images/katharina_portrait1.png" 
              alt="Katharina von Bilderling — Systemic Guide and Founder" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-[2000ms] ease-out will-change-transform"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col text-left">
          <p className="text-brand-gold/80 text-sm uppercase tracking-brand-wide mb-10 font-semibold">
            Understanding the Core
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-12">
            The Logic of <br /><span className="italic text-brand-gold">Inner Reorganization</span>
          </h2>
          
          <div className="space-y-10 text-stone-600 font-light leading-relaxed text-base md:text-lg tracking-wide">
            <p>
              Most people function remarkably well despite significant inner imbalances. They adapt, compensate, and continue—often for years—while sensing that something is no longer aligned.
            </p>
            <p>
              Common approaches focus on these external symptoms, attempting to fix what is visible on the surface. But true change requires a different starting point.
            </p>
            <p className="text-brand-stone font-serif italic text-xl md:text-2xl leading-relaxed tracking-wider border-l-2 border-brand-gold/30 pl-8 my-12">
              "My work begins within, where energy is bound in systemic imbalances. We don't fix symptoms; we restore the flow."
            </p>
            <p>
              Life potential is a bidirectional flow. When the inner architecture is clear, energy moves freely, allowing life to reorganize itself from the core outward.
            </p>
          </div>
          
          {/* Subtle Authority Integration */}
          <div className="mt-20 pt-10 border-t border-stone-200/80 flex flex-col md:flex-row md:items-center gap-8 opacity-60">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2 font-bold">Foundation</p>
              <p className="text-stone-600 text-sm font-light">23 Years of Systemic Practice</p>
            </div>
            <div className="hidden md:block w-12 h-[1px] bg-stone-300"></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2 font-bold">The Expert</p>
              <p className="text-brand-gold font-serif text-lg italic">Katharina von Bilderling</p>
            </div>
          </div>

          {/* Journey CTA */}
          <div className="mt-16">
            <Link
              to="/journey"
              id="journey-cta-about"
              className="group inline-flex items-center gap-4 px-10 py-4 rounded-full border border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-brand-gold hover:text-white uppercase text-[10px] tracking-[0.3em] font-bold transition-all duration-500"
            >
              The Full Journey
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/50">
                <svg className="w-2 h-2 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
