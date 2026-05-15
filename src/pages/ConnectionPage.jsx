import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrushHighlight from '../components/BrushHighlight';
import OrganicDivider from '../components/OrganicDivider';
import { useLanguage } from '../context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ConnectionPage() {
  const { t } = useLanguage();
  const [isReady, setIsReady] = useState(false);
  const [step, setStep] = useState(0); // 0 = intro, 1-3 = questions, 4 = calendar
  const [answers, setAnswers] = useState({ path: '', q1: '', q2: '' });
  const [currentAnswer, setCurrentAnswer] = useState('');
  const textareaRef = useRef(null);

  const QUESTIONS = [
    {
      id: 'path',
      step: 1,
      type: 'choice',
      eyebrow: t('conn.q1Eyebrow'),
      question: t('conn.q1Question'),
      subtext: t('conn.q1Sub'),
      options: [
        { id: 'lifeguide', label: t('conn.q1Opt1Label'), desc: t('conn.q1Opt1Desc') },
        { id: 'commin', label: t('conn.q1Opt2Label'), desc: t('conn.q1Opt2Desc') },
        { id: 'guidance', label: t('conn.q1Opt3Label'), desc: t('conn.q1Opt3Desc') }
      ]
    },
    {
      id: 'q1',
      step: 2,
      type: 'text',
      eyebrow: t('conn.q2Eyebrow'),
      question: t('conn.q2Question'),
      subtext: t('conn.q2Sub'),
      placeholder: t('conn.q2Place'),
    },
    {
      id: 'q2',
      step: 3,
      type: 'text',
      eyebrow: t('conn.q3Eyebrow'),
      question: t('conn.q3Question'),
      subtext: t('conn.q3Sub'),
      placeholder: t('conn.q3Place'),
    },
  ];

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
            className="text-brand-gold text-sm md:text-base uppercase tracking-brand-wide mb-8 font-bold"
          >
            {t('conn.heroKicker')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 1.1 }}
            className="text-6xl md:text-9xl font-serif text-brand-stone mb-10 leading-tight"
          >
            {t('conn.heroTitle1')}
            <BrushHighlight className="italic text-brand-gold">
              {t('conn.heroTitleHighlight')}
            </BrushHighlight>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 1.4 }}
            className="max-w-2xl mx-auto text-stone-700 text-xl md:text-2xl font-serif font-normal leading-relaxed tracking-normal mb-6"
          >
            {t('conn.heroP1')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.3, duration: 1.2 }}
            className="max-w-xl mx-auto text-stone-700 text-lg md:text-xl font-serif font-normal leading-relaxed mb-16"
          >
            {t('conn.heroP2')}
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
              {t('conn.heroBtn')}
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-white/60 group-hover:bg-white/10">
                <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <p className="text-stone-700 text-[10px] uppercase tracking-[0.25em] font-medium">
              {t('conn.heroTime')}
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
                  {t('conn.stepCount')} {step} {t('conn.stepOf')} 3
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/70 font-semibold">
                  {step === 1 ? t('conn.stepName1') : step === 2 ? t('conn.stepName2') : t('conn.stepName3')}
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

                <p className="text-stone-700 font-serif text-lg md:text-xl mb-12 leading-relaxed italic">
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
                        <p className="text-stone-700 font-serif text-base md:text-lg">{opt.desc}</p>
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
                    className="w-full bg-white border border-stone-200 rounded-2xl p-8 text-stone-700 font-serif text-lg md:text-xl leading-relaxed placeholder:text-stone-300 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10 transition-all duration-300 resize-none shadow-sm"
                  />
                )}

                <div className="flex items-center justify-between mt-8">
                  <span className="text-stone-700 text-base font-medium">
                    {currentQ?.type === 'text' && currentAnswer.length > 0
                      ? currentAnswer.trim().split(/\s+/).length + ` ${t('conn.words')}`
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
                      {step < 3 ? t('conn.btnContinue') : t('conn.btnSubmit')}
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
              <OrganicDivider variant={0} className="mb-12" />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-brand-gold text-xs uppercase tracking-brand-wide font-semibold mb-6"
              >
                {t('conn.calKicker')}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-4xl md:text-6xl font-serif text-brand-stone mb-8 leading-tight"
              >
                {t('conn.calTitle1')}
                <span className="italic text-brand-gold">{t('conn.calTitleHighlight')}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-xl mx-auto text-stone-700 font-serif text-xl md:text-2xl leading-relaxed"
              >
                {t('conn.calDesc')}
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
                  <p className="text-stone-700 font-serif text-lg leading-relaxed italic">
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
                {t('conn.calConfidential')}
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
                {t('conn.whyKicker')}
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-tight">
                {t('conn.whyTitle1')}<span className="italic">{t('conn.whyTitleHighlight')}</span>
              </h2>
              <div className="space-y-8 max-w-xl">
                <p className="text-stone-700 text-xl font-serif leading-relaxed">
                  {t('conn.whyP1_1')}<span className="text-brand-gold italic">{t('conn.whyP1_2')}</span>
                </p>
                <p className="text-stone-700 text-xl font-serif leading-relaxed">
                  {t('conn.whyP2')}
                </p>
              </div>

              <div className="mt-12 flex gap-12">
                <div>
                  <p className="text-3xl font-serif text-brand-stone">{t('conn.feat1Title')}</p>
                  <p className="text-stone-700 text-xs uppercase mt-2 tracking-normalst">
                    {t('conn.feat1Desc')}
                  </p>
                </div>
                <div className="w-px h-12 bg-stone-200" />
                <div>
                  <p className="text-3xl font-serif text-brand-stone">{t('conn.feat2Title')}</p>
                  <p className="text-stone-700 text-xs uppercase mt-2 tracking-normalst">
                    {t('conn.feat2Desc')}
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
                {t('conn.expKicker')}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-stone leading-tight">
                {t('conn.expTitle')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  num: '01',
                  title: t('conn.exp1Title'),
                  body: t('conn.exp1Desc'),
                },
                {
                  num: '02',
                  title: t('conn.exp2Title'),
                  body: t('conn.exp2Desc'),
                },
                {
                  num: '03',
                  title: t('conn.exp3Title'),
                  body: t('conn.exp3Desc'),
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
                    <p className="text-stone-700 font-serif text-base md:text-lg leading-relaxed">
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
