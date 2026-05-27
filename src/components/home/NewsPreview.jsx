import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { newsArticles } from '@/lib/monumentsData';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function NewsPreview() {
  const { t, lang } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Updates</p>
            <h2 className="text-3xl md:text-4xl font-bold">{t('sections.latestNews')}</h2>
          </div>
          <Link to="/news" className="hidden md:flex items-center gap-2 text-sm text-primary group">
            {t('common.viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticles.slice(0, 3).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/news/${article.id}`} className="glass rounded-xl p-6 block group hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-primary/60" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {format(new Date(article.date), 'MMM dd, yyyy')}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono uppercase">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title[lang] || article.title.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt[lang] || article.excerpt.en}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('common.readMore')} <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}