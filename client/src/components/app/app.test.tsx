import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import App from './app';

describe('App', () => {
  it('it renders', () => {
    const { container } = render(<App />);
    expect(container).toBeVisible();
  });
});
