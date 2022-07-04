import { DefaultTheme } from 'styled-components';
import base from './base';
import colors from './colors';
import shadows from './shadows';

const theme: DefaultTheme = {
  ...base,
  colors,
  shadows,
};

export default theme;
