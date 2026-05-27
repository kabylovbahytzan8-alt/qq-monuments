import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { motion, useInView } from 'framer-motion';
import { Map, ArrowRight } from 'lucide-react';

export default function MapPreview() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Geography</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('sections.interactiveMap')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/map"
            className="group block glass rounded-2xl p-8 md:p-16 text-center hover:border-primary/30 transition-all duration-500"
          >
            <Map className="w-16 h-16 text-primary/40 mx-auto mb-6 group-hover:text-primary transition-colors" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {t('sections.interactiveMap')}
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              {t('hero.subtitle')}
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-primary">
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}