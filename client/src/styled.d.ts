import 'styled-components';

/**
 * Extend styled-components typings to type check theme
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      textPrimary: string;
      textSecondary: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      iconBackground: string;
      iconColor: string;
    };
  }
}
