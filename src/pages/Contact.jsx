import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Send, Phone, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setSent(true);
    toast.success('Message sent successfully!');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">Reach Out</p>
          <h1 className="text-3xl md:text-5xl font-bold">{t('contact.title')}</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {sent ? (
              <div className="glass rounded-xl p-10 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We'll get back to you soon.</p>
                <Button variant="outline" className="mt-6" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-1.5 block">{t('contact.name')}</label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="bg-muted/30 border-border/50 focus:border-primary/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-1.5 block">{t('contact.email')}</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="bg-muted/30 border-border/50 focus:border-primary/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-1.5 block">{t('contact.message')}</label>
                  <Textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="bg-muted/30 border-border/50 focus:border-primary/50 min-h-[120px]"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t('contact.send')}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">ул. Сабыра Камалова, д. 30, кв. 26, Нукус</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">42.4619° N, 59.6166° E</p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">alpamy04@mail.ru</p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+998 93 614 47 44</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}