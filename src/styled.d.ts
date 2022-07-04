import 'styled-components';
import { Colors, MediaQueries, Shadows } from './styles/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    mediaQueries: MediaQueries;
    shadows: Shadows;
  }
}
