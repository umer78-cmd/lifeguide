import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DustMotes from '../components/DustMotes';
import BrushHighlight from '../components/BrushHighlight';

const RevealParagraph = ({ children, delay = 0, className = "" }) => (
  <motion.p
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.p>
);

const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="flex items-center justify-center py-24 md:py-32"
  >
    <div className="flex items-center gap-6">
      {/* Thicker 1.5px line, wider desktop size, fades to solid brand-gold */}
      <div className="w-20 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent to-brand-gold/80"></div>
      {/* Prominent central dot with outer ring */}
      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/75 ring-4 ring-brand-gold/20 shadow-sm"></div>
      <div className="w-20 md:w-32 h-[1.5px] bg-gradient-to-l from-transparent to-brand-gold/80"></div>
    </div>
  </motion.div>
);

const JourneyPage = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const pStyle = "text-stone-700 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";
  const pStyleEmphasis = "text-stone-800 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";

  return (
    <div className="bg-brand-cream overflow-x-hidden relative">

      {/* Background Dust */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.15]">
        <DustMotes />
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.1) 0%, transparent 70%)' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-brand-gold/50 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-12"
          >
            The Methodology
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-8xl font-serif text-stone-800 mb-10 leading-tight tracking-tight"
          >
            The Systemic<br/>
            <span className="italic text-brand-gold">Foundation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1.5 }}
            className="max-w-xl mx-auto text-stone-600 text-lg md:text-xl font-serif font-normal leading-relaxed"
          >
            Over two decades of work with the human system — refined into a precise, living methodology known as LifeGuide-KaTao.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-16"
          >
            <div className="w-px h-20 bg-gradient-to-b from-brand-gold/30 to-transparent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* ── The Science: How the System Works ── */}
      <section className="py-20 md:py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold/50 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-16"
          >
            The Approach
          </motion.p>
          <div className="space-y-10 md:space-y-12">
            <RevealParagraph className={pStyleEmphasis}>
              Many approaches solve problems.<br/>
              We operate at the level where problems originate.
            </RevealParagraph>
            <RevealParagraph delay={0.1} className={pStyle}>
              LifeGuide-KaTao is not a method, but a direct access to an inner realm.<br/>
              By working at the systemic foundation, we release bound energy<br className="hidden md:inline"/>
              so your life power can reorganize itself naturally.
            </RevealParagraph>
            <RevealParagraph delay={0.1} className={pStyle}>
              The human being is not a collection of symptoms.<br/>
              It is a living system — with a center, a direction,<br className="hidden md:inline"/>
              and an intelligence of its own.
            </RevealParagraph>
            <RevealParagraph delay={0.15} className={pStyleEmphasis}>
              When we work at the source,<br/>
              the effects ripple outward into every area of life.
            </RevealParagraph>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── The Evolution: Inner Order → Systemic Creator → Life Potential ── */}
      <section className="py-20 md:py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold/50 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-12"
          >
            The Evolution
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          {[
            {
              number: "01",
              title: "Inner Order",
              tagline: "Internal Architecture",
              description: "The process of internal reorganization where systems align with their true source. When inner order is restored, the outer world begins to shift."
            },
            {
              number: "02",
              title: "Systemic Creator",
              tagline: "Active Architecture",
              description: "Recognizing that the human is a system, and every action is a creation within that system. From this awareness, conscious shaping becomes possible."
            },
            {
              number: "03",
              title: "Lived Life Potential",
              tagline: "Ultimate Emergence",
              description: "Where the work transcends theory and becomes a lived, unhurried reality. The life potential is no longer a concept — it is the way you live."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-xl mx-auto"
            >
              <span className="text-brand-gold/25 font-serif text-4xl md:text-5xl block mb-4">{item.number}</span>
              <p className="text-brand-gold/50 text-[10px] uppercase tracking-[0.25em] font-semibold mb-6">{item.tagline}</p>
              <h3 className="text-2xl md:text-4xl font-serif text-stone-800 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-stone-600 text-lg md:text-xl font-serif font-normal leading-[1.9]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ── Voices of Change (Testimonials) ── */}
      <section className="py-20 md:py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold/50 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-12"
          >
            Voices of Change
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-stone-800 tracking-tight"
          >
            Those who have <span className="italic text-brand-gold">walked</span> this path.
          </motion.h2>
        </div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 md:p-14 ring-1 ring-stone-200/50">
            <div className="text-6xl font-serif text-brand-gold/15 leading-none mb-2 select-none">"</div>
            <div className="text-stone-700 font-serif text-lg md:text-xl leading-[1.9] space-y-6">
              <p>
                I'd already worked with several therapists and practitioners in the field of life energy, but I'd never experienced anything like Katharina von Bilderling's LifeGuide-KaTao guidance.
              </p>
              <p>
                Such profound and mindful work, and somehow it all makes perfect sense when you understand the connections that explain why certain life issues are the way they are.
              </p>
              <p>
                It's an exciting journey to my true self — sometimes fraught with challenges and obstacles — but ultimately enriching, empowering, and liberating at the end of each chapter.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-200/60 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-brand-gold font-serif text-lg">M</span>
              </div>
              <div>
                <p className="text-stone-800 font-serif text-base">Michaela Bobinger</p>
                <p className="text-stone-500 text-xs uppercase tracking-[0.2em] mt-1">Client & LifeGuide-KaTao Practitioner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default JourneyPage;
