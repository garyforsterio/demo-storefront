import React from 'react';

import { render, screen } from '/utils/test.utils';

import Loading from './';

describe('Loading', () => {
  it('display an icon', () => {
    render(<Loading />);
    expect(screen.getByTitle('loading')).toBeTruthy();
  });
  it('rotates', () => {
    render(<Loading />);
    expect(screen.getByTitle('loading')).toHaveStyle({ animationName: 'spin' });
  });
});
