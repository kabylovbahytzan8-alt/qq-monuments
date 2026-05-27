import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { categories } from '@/lib/monumentsData';
import { motion, useInView } from 'framer-motion';
import { Castle, Landmark, Building2, GalleryHorizontalEnd, Shield, Mountain, Home, Trophy, Compass, ArrowRight } from 'lucide-react';

const iconMap = {
  Castle, Landmark, Building2, GalleryHorizontalEnd, Shield, Mountain, Home, Trophy, Compass,
};

export default function CategoriesSection() {
  const { t, lang } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Explore</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('sections.categories')}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.slice(0, 5).map((cat, i) => {
            const Icon = iconMap[cat.icon] || Compass;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/monuments?category=${cat.id}`}
                  className="glass rounded-xl p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500 hover:glow-sand block"
                >
                  <Icon className="w-8 h-8 text-primary/60 mb-3 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">{cat[lang] || cat.en}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary/40 mt-2 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {categories.slice(5).map((cat, i) => {
            const Icon = iconMap[cat.icon] || Compass;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (i + 5) * 0.08 }}
              >
                <Link
                  to={`/monuments?category=${cat.id}`}
                  className="glass rounded-xl p-5 flex items-center gap-3 group hover:border-primary/30 transition-all duration-500 block"
                >
                  <Icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">{cat[lang] || cat.en}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}