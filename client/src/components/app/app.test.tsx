import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render } from '/utils/test.utils';

import App from './app';

describe('App', () => {
  it('it renders', () => {
    const { container } = render(<App />);
    expect(container).toBeVisible();
  });
});
