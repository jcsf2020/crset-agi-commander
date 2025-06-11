import React, { createContext, useContext, useState, ReactNode } from 'react';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

type Language = 'pt' | 'en' | 'fr';

const resources: Record<Language, any> = {
  pt,
  en,
  fr
};

type LanguageContextType = {
  locale: Language;
  setLocale: (locale: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'pt',
  setLocale: () => {},
  t: (k) => k
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Language>('pt');

  const t = (key: string): string => {
    const parts = key.split('.');
    let result: any = resources[locale];
    for (const p of parts) {
      result = result?.[p];
      if (result == null) return key;
    }
    return String(result);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
