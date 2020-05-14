import React from 'react';
import { render } from '@testing-library/react';

import App from './app';

import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('it renders', () => {
    const { container } = render(<App />);
    expect(container).toBeVisible();
  });
});
