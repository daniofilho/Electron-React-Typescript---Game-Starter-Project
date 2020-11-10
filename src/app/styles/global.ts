import { createGlobalStyle } from 'styled-components';

import fonts from './common/fonts';

export default createGlobalStyle`
  ${fonts}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Press Start 2P';
  }
 
  html, body, #app {
    width: 100%;
    height: 100%;
    
  }

  #app {
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }

  a,
  a:hover {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }


`;
