import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { monuments } from '@/lib/monumentsData';
import { getMonumentImage } from '@/lib/images';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PopularMonuments() {
  const { t, lang } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const featured = monuments.filter(m => m.featured).slice(0, 6);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Collection</p>
            <h2 className="text-3xl md:text-4xl font-bold">{t('sections.popular')}</h2>
          </div>
          <Link to="/monuments" className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group">
            {t('common.viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((monument, i) => (
            <motion.div
              key={monument.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/monuments/${monument.id}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted"
              >
                <img
                  src={getMonumentImage(monument.id)}
                  alt={monument.name[lang] || monument.name.en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-primary/80 mb-1">
                    {monument.century}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {monument.name[lang] || monument.name.en}
                  </h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        <Link to="/monuments" className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm text-primary">
          {t('common.viewAll')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}