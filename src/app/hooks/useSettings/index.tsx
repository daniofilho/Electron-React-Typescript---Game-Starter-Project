import React, { useState, createContext, useContext } from 'react';

import Store from 'electron-store';

import initial_state from './initial_state';

import { ISettingsContextProps, ISettingsProps, ISettingsProviderProps } from './types';

const SettingsContext = createContext<ISettingsContextProps>({} as ISettingsContextProps);

const SettingsProvider: React.FC<ISettingsProviderProps> = ({ children }) => {
  const store = new Store<ISettingsProps>({ defaults: initial_state });

  const [data, setData] = useState<ISettingsProps>({
    locale: store.get('locale'),
  });

  // Update an specific settings
  const updateSetting = (key: string, value: any): void => {
    setData((oldState: ISettingsProps) => {
      return {
        ...oldState,
        [key]: value,
      };
    });
    store.set(key, value);
  };

  return (
    <SettingsContext.Provider value={{ data, updateSetting }}>{children}</SettingsContext.Provider>
  );
};

const useSettings = (): ISettingsContextProps => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within an SettingsProvider');
  return context;
};

export { SettingsProvider, useSettings };
