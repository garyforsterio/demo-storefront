/**
 * Test utilities for components
 * Extends @testing-library/react to add context providers required for testing
 */

import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import '/services/i18n';

import theme from '/theme';

const AllProviders: React.FunctionComponent = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult => render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
