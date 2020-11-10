import React, { useState, createContext, useContext } from 'react';

import Store from 'electron-store';

import initial_state from './initial_state';

interface SettingsContextData {
  data: SettingsType;
  updateSetting(key: string, value: any): void;
}

const SettingsContext = createContext<SettingsContextData>({} as SettingsContextData);

const SettingsProvider: React.FC = ({ children }) => {
  const store = new Store<SettingsType>({ defaults: initial_state });

  const [data, setData] = useState<SettingsType>({
    locale: store.get('locale'),
  });

  // Update an specific settings
  const updateSetting = (key: string, value: any): void => {
    setData((oldState: SettingsType) => {
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

const useSettings = (): SettingsContextData => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within an SettingsProvider');
  return context;
};

export { SettingsProvider, useSettings };
