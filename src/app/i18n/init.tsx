import pt_br from './locales/pt_br';
import en from './locales/en';
import { AvailableLanguagesTypes, I18NStrings } from './types';

const DEFAULT_LOCALE = 'pt_br';
const DEFAULT_STRINGS = pt_br;

const avaiableLocales = ['pt_br', 'en'];

const getLocale = (locale: AvailableLanguagesTypes): I18NStrings => {
  switch (locale) {
    case 'pt_br':
      return pt_br;
    case 'en':
      return en;
    default:
      return DEFAULT_STRINGS;
  }
};

export { DEFAULT_LOCALE, DEFAULT_STRINGS, avaiableLocales, getLocale };
