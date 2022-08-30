export type AvailableLanguagesTypes = 'pt_br' | 'en';

export interface I18NStrings {
  common: {
    play: string;
    back: string;
    settings: string;
    quit: string;
  };
  settings: {
    language: string;
  };
}

export interface I18NProviderProps {
  children: React.ReactNode;
}
export interface I18NContextProps {
  t: I18NStrings;
  changeLocale(locale: availableLanguagesTypes): void;
}
