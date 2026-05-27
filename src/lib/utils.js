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