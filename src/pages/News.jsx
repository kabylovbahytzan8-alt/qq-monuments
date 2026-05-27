import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { newsArticles } from '@/lib/monumentsData';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export default function News() {
  const { t, lang } = useI18n();
  const featured = newsArticles.filter(a => a.featured);
  const rest = newsArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Journal</p>
          <h1 className="text-3xl md:text-5xl font-bold">{t('nav.news')}</h1>
        </motion.div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featured.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-8 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-primary/60" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {format(new Date(article.date), 'MMM dd, yyyy')}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-mono uppercase">
                    {article.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-accent/20 text-primary text-[10px] font-mono uppercase">
                    Featured
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title[lang] || article.title.en}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt[lang] || article.excerpt.en}
                </p>
                <span className="flex items-center gap-1 text-sm text-primary">
                  {t('common.readMore')} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.article>
            ))}
          </div>
        )}

        {/* All articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-3 h-3 text-primary/60" />
                <span className="font-mono text-xs text-muted-foreground">
                  {format(new Date(article.date), 'MMM dd, yyyy')}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                {article.title[lang] || article.title.en}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt[lang] || article.excerpt.en}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}