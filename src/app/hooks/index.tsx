import React from 'react';

import { SettingsProvider } from './useSettings';
import { I18NProvider } from '~/i18n';

const AppProvider: React.FC = ({ children }) => (
  <SettingsProvider>
    <I18NProvider>{children}</I18NProvider>
  </SettingsProvider>
);

export default AppProvider;
