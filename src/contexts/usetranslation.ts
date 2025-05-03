import { useContext } from 'react';
import { LanguageContext } from '@/contexts/languagecontext';
import type { TranslationKeys, Translations } from '@/contexts/types/types';
import fa from '@/app/locales/fa';
import en from '@/app/locales/en';
import { useLanguage } from '@/contexts/languagecontext';

const translations: Record<'fa' | 'en', Translations> = {
  fa,
  en,
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('Language is not provided');
  }

  const { language, changeLanguage } = useLanguage();

  const t = (key: TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return { t, language, changeLanguage };
};
