import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrushHighlight from '../components/BrushHighlight';

const QUESTIONS = [
  {
    id: 'path',
    step: 1,
    type: 'choice',
    eyebrow: 'The Entry Point',
    question: 'Where would you like to begin your work?',
    subtext: 'Every path leads to the same foundational order. Where do you feel the most resonance right now?',
    options: [
      { id: 'lifeguide', label: 'LifeGuide-KaTao (Foundational Work)', desc: 'Address a specific challenge, symptom, or recurring pattern through the original systemic method refined over two decades.' },
      { id: 'commin', label: 'commIN Space (Group Experience)', desc: 'Build inner stability within a shared, unhurried space.' },
      { id: 'guidance', label: 'Guidance Path (Individual Depth)', desc: 'Direct, intensive systemic reordering.' }
    ]
  },
  {
    id: 'q1',
    step: 2,
    type: 'text',
    eyebrow: 'Before We Meet',
    question: 'What have you already tried that has reached its limit?',
    subtext: 'Be honest. This space holds no judgment — only clarity.',
    placeholder:
      'Perhaps a method, a person, a way of operating that once served you but no longer does...',
  },
  {
    id: 'q2',
    step: 3,
    type: 'text',
    eyebrow: 'The Impulse',
    question: 'What is the primary calling behind your inquiry right now?',
    subtext: 'Something quiet is bringing you here. What is it?',
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
  const [answers, setAnswers] = useState({ path: '', q1: '', q2: '' });
  const [currentAnswer, setCurrentAnswer] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Focus textarea when a text question becomes active
  useEffect(() => {
    if (step >= 1 && step <= 3) {
      const q = QUESTIONS[step - 1];
      if (q && q.type === 'text' && textareaRef.current) {
        setTimeout(() => textareaRef.current?.focus(), 600);
      }
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
        <div className="absolute inset-0 z-0 bg-stone-50">
          {/* Scientific/Physics-rooted visual: grid lines instead of ethereal glows */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-cream to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-cream to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-brand-gold/70 text-xs md:text-base uppercase tracking-brand-wide mb-8 font-semibold"
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
            className="max-w-2xl mx-auto text-stone-700 text-xl md:text-xl font-medium leading-snug tracking-normal mb-6"
          >
            "This is not a method or a tool. It is direct access to an inner realm — a discernment process for both of us."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.3, duration: 1.2 }}
            className="max-w-xl mx-auto text-stone-700 text-base font-medium leading-snug mb-16"
          >
            A space to perceive the work without distraction. Three honest questions. Then, if the resonance is clear, the calendar opens.
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
              className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full border border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-brand-gold hover:text-white uppercase text-[11px] tracking-[0.15em] font-bold transition-all duration-500 hover:shadow-[0_8px_30px_rgba(180,83,9,0.25)]"
            >
              Begin the Application
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-white/60 group-hover:bg-white/10">
                <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <p className="text-stone-700 text-[10px] uppercase tracking-[0.25em] font-medium">
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
                <span className="text-[10px] uppercase tracking-[0.15em] text-stone-700 font-semibold">
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

                <p className="text-stone-700 font-medium text-base mb-12 leading-snug italic">
                  {currentQ?.subtext}
                </p>

                {currentQ?.type === 'choice' ? (
                  <div className="flex flex-col gap-4 mt-8">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setCurrentAnswer(opt.label)}
                        className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                          currentAnswer === opt.label
                            ? 'border-brand-gold bg-brand-gold/5 shadow-[0_10px_30px_rgba(180,83,9,0.1)]'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        <h3 className={`font-serif text-xl mb-2 ${currentAnswer === opt.label ? 'text-brand-stone' : 'text-stone-700'}`}>{opt.label}</h3>
                        <p className="text-stone-700 font-medium text-base">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <textarea
                    ref={textareaRef}
                    id={`answer-${step}`}
                    rows={6}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder={currentQ?.placeholder}
                    className="w-full bg-white border border-stone-200 rounded-2xl p-8 text-stone-700 font-medium text-base leading-snug placeholder:text-stone-300 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10 transition-all duration-300 resize-none shadow-sm"
                  />
                )}

                <div className="flex items-center justify-between mt-8">
                  <span className="text-stone-700 text-base font-medium">
                    {currentQ?.type === 'text' && currentAnswer.length > 0
                      ? currentAnswer.trim().split(/\s+/).length + ' words'
                      : ''}
                  </span>

                  <button
                    id={`next-question-${step}`}
                    onClick={handleNext}
                    disabled={currentQ?.type === 'choice' ? !currentAnswer : currentAnswer.trim().length < 10}
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
                className="max-w-xl mx-auto text-stone-700 font-medium text-xl leading-snug"
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
                  <p className="text-stone-700 font-medium text-base leading-snug italic">
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
              <p className="text-brand-gold text-base uppercase tracking-brand-wide font-bold mb-8">
                The Reason for Selection
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-tight">
                Why an <span className="italic">Application?</span>
              </h2>
              <div className="space-y-8 max-w-xl">
                <p className="text-stone-700 text-xl font-medium leading-snug">
                  The purpose of this inquiry is <span className="text-brand-gold font-medium">collaboration.</span>
                </p>
                <p className="text-stone-700 text-xl font-medium leading-snug">
                  Whether you enter through the foundational LifeGuide-KaTao work, the commIN space, or the Guidance Path — each path exists only through this partnership. The three questions are an invitation to begin arriving — ensuring that this work remains individual, non-standardized, and focused on your unique systemic potential.
                </p>
              </div>

              <div className="mt-12 flex gap-12">
                <div>
                  <p className="text-3xl font-serif text-brand-stone">Deep</p>
                  <p className="text-stone-700 text-xs uppercase mt-2 tracking-normalst">
                    Recalibration
                  </p>
                </div>
                <div className="w-px h-12 bg-stone-200" />
                <div>
                  <p className="text-3xl font-serif text-brand-stone">Unhurried</p>
                  <p className="text-stone-700 text-xs uppercase mt-2 tracking-normalst">
                    Process
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Clean, Reduced Environment */}
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto flex items-center justify-center">
              <div className="absolute inset-0 border border-stone-100 rounded-full" />
              <div className="w-1 h-1 bg-brand-gold/40 rounded-full" />
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
                  title: 'Presence Initialized',
                  body: 'Your three reflections are read with full attention. This is the moment where the collaboration begins.',
                },
                {
                  num: '02',
                  title: 'A Time Selected',
                  body: 'You select a moment in the calendar. Not a slot — a moment of genuine, unhurried meeting.',
                },
                {
                  num: '03',
                  title: 'An Impulse Set',
                  body: 'The first meeting is a systemic calibration. No discovery call agenda—only an impulse being set for your potential.',
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
                    <h3 className="text-xl font-serif text-brand-stone mb-3">
                      {item.title}
                    </h3>
                    <p className="text-stone-700 font-medium text-base leading-snug">
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
