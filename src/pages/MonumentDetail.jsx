import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { monuments, categories } from '@/lib/monumentsData';
import { getMonumentImage, getMonumentGallery } from '@/lib/images';
import MonumentCard from '@/components/shared/MonumentCard';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Navigation, Compass, Info, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const descriptions = {
  ru: (name) => `${name} — один из замечательных памятников Каракалпакстана, представляющий богатое историческое наследие древней хорезмийской цивилизации. Расположенный в сердце региона, этот объект стал свидетелем многовековой истории и культурной эволюции.`,
  en: (name) => `${name} is one of the remarkable monuments of Karakalpakstan, representing the rich historical heritage of the ancient Khorezm civilization. Located in the heart of the region, this site has witnessed centuries of human history and cultural evolution.`,
  uz: (name) => `${name} — Qoraqalpogʻistonning ajoyib yodgorliklaridan biri boʻlib, qadimiy Xorazm sivilizatsiyasining boy tarixiy merosini ifodalaydi. Mintaqa markazida joylashgan bu joy asrlar davomida insoniyat tarixi va madaniy evolyutsiyasiga guvoh boʻlgan.`,
  qq: (name) => `${name} — Qaraqalpaqstannıń ajayıp yadgorliklerinen biri bolıp, gadimgi Xorezm sivilizatsiyasınıń bay tariyxıy mırasın kórsetedi. Aymaqtıń oraylıq bóliminde ornalasqan bul jer ásirler dawamında adamzat tariyxı hám mádeniyet evolyutsiyasına guwа boldı.`,
};

const histories = {
  ru: (century) => `Датируемый ${century}, этот памятник сыграл значительную роль в развитии Хорезмского региона. Археологические раскопки обнаружили слои истории нескольких цивилизаций — от ранних поселений до средневекового периода.`,
  en: (century) => `Dating back to the ${century}, this monument has played a significant role in the development of the Khorezm region. Archaeological excavations have revealed layers of history spanning multiple civilizations, from the earliest settlements to the medieval period.`,
  uz: (century) => `${century} ga oid bu yodgorlik Xorazm mintaqasining rivojlanishida muhim rol oʻynagan. Arxeologik qazishmalar dastlabki manzilgohlardan oʻrta asr davrigacha bir nechta sivilizatsiyalarni qamrab olgan tarix qatlamlarini ochib berdi.`,
  qq: (century) => `${century} ge tiyisli bul yadgorlik Xorezm aymaqınıń rawajlanıwında áhmiyetli rol oynadı. Arxeologiyalıq qazıw isleri dáslepki mekenlestiriwlerden orta ásir dáwirine shekem bir neshe sivilizatsiyalardı qamlap alǵan tariyx qatlamların ashıp berdı.`,
};

// Century labels per language
const centuryLabels = {
  en: (c) => {
    if (!c) return 'ancient times';
    return c
      .replace(/веке до нашей эры/g, 'century BC')
      .replace(/веке нашей эры/g, 'century AD')
      .replace(/тысячелетии до нашей эры/g, 'millennium BC')
      .replace(/в\./g, 'c.')
      .replace(/н\.э\./g, 'AD')
      .replace(/до н\.э\./g, 'BC');
  },
  uz: (c) => {
    if (!c) return 'qadim zamonlar';
    return c
      .replace(/веке до нашей эры/g, '-asrda miloddan avval')
      .replace(/веке нашей эры/g, '-asrda miloddan keyin')
      .replace(/тысячелетии до нашей эры/g, '-ming yillikda miloddan avval')
      .replace(/в\./g, '-asr')
      .replace(/н\.э\./g, 'miloddan keyin')
      .replace(/до н\.э\./g, 'miloddan avval');
  },
  qq: (c) => {
    if (!c) return 'gadim zamanlar';
    return c
      .replace(/веке до нашей эры/g, '-ásirde biziń eramızdan burın')
      .replace(/веке нашей эры/g, '-ásirde biziń eramızda')
      .replace(/тысячелетии до нашей эры/g, '-mıń jıllıqta biziń eramızdan burın')
      .replace(/в\./g, '-ásir')
      .replace(/н\.э\./g, 'b.e.')
      .replace(/до н\.э\./g, 'b.e.sh.');
  },
  ru: (c) => c || 'древних времён',
};

export default function MonumentDetail() {
  const { id } = useParams();
  const { t, lang } = useI18n();
  const monument = monuments.find(m => m.id === id);

  if (!monument) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Monument not found</p>
          <Link to="/monuments" className="text-primary hover:underline">{t('common.back')}</Link>
        </div>
      </div>
    );
  }

  const cat = categories.find(c => c.id === monument.category);
  const similar = monuments
    .filter(m => m.category === monument.category && m.id !== monument.id)
    .slice(0, 3);

  const name = monument.name[lang] || monument.name.en;

  // Get century label in current language
  const rawCentury = monument.century || '';
  const getLabelFn = centuryLabels[lang] || centuryLabels.en;
  const centuryDisplay = getLabelFn(rawCentury);

  // Get facts from monument data, fallback to empty array
  const monumentFacts = monument.facts?.[lang] || monument.facts?.en || [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[400px]">
        <img
          src={getMonumentImage(monument.id)}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 z-10">
          <Link to="/monuments" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t('nav.monuments')}
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs tracking-widest text-primary uppercase">{cat?.[lang] || cat?.en}</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-glow">{name}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Info className="w-5 h-5 text-primary" />
                {t('monument.description')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {(descriptions[lang] || descriptions.en)(name)}
              </p>
            </motion.section>

            {/* History */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                {t('monument.history')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {(histories[lang] || histories.en)(centuryDisplay)}
              </p>
            </motion.section>

            {/* Interesting Facts */}
            {monumentFacts.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Compass className="w-5 h-5 text-primary" />
                  {t('monument.interestingFacts')}
                </h2>
                <div className="space-y-3">
                  {monumentFacts.map((fact, i) => (
                    <div key={i} className="glass rounded-lg p-4 text-sm text-muted-foreground">
                      <span className="text-primary font-mono mr-2">0{i + 1}</span>
                      {fact}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Gallery */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-lg font-semibold mb-4">{t('monument.gallery')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {getMonumentGallery(monument.id).map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square">
                    <img src={src} alt={`${name} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 sticky top-28"
          >
            {/* Info card */}
            <div className="glass rounded-xl p-6 space-y-5">
              <h3 className="font-mono text-xs tracking-widest uppercase text-primary">Data</h3>

              <div className="space-y-4">
                {monument.century && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-primary/60 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t('monument.founded')}</p>
                      <p className="text-sm font-medium font-mono">{centuryDisplay}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary/60 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t('monument.location')}</p>
                    <p className="text-sm font-medium">Karakalpakstan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-primary/60 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">GPS</p>
                    <p className="text-sm font-mono">{monument.coords[0].toFixed(4)}°N, {monument.coords[1].toFixed(4)}°E</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${monument.coords[0]},${monument.coords[1]}`, '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                {t('monument.buildRoute')}
              </Button>

              <Link to="/map" className="block text-center text-xs text-primary hover:underline">
                {t('sections.interactiveMap')}
              </Link>
            </div>

            {/* Similar */}
            {similar.length > 0 && (
              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-primary mb-4">
                  {t('monument.similarMonuments')}
                </h3>
                <div className="space-y-3">
                  {similar.map(m => (
                    <Link key={m.id} to={`/monuments/${m.id}`} className="flex items-center gap-3 glass rounded-lg p-3 group hover:border-primary/30 transition-all">
                      <img src={getMonumentImage(m.id)} alt={m.name[lang]} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">{m.name[lang] || m.name.en}</p>
                        <p className="text-xs text-muted-foreground font-mono">{getLabelFn(m.century)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  );
}