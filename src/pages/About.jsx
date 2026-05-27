import React from 'react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Globe, GraduationCap } from 'lucide-react';

const goals = [
  { icon: Target, titleKey: 'mission', descRu: 'Сохранение и популяризация культурного наследия Каракалпакстана через цифровые технологии', descEn: 'Preserving and promoting the cultural heritage of Karakalpakstan through digital technology' },
  { icon: Users, titleKey: 'team', descRu: 'Команда студентов-энтузиастов, посвятивших себя сохранению истории родного края', descEn: 'A team of enthusiastic students dedicated to preserving the history of their homeland' },
  { icon: BookOpen, titleKey: 'goals', descRu: 'Создание полной цифровой энциклопедии памятников и исторических объектов региона', descEn: 'Creating a comprehensive digital encyclopedia of monuments and historical sites of the region' },
  { icon: Globe, title: { ru: 'Цифровое наследие', en: 'Digital Heritage', uz: 'Raqamli meros', qq: 'Sanli mıras' }, descRu: 'Развитие цифровой инфраструктуры для туризма и образования', descEn: 'Developing digital infrastructure for tourism and education' },
  { icon: GraduationCap, title: { ru: 'Образование', en: 'Education', uz: 'Taʼlim', qq: 'Bilimlendiw' }, descRu: 'Образовательная направленность для студентов и исследователей', descEn: 'Educational focus for students and researchers' },
];

export default function About() {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">About</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('about.missionText')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
