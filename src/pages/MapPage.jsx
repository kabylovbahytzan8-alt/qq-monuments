import React, { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n';
import { monuments, categories } from '@/lib/monumentsData';
import { getMonumentImage } from '@/lib/images';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapPage() {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return monuments;
    return monuments.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-20">
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto mb-6"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Cartography</p>
          <h1 className="text-3xl md:text-4xl font-bold">{t('sections.interactiveMap')}</h1>
        </motion.div>

        {/* Filter pills */}
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === 'all' ? 'bg-primary text-primary-foreground' : 'glass hover:border-primary/30'
            }`}
          >
            <Layers className="w-3 h-3" />
            {t('monument.allCategories')} ({monuments.length})
          </button>
          {categories.map(cat => {
            const count = monuments.filter(m => m.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'glass hover:border-primary/30'
                }`}
              >
                {cat[lang] || cat.en} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div className="h-[calc(100vh-240px)] min-h-[500px] relative">
        <MapContainer
          center={[42.5, 59.5]}
          zoom={7}
          className="h-full w-full z-0"
          style={{ background: '#0A0B0D' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {filtered.map(m => (
            <Marker key={m.id} position={m.coords} icon={goldIcon}>
              <Popup className="custom-popup">
                <div className="min-w-[200px]">
                  <img src={getMonumentImage(m.id)} alt={m.name[lang]} className="w-full h-24 object-cover rounded-md mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{m.name[lang] || m.name.en}</h3>
                  <p className="text-xs text-gray-500 mb-2">{m.century}</p>
                  <Link to={`/monuments/${m.id}`} className="text-xs text-blue-600 flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}