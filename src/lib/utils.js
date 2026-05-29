import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const isIframe = window.self !== window.top;

export const formatCentury = (century, lang) => {
  if (!century) return '';
  if (lang === 'ru') return century;

  let result = century;
  result = result.replace('до н.э.', { en: 'BC', uz: 'mil. avv.', qq: 'b.e.sh.' }[lang] || 'BC');
  result = result.replace('н.э.', { en: 'AD', uz: 'mil.', qq: 'b.e.' }[lang] || 'AD');
  return result;
};
export const getCentury = (c, lang) => {
  if (!c) return '';
  if (lang === 'ru') return c;
  if (lang === 'en') return c
    .replace(/веке до нашей эры/g, 'century BC')
    .replace(/веке нашей эры/g, 'century AD')
    .replace(/тысячелетии до нашей эры/g, 'millennium BC')
    .replace(/в\./g, 'c.')
    .replace(/н\.э\./g, 'AD')
    .replace(/до н\.э\./g, 'BC');
  if (lang === 'uz') return c
    .replace(/веке до нашей эры/g, '-asrda miloddan avval')
    .replace(/веке нашей эры/g, '-asrda miloddan keyin')
    .replace(/в\./g, '-asr')
    .replace(/до н\.э\./g, 'miloddan avval')
    .replace(/н\.э\./g, 'miloddan keyin');
  if (lang === 'qq') return c
    .replace(/веке до нашей эры/g, '-ásirde b.e.sh.')
    .replace(/веке нашей эры/g, '-ásirde b.e.')
    .replace(/в\./g, '-ásir')
    .replace(/до н\.э\./g, 'b.e.sh.')
    .replace(/н\.э\./g, 'b.e.');
  return c;
};