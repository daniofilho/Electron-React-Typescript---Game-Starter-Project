import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SplashScreen from '~/pages/SplashScreen';
import MainMenu from '~/pages/MainMenu';
import Settings from '~/pages/Settings';
import Game from '~/pages/Game';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<SplashScreen />} />
    <Route path="/main_window" element={<SplashScreen />} />

    <Route path="/main-menu" element={<MainMenu />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/game" element={<Game />} />
  </Routes>
);

export default Router;
