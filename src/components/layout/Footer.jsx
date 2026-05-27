import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-border/30 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full border border-primary/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="font-inter font-semibold text-sm tracking-widest uppercase">
                KK<span className="text-primary">Monuments</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t('footer.madeWith')}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/monuments', label: t('nav.monuments') },
                { to: '/map', label: t('nav.map') },
                { to: '/news', label: t('nav.news') },
                { to: '/about', label: t('nav.about') },
              ].map(link => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary/60" />
                <span>ул. Сабыра Камалова, д. 30, кв. 26, Нукус</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary/60" />
                <a href="mailto:alpamy04@mail.ru" className="hover:text-primary transition-colors">
                  alpamy04@mail.ru
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary/60">📞</span>
                <a href="tel:+998936144744" className="hover:text-primary transition-colors">
                  +998 93 614 47 44
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 KKMonuments. {t('footer.rights')}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            42.4619° N, 59.6166° E
          </p>
        </div>

      </div>
    </footer>
  );
}