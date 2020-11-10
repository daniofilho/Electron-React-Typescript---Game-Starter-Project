//import logo from '@static/logo.png';
import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';

import WindowFrame from '~/components/WindowFrame';

import Routes from '~/routes';

interface AppProps {
  title?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0 };

  render(): JSX.Element {
    return (
      <HashRouter>
        <WindowFrame>
          <Routes />
        </WindowFrame>

        <GlobalStyle />
      </HashRouter>
    );
  }
}

export default hot(module)(App);
