import colors from '~/styles/common/colors';

import { lighten } from 'polished';

import { ITheme } from './types';

const defaultStyle = {
  background: colors.gray,
  front: colors.black,
  border: colors.grayLight,
};

const blue = {
  background: colors.blue,
  front: '#FFF',
  border: lighten(0.2, colors.blue),
};

// - - - - - - -

export const getTheme = (key: string): ITheme => {
  switch (key) {
    default:
    case 'default':
      return defaultStyle;
    case 'blue':
      return blue;
  }
};
