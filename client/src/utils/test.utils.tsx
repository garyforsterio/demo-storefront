import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '/theme';

const AllProviders: React.FunctionComponent = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};

const customRender = (ui, options?) =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
