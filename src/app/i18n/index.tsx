import React, { useState, createContext, useContext, useEffect } from 'react';

import { getLocale } from './init';

import { useSettings } from '~/hooks/useSettings';

import { AvailableLanguagesTypes, I18NProviderProps, I18NContextProps, I18NStrings } from './types';

const I18NContext = createContext<I18NContextProps>({} as I18NContextProps);

const I18NProvider: React.FC<I18NProviderProps> = ({ children }) => {
  const {
    data: { locale },
  } = useSettings();

  const [t, setT] = useState<I18NStrings>(getLocale(locale));

  // # Change a language
  const changeLocale = (newLocale: AvailableLanguagesTypes): void => {
    setT(getLocale(newLocale));
  };

  // # Check if language has changed and change the Strings
  useEffect(() => {
    changeLocale(locale);
  }, [locale]);

  return <I18NContext.Provider value={{ t, changeLocale }}>{children}</I18NContext.Provider>;
};

const useI18N = (): I18NContextProps => {
  const context = useContext(I18NContext);
  if (!context) throw new Error('useI18N must be used within an I18NProvider');
  return context;
};

export { I18NProvider, useI18N };
