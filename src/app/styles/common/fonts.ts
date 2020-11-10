import { css } from 'styled-components';

import fontEOT from '@static/fonts/press-start-2p-v9-latin-regular.eot';
import fontWOFF from '@static/fonts/press-start-2p-v9-latin-regular.woff';
import fontWOFF2 from '@static/fonts/press-start-2p-v9-latin-regular.woff2';
import fontTTF from '@static/fonts/press-start-2p-v9-latin-regular.ttf';
import fontSVG from '@static/fonts/press-start-2p-v9-latin-regular.svg';

export default css`
  /* press-start-2p-regular - latin */
  @font-face {
    font-family: 'Press Start 2P';
    font-style: normal;
    font-weight: 400;
    src: url('${fontEOT}');
    src: local('Press Start 2P Regular'), local('PressStart2P-Regular'),
      url('${fontEOT}?#iefix') format('embedded-opentype'), url('${fontWOFF2}') format('woff2'),
      url('${fontWOFF}') format('woff'), url('${fontTTF}') format('truetype'),
      url('${fontSVG}#PressStart2P') format('svg');
  }
`;
