import React, { createContext, useState, useContext } from 'react';
import { useLocation } from '@reach/router';

import allLocales from '../../i18n/locales';

const LocaleContext = createContext('');

const LocaleProvider = ({ children }) => {
  const { pathname } = useLocation();

  // Find a default language
  const defaultLang = Object.keys(allLocales)
    .filter(lang => allLocales[lang].default)[0];

  // Get language prefix from the URL
  const urlLang = pathname.split('/')[1];

  // Search if locale matches defined, if not set 'en' as default
  const currentLang = Object.keys(allLocales)
    .map(lang => allLocales[lang].path)
    .includes(urlLang)
    ? urlLang
    : defaultLang;

  const [locale, setLocale] = useState(currentLang);

  const changeLocale = lang => {
    if (lang) {
      setLocale(lang);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {throw new Error('useLocale must be used within an LocaleProvider');}

  return context;
};

export { LocaleProvider, useLocale };