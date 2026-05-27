import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { motion, useInView } from 'framer-motion';
import { Castle, Landmark, Clock, Building2, Star, Search } from 'lucide-react';

const statsData = [
  { value: 100, suffix: '+', key: 'monuments', icon: Landmark },
  { value: 40, suffix: '+', key: 'fortresses', icon: Castle },
  { value: 2500, suffix: '+', key: 'years', icon: Clock },
  { value: 20, suffix: '+', key: 'museums', icon: Building2 },
  { value: 10, suffix: '+', key: 'sacred', icon: Star },
  { value: 50, suffix: '+', key: 'archaeological', icon: Search },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl md:text-5xl font-bold font-inter text-primary text-glow tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/50 to-obsidian pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 text-center group hover:border-primary/30 transition-all duration-500 hover:glow-sand"
              >
                <Icon className="w-6 h-6 text-primary/60 mx-auto mb-4 group-hover:text-primary transition-colors" />
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                <p className="mt-3 text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {t(`stats.${stat.key}`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}