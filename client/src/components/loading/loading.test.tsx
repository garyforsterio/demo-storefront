import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import Loading from './';

describe('Loading', () => {
  it('display an icon', () => {
    render(<Loading />);
    expect(screen.getByTitle('loading')).toBeTruthy();
  });
  it('rotates', () => {
    render(<Loading />);
    expect(screen.getByTitle('loading').closest('svg')).toHaveStyle({
      animationName: 'spin',
    });
  });
});
