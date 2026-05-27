import React, { useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { motion, useInView } from 'framer-motion';

const timelineEvents = [
  { year: '2500 BC', title: { ru: 'Первые поселения', en: 'First Settlements', uz: 'Birinchi manzilgohlar', qq: 'Birinshi mánzilgahlar' } },
  { year: '600 BC', title: { ru: 'Расцвет Хорезма', en: 'Rise of Khorezm', uz: 'Xorazm yuksalishi', qq: 'Xorezm ósiwi' } },
  { year: '300 BC', title: { ru: 'Строительство крепостей', en: 'Fortress Construction', uz: 'Qalʼalar qurilishi', qq: 'Qalalar qurılısı' } },
  { year: '1 AD', title: { ru: 'Кушанский период', en: 'Kushan Period', uz: 'Kushon davri', qq: 'Kushan dáwiri' } },
  { year: '700', title: { ru: 'Исламизация', en: 'Islamization', uz: 'Islom tarqalishi', qq: 'İslam tarqalıwı' } },
  { year: '1220', title: { ru: 'Нашествие Чингисхана', en: 'Mongol Invasion', uz: 'Moʻgʻul istilosi', qq: 'Moǵul basqınshılıǵı' } },
  { year: '1920', title: { ru: 'Советский период', en: 'Soviet Period', uz: 'Sovet davri', qq: 'Sovet dáwiri' } },
  { year: '1991', title: { ru: 'Независимость', en: 'Independence', uz: 'Mustaqillik', qq: 'Gárezsizlik' } },
];

export default function HistoryTimeline() {
  const { t, lang } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-24 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Chronicle</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('sections.history')}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass rounded-xl p-5 inline-block">
                    <span className="font-mono text-xs text-primary tracking-wider">{event.year}</span>
                    <h3 className="text-base font-semibold mt-1">{event.title[lang] || event.title.en}</h3>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full border-2 border-primary/40 bg-obsidian flex-shrink-0 items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}