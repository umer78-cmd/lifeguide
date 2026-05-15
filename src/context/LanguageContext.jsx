import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('site-lang') || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'DE' : 'EN');

  const t = (key) => {
    if (!translations[lang] || !translations[lang][key]) {
      // Fallback to English if key not found in German, or just return key if it's EN
      return translations['EN'][key] || key;
    }
    return translations[lang][key];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
