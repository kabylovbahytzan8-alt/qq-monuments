import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { getMonumentImage } from '@/lib/images';
import { categories } from '@/lib/monumentsData';
import { MapPin } from 'lucide-react';

export default function MonumentCard({ monument }) {
  const { lang } = useI18n();
  const cat = categories.find(c => c.id === monument.category);

  return (
    <Link
      to={`/monuments/${monument.id}`}
      className="group block glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={getMonumentImage(monument.id)}
          alt={monument.name[lang] || monument.name.en}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
        {monument.wonder && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-mono uppercase tracking-wider border border-primary/30">
            Wonder
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base group-hover:text-primary transition-colors mb-1">
          {monument.name[lang] || monument.name.en}
        </h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-mono">{monument.century}</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {cat?.[lang] || cat?.en}
          </span>
        </div>
      </div>
    </Link>
  );
}