import React from 'react';

import { SettingsProvider } from './useSettings';
import { I18NProvider } from '~/i18n';

interface IAppProviderProps {
  children: React.ReactNode;
}
const AppProvider: React.FC<IAppProviderProps> = ({ children }) => (
  <SettingsProvider>
    <I18NProvider>{children}</I18NProvider>
  </SettingsProvider>
);

export default AppProvider;
