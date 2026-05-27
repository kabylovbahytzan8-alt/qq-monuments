import React, { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n';
import { monuments, categories } from '@/lib/monumentsData';
import MonumentCard from '@/components/shared/MonumentCard';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Monuments() {
  const { t, lang } = useI18n();
  const params = new URLSearchParams(window.location.search);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(params.get('category') || 'all');

  const filtered = useMemo(() => {
    return monuments.filter(m => {
      const matchesCategory = activeCategory === 'all' || m.category === activeCategory;
      const name = (m.name[lang] || m.name.en || '').toLowerCase();
      const matchesSearch = !search || name.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, lang]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Archive</p>
          <h1 className="text-3xl md:text-5xl font-bold">{t('nav.monuments')}</h1>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={t('monument.search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 bg-muted/50 border-border/50 focus:border-primary/50"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{filtered.length} results</span>
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'glass hover:border-primary/30'
            }`}
          >
            {t('monument.allCategories')}
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'glass hover:border-primary/30'
              }`}
            >
              {cat[lang] || cat.en}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((monument, i) => (
            <motion.div
              key={monument.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.5) }}
            >
              <MonumentCard monument={monument} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-lg">No monuments found</p>
          </div>
        )}
      </div>
    </div>
  );
}