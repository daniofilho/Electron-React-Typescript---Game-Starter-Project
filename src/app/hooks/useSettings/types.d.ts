export interface ISettingsProps {
  locale: availableLanguagesTypes;
}

export interface ISettingsProviderProps {
  children: React.ReactNode;
}

export interface ISettingsContextProps {
  data: SettingsType;
  updateSetting(key: string, value: any): void;
}
