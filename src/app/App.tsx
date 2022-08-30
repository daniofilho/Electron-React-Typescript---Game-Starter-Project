import React from 'react';
//import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from '~/hooks';
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
  render(): JSX.Element {
    return (
      <Router>
        <AppProvider>
          <WindowFrame>
            <Routes />
          </WindowFrame>
        </AppProvider>

        <GlobalStyle />
      </Router>
    );
  }
}

//export default hot(module)(App);
export default App;
