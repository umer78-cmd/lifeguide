import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CommInIcon, GuidancePathIcon, LifeGuideIcon } from './BrandIcons';
import OrganicDivider from './OrganicDivider';

/* ── Reusable: A single paragraph that fades in on scroll ── */
const RevealParagraph = ({ children, delay = 0, className = "" }) => (
  <motion.p
    variants={{
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay, ease: "easeOut" } }
    }}
    className={className}
  >
    {children}
  </motion.p>
);

/* ── Reusable: A narrative section with title + paragraphs ── */
const NarrativeBlock = ({ title, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-15%" }}
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          staggerChildren: 0.1
        }
      }
    }}
    className="max-w-2xl mx-auto px-6 text-center"
  >
    {title && (
      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
        // Increased font size of word "SYSTEM" (Narrative Block title), increased ocher-opacity, and widened tracking
        className="text-brand-gold text-lg sm:text-xl md:text-2xl uppercase tracking-[0.35em] font-bold mb-16"
      >
        {title}
      </motion.p>
    )}
    <div className="space-y-10 md:space-y-12">
      {children}
    </div>
  </motion.div>
);

/*
 * ── Entry Point Block ──
 * Each of the three forms of work gets an EQUAL section.
 */
const EntryPointBlock = ({ overline, heading, icon: Icon, children, link, linkText, sessionTiers, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-15%" }}
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          staggerChildren: 0.12
        }
      }
    }}
    className={`max-w-2xl mx-auto px-6 text-center py-24 md:py-32 ${className}`}
  >
    {/* Overline — Increased font size and ocher-colored presence for "Entry point" */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
      className="text-brand-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-8"
    >
      {overline}
    </motion.p>

    {/* Icon — Shared from Hero */}
    {Icon && (
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
        }}
        className="text-brand-gold flex justify-center mb-10 md:mb-14"
      >
        <Icon className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>
    )}

    {/* Heading — same size for ALL three, ensuring equality */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
      }}
      className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-stone-800 leading-[1.2] tracking-tight mb-16 md:mb-20"
    >
      {heading}
    </motion.h2>

    {/* Body paragraphs */}
    <div className="space-y-12 md:space-y-16 animate-fade-in-up">
      {children}
    </div>

    {/* Session tiers — only for Guidance Path (Darker, highly present, prominent options) */}
    {sessionTiers && (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } }
        }}
        className="max-w-sm mx-auto mt-20 md:mt-24 space-y-8"
      >
        {sessionTiers.map((tier, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b border-stone-300 pb-6 hover:border-brand-gold/50 transition-colors duration-300"
          >
            {/* Darker stone-900, bold, and larger text */}
            <span className="text-lg md:text-xl font-sans font-semibold text-stone-900">{tier.title}</span>
            {/* Prominent pill shape, darker stone-800 text */}
            <span className="text-stone-800 font-sans tracking-widest uppercase text-xs sm:text-sm font-bold bg-stone-200/60 px-4 py-1.5 rounded-full">{tier.duration}</span>
          </div>
        ))}
      </motion.div>
    )}

    {/* Optional link — Increased font size and ocher presence ("explore the foundational work") */}
    {link && (
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
        className="mt-20 md:mt-24"
      >
        <Link
          to={link}
          className="text-brand-gold text-lg font-sans tracking-wide hover:text-amber-800 transition-colors duration-500 inline-flex items-center gap-2 font-semibold"
        >
          {linkText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </motion.div>
    )}
  </motion.div>
);

const pStyle = "text-stone-700 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";
const pStyleEmphasis = "text-stone-800 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";

const NarrativeScroll = () => {
  return (
    <section className="bg-brand-cream relative z-10">
      <div className="py-16 md:py-24">

        {/* ──────────────────── THE BRIDGE ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center px-6 pb-12 md:pb-16"
        >
          <p className="text-stone-800 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-[1.8] md:leading-[1.9] tracking-normal max-w-2xl mx-auto">
            What you are experiencing is not random.<br/>
            It follows a deeper structure —<br className="hidden md:inline" />
            one that has always been there.<br/>
            But only becomes visible <br className="hidden md:inline" />
            when <span className="italic text-brand-gold">something begins to shift</span>.
          </p>
        </motion.div>

        <OrganicDivider variant={0} />

        {/* ──────────────────── THE SYSTEM ──────────────────── */}
        <NarrativeBlock title="System">
          <RevealParagraph className={pStyleEmphasis}>
            The human being is matter — and far beyond that.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            Within every human being, there is a system —<br/>
            a living structure in which body, mind, emotions,<br className="hidden md:inline"/>
            and awareness constantly interact.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            The center of this system is the life potential.<br/>
            It expresses outward into life<br/>
            and at the same time responds to what comes from the outside.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            A continuous exchange —<br/>
            a living flow in both directions.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            When this interaction is balanced, life unfolds naturally.<br/>
            When it is disturbed,<br/>
            the effects become visible across different areas of life.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            To understand life,<br/>
            we need to understand the human being as a whole.
          </RevealParagraph>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1 } }
            }}
            className="mt-12"
          >
            {/* Increased font size, weight, and ocher-colored visibility of link */}
            <Link to="/journey" className="text-brand-gold text-lg font-sans tracking-wide hover:text-amber-800 transition-colors duration-500 inline-flex items-center gap-2 font-semibold">
              Read deeper into the systemic foundation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </motion.div>
        </NarrativeBlock>

        <OrganicDivider variant={1} />

        {/* ──────────────────── BRIDGE — into the three entry points ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center py-16 md:py-24 px-6"
        >
          <p className={`${pStyleEmphasis} mb-10`}>
            This understanding becomes available through three forms of work.
          </p>
          <p className={`${pStyle} italic text-stone-500`}>
            They differ only in where the entry begins.
          </p>
        </motion.div>

        <OrganicDivider variant={2} />

        {/* ═══════════════════════════════════════════════════════════════
            THE THREE ENTRY POINTS — equal, vertical, walked-through
            ═══════════════════════════════════════════════════════════════ */}

        {/* ──────────────────── 1. LifeGuide-KaTao ──────────────────── */}
        <EntryPointBlock
          overline="Entry Point"
          heading="LifeGuide-KaTao"
          icon={LifeGuideIcon}
          link="/journey"
          linkText="Explore the foundational work"
          className="md:-translate-x-12"
        >
          <RevealParagraph className={pStyleEmphasis}>
            This work has always begun with the human being as they are.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            With what is present.<br/>
            With what is felt.<br/>
            With what shows itself in life.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            A situation.<br/>
            A challenge.<br/>
            A recurring pattern.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            From there, the process begins to move inward.<br/>
            Following what is connected. Step by step.<br/>
            Toward the core of the system. Toward the life potential.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            The movement and reorganization unfold specifically<br className="hidden md:inline"/>
            within what is connected to this initial situation.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            This way of working has formed the foundation<br className="hidden md:inline"/>
            over many years. It is precise. Focused.<br/>
            And deeply effective within the field it addresses.
          </RevealParagraph>
        </EntryPointBlock>

        <OrganicDivider variant={3} />

        {/* ──────────────────── 2. commIN ──────────────────── */}
        <EntryPointBlock
          overline="Entry Point"
          heading="commIN"
          icon={CommInIcon}
          link="/communion"
          linkText="Enter the shared space"
          className="md:translate-x-12"
        >
          <RevealParagraph className={pStyleEmphasis}>
            A space where understanding begins.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            Here, people begin defining their own access<br className="hidden md:inline"/>
            to their inner life power.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            Through courses.<br/>
            Through workshops.<br/>
            Through webinars.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            This space creates activation, opening,<br/>
            and first awareness through collective experience.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            Here you define your steps —<br/>
            at your own pace, in your own way,<br className="hidden md:inline"/>
            without direct personal contact.
          </RevealParagraph>
        </EntryPointBlock>

        <OrganicDivider variant={0} />

        {/* ──────────────────── 3. Guidance Path ──────────────────── */}
        <EntryPointBlock
          overline="Entry Point"
          heading="Guidance Path"
          icon={GuidancePathIcon}
          className="md:-translate-x-6"
          sessionTiers={[
            { title: "Foundation", duration: "3 Sessions" },
            { title: "Stabilization", duration: "5 Sessions" },
            { title: "Deep Work", duration: "8 Sessions" }
          ]}
        >
          <RevealParagraph className={pStyleEmphasis}>
            Here you are. You say yes. You respond. An impulse is placed. Inside you, something begins to open. Movement. Release. Reorganization. In your own rhythm.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            The most direct form of the work.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            It begins directly at the central inner level<br className="hidden md:inline"/>
            where everything within the person connects.
          </RevealParagraph>
          <RevealParagraph delay={0.2} className={pStyle}>
            From there, movement unfolds<br/>
            across the whole being.
          </RevealParagraph>
          <RevealParagraph delay={0.25} className={pStyle}>
            What has been held begins to release.<br/>
            What was not accessible becomes available again.
          </RevealParagraph>
          <RevealParagraph delay={0.3} className={pStyleEmphasis}>
            This is not a step-by-step process.<br/>
            It unfolds as a whole. In your own rhythm.
          </RevealParagraph>
        </EntryPointBlock>

      </div>
    </section>
  );
};

export default NarrativeScroll;
