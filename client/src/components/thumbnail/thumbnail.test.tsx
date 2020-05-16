import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import Thumbnail from './';

const DUMMY_SRC = '/test.jpg';

describe('Thumbnail', () => {
  it('it renders an image', () => {
    render(<Thumbnail sold={false} src={DUMMY_SRC} />);
    expect(screen.getByAltText('thumbnail')).toHaveAttribute('src', DUMMY_SRC);
  });

  it('displays a sold item', async () => {
    render(<Thumbnail sold={true} src={DUMMY_SRC} />);
    expect(screen.getByTitle('SOLD')).toBeTruthy();
  });

  it('does not display sold when still available', () => {
    render(<Thumbnail sold={false} src={DUMMY_SRC} />);
    expect(screen.queryByTitle('SOLD')).toBeNull();
  });
});
