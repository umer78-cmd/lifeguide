import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DustMotes from '../components/DustMotes';
import BrushHighlight from '../components/BrushHighlight';

const QUESTIONS = [
  {
    id: 'q1',
    step: 1,
    eyebrow: 'Before We Meet',
    question: 'What have you already tried that has reached its limit?',
    subtext: 'Be honest. This space holds no judgment — only clarity.',
    placeholder:
      'Perhaps a method, a person, a way of operating that once served you but no longer does...',
  },
  {
    id: 'q2',
    step: 2,
    eyebrow: 'A Question of Readiness',
    question:
      'Are you ready for a deep, unhurried recalibration?',
    subtext:
      'Not a quick fix. Not a life-hack. A genuine reordering from the inside out.',
    placeholder:
      'What does readiness feel like for you right now? What makes you say yes — or hesitate?',
  },
  {
    id: 'q3',
    step: 3,
    eyebrow: 'The Impulse Behind the Inquiry',
    question:
      'What is the primary calling behind your inquiry right now?',
    subtext:
      'Something quiet is bringing you here. What is it?',
    placeholder:
      'A feeling, a tension, a longing to be met differently by your own life...',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ConnectionPage() {
  const [isReady, setIsReady] = useState(false);
  const [step, setStep] = useState(0); // 0 = intro, 1-3 = questions, 4 = calendar
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [currentAnswer, setCurrentAnswer] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Focus textarea when a question becomes active
  useEffect(() => {
    if (step >= 1 && step <= 3 && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 600);
    }
  }, [step]);

  const handleBegin = () => {
    setStep(1);
    setCurrentAnswer('');
  };

  const handleNext = () => {
    const q = QUESTIONS[step - 1];
    setAnswers((prev) => ({ ...prev, [q.id]: currentAnswer }));
    if (step < 3) {
      setStep((s) => s + 1);
      setCurrentAnswer('');
    } else {
      setStep(4);
    }
  };

  const currentQ = step >= 1 && step <= 3 ? QUESTIONS[step - 1] : null;
  const progress = step > 0 ? (Math.min(step, 3) / 3) * 100 : 0;

  return (
    <div className="bg-brand-cream overflow-x-hidden min-h-screen">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50/30 to-brand-cream" />
          <DustMotes />
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(180,83,9,0.06) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-brand-gold/70 text-xs md:text-sm uppercase tracking-brand-wide mb-8 font-semibold"
          >
            The Application
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 1.1 }}
            className="text-6xl md:text-9xl font-serif text-brand-stone mb-10 leading-tight"
          >
            The{' '}
            <BrushHighlight className="italic text-brand-gold">
              Connection.
            </BrushHighlight>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 1.4 }}
            className="max-w-2xl mx-auto text-stone-500 text-lg md:text-xl font-light leading-relaxed tracking-wide mb-6"
          >
            "This is not a booking link. It is a discernment process — for both of us."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.3, duration: 1.2 }}
            className="max-w-xl mx-auto text-stone-400 text-base font-light leading-relaxed mb-16"
          >
            Three honest questions. Then, if the resonance is clear, the calendar opens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex flex-col items-center gap-5"
          >
            <button
              id="begin-application"
              onClick={handleBegin}
              className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full border border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-brand-gold hover:text-white uppercase text-[11px] tracking-[0.3em] font-bold transition-all duration-500 hover:shadow-[0_8px_30px_rgba(180,83,9,0.25)]"
            >
              Begin the Application
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-white/60 group-hover:bg-white/10">
                <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <p className="text-stone-400 text-[10px] uppercase tracking-[0.25em] font-medium">
              Takes 3 minutes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 1 }}
            className="mt-20"
          >
            <div className="w-px h-24 bg-gradient-to-b from-brand-gold/40 to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ── Application Form Layer ────────────────────────────────────────── */}
      <AnimatePresence>
        {step >= 1 && step <= 3 && (
          <motion.section
            key="form-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="py-20 md:py-32 px-6 bg-white relative"
            id="application-form"
          >
            {/* Progress bar */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold">
                  Question {step} of 3
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/70 font-semibold">
                  {step === 1 ? 'The Foundation' : step === 2 ? 'The Readiness' : 'The Calling'}
                </span>
              </div>
              <div className="h-[1px] bg-stone-100 w-full rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-gold"
                  initial={{ width: `${((step - 1) / 3) * 100}%` }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-3xl mx-auto"
              >
                <p className="text-brand-gold text-xs uppercase tracking-brand-wide font-semibold mb-6">
                  {currentQ?.eyebrow}
                </p>

                <h2 className="text-3xl md:text-5xl font-serif text-brand-stone mb-6 leading-snug">
                  {currentQ?.question}
                </h2>

                <p className="text-stone-400 font-light text-base mb-12 leading-relaxed italic">
                  {currentQ?.subtext}
                </p>

                <textarea
                  ref={textareaRef}
                  id={`answer-${step}`}
                  rows={6}
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  placeholder={currentQ?.placeholder}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl p-8 text-stone-700 font-light text-base leading-relaxed placeholder:text-stone-300 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10 transition-all duration-300 resize-none"
                />

                <div className="flex items-center justify-between mt-8">
                  <span className="text-stone-300 text-sm font-light">
                    {currentAnswer.length > 0
                      ? currentAnswer.trim().split(/\s+/).length + ' words'
                      : 'Take your time.'}
                  </span>

                  <button
                    id={`next-question-${step}`}
                    onClick={handleNext}
                    disabled={currentAnswer.trim().length < 10}
                    className="group relative px-10 py-4 bg-brand-stone text-white uppercase text-[10px] tracking-[0.35em] font-bold overflow-hidden rounded-full transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:shadow-[0_15px_40px_rgba(28,25,23,0.14)] inline-flex items-center gap-3"
                  >
                    <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:enabled:translate-y-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10">
                      {step < 3 ? 'Continue' : 'Submit & Proceed'}
                    </span>
                    <svg
                      className="relative z-10 w-3 h-3 transition-transform duration-300 group-hover:enabled:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Calendar Reveal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {step === 4 && (
          <motion.section
            key="calendar-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="py-20 md:py-32 px-6 bg-white relative"
            id="booking-calendar"
          >
            <div className="max-w-4xl mx-auto text-center mb-16">
              {/* Ornamental divider */}
              <div className="flex items-center gap-6 justify-center mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-gold/30" />
                <div className="w-2 h-2 rounded-full bg-brand-gold/60" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-gold/30" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-brand-gold text-xs uppercase tracking-brand-wide font-semibold mb-6"
              >
                The Resonance Is Clear
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-4xl md:text-6xl font-serif text-brand-stone mb-8 leading-tight"
              >
                Thank you for your{' '}
                <span className="italic text-brand-gold">honesty.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-xl mx-auto text-stone-500 font-light text-lg leading-relaxed"
              >
                You have given this inquiry the weight it deserves. Now, choose a
                moment for us to meet — unhurried, with full presence.
              </motion.p>
            </div>

            {/* Answers summary (subtle, reassuring) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-2xl mx-auto mb-16 space-y-6"
            >
              {QUESTIONS.map((q, i) => (
                <div
                  key={q.id}
                  className="p-6 rounded-2xl border border-stone-100 bg-stone-50 text-left"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/70 font-bold mb-2">
                    {q.eyebrow}
                  </p>
                  <p className="text-stone-500 font-light text-sm leading-relaxed italic">
                    "{answers[q.id]}"
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Calendly embed placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-2xl shadow-stone-100">
                {/* Replace the src below with your Calendly URL */}
                <iframe
                  id="calendly-embed"
                  src="https://calendly.com/your-link/consultation"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a Consultation"
                  className="block"
                />
              </div>
              <p className="text-center text-stone-300 text-[10px] uppercase tracking-[0.2em] mt-6">
                All sessions are held with complete confidentiality.
              </p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Why This Process? (Methodology) ─────────────────────────────── */}
      {step < 4 && (
        <section className="py-32 md:py-52 bg-brand-cream relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-brand-gold text-sm uppercase tracking-brand-wide font-bold mb-8">
                The Reason for Selection
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-tight">
                Why an <span className="italic">Application?</span>
              </h2>
              <div className="space-y-8 max-w-xl">
                <p className="text-stone-600 text-xl font-light leading-relaxed">
                  A calendar link is open to anyone.{' '}
                  <span className="text-brand-gold font-medium">
                    This space is not.
                  </span>
                </p>
                <p className="text-stone-500 text-lg font-light leading-relaxed">
                  The three questions are not a filter of worth — they are an
                  invitation to begin arriving. The act of honest reflection before
                  we meet sets the foundation for everything that follows.
                </p>
              </div>

              <div className="mt-12 flex gap-12">
                <div>
                  <p className="text-3xl font-serif text-brand-stone">Deep</p>
                  <p className="text-stone-400 text-xs uppercase mt-2 tracking-widest">
                    Recalibration
                  </p>
                </div>
                <div className="w-px h-12 bg-stone-200" />
                <div>
                  <p className="text-3xl font-serif text-brand-stone">Unhurried</p>
                  <p className="text-stone-400 text-xs uppercase mt-2 tracking-widest">
                    Process
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Abstract Orb Visual */}
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 border border-stone-200 rounded-full animate-pulse-slow" />
              <div
                className="absolute inset-8 border border-brand-gold/20 rounded-full animate-pulse-slow"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="absolute inset-16 border border-stone-100 rounded-full animate-pulse-slow"
                style={{ animationDelay: '2s' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-brand-gold/10 backdrop-blur-3xl rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_30px_#b45309]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── What to Expect (closing reassurance) ─────────────────────────── */}
      {step < 4 && (
        <section className="py-32 px-6 bg-white border-t border-stone-100">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <p className="text-brand-gold text-xs uppercase tracking-brand-wide font-bold mb-6">
                The Shape of a First Meeting
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-stone leading-tight">
                What happens after you apply.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  num: '01',
                  title: 'Your Application Is Received',
                  body: 'Your three reflections are read with full attention — not skimmed. This is the beginning of presence.',
                },
                {
                  num: '02',
                  title: 'A Time Is Chosen',
                  body: 'You select a moment in the calendar. Not a slot — a moment of genuine meeting.',
                },
                {
                  num: '03',
                  title: 'We Begin, Together',
                  body: 'The first session is an unhurried conversation. No agenda. Only the truth of where you are.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-brand-gold/25 font-serif text-3xl mt-1 flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif text-brand-stone mb-3">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 font-light text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
