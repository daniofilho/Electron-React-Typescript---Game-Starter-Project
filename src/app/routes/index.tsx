import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppProvider from '~/hooks';

import SplashScreen from '~/pages/SplashScreen';
import MainMenu from '~/pages/MainMenu';
import Settings from '~/pages/Settings';
import Game from '~/pages/Game';

const Router: React.FC = () => (
  <AppProvider>
    <Switch>
      <Route path="/" exact component={SplashScreen} />
      <Route path="/main-menu" component={MainMenu} />
      <Route path="/settings" component={Settings} />
      <Route path="/game" component={Game} />
    </Switch>
  </AppProvider>
);

export default Router;
