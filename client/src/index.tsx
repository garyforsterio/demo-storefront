import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// i18 support
import '/services/i18n';
// Normalize css
import 'normalize.css';

import App from '/components/app';
import theme from '/theme';
/**
 * Fluid Typogrphy
 * Can be reconfigured to not use min, max if targeting older browsers
 * https://css-tricks.com/simplified-fluid-typography/
 */
const GlobalStyle = createGlobalStyle`
  html {
    font-size: min(max(16px, 4vw), 22px);
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
