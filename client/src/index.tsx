import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// i18 support
import '/services/i18n';
// Normalize css
import 'normalize.css';

import App from '/components/app';
import CategoriesProvider from '/providers/categories-provider';
/**
 * Default theme
 * Can be easily overwritten for custom theming
 */
import theme from '/theme';

/**
 * Uses Fluid Typogrphy
 * Can be reconfigured to not use min, max if targeting older browsers
 * https://css-tricks.com/simplified-fluid-typography/
 */
const GlobalStyle = createGlobalStyle`
  html {
    font-size: min(max(16px, 4vw), 20px);
    box-sizing: border-box;
    font-family: sans-serif;
    background: ${(props): string => props.theme.colors.backgroundSecondary}
  }
`;

ReactDOM.render(
  <CategoriesProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </CategoriesProvider>,
  document.getElementById('root'),
);
