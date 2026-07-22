// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('ase_lang');
    return saved || 'en';
  });

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    localStorage.setItem('ase_lang', lang);
    // ❌ REMOVED: document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // Only set the lang attribute (optional)
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key, params = {}) => {
    let text = translations[lang]?.[key] || translations['en'][key] || key;
    Object.keys(params).forEach((k) => {
      text = text.replace(`{${k}}`, params[k]);
    });
    return text;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
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