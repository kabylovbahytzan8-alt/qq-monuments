import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { monuments, wonders } from '@/lib/monumentsData';
import { getMonumentImage } from '@/lib/images';
import { motion, useInView } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

export default function WondersSection() {
  const { t, lang } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const wonderMonuments = wonders.map(id => monuments.find(m => m.id === id)).filter(Boolean);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <Crown className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-glow">{t('sections.wonders')}</h2>
        </motion.div>

        {/* Hero wonder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Link to={`/monuments/${wonderMonuments[0]?.id}`} className="group block relative rounded-2xl overflow-hidden aspect-[21/9] mb-6 bg-muted">
            <img src={getMonumentImage(wonderMonuments[0]?.id)} alt={wonderMonuments[0]?.name[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="font-mono text-xs tracking-widest text-primary mb-2 block">01 / 07</span>
              <h3 className="text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                {wonderMonuments[0]?.name[lang]}
              </h3>
            </div>
          </Link>
        </motion.div>

        {/* Other wonders grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {wonderMonuments.slice(1).map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link to={`/monuments/${m.id}`} className="group block relative rounded-xl overflow-hidden aspect-[3/2] bg-muted">
                <img src={getMonumentImage(m.id)} alt={m.name[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="font-mono text-[10px] tracking-widest text-primary/70">0{i + 2} / 07</span>
                  <h3 className="text-sm md:text-base font-semibold group-hover:text-primary transition-colors">
                    {m.name[lang]}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}