import React from 'react';
import { render, screen } from '@testing-library/react';

import Thumbnail from './';

import '@testing-library/jest-dom/extend-expect';

const DUMMY_SRC = '/test.jpg';

describe('Thumbnail', () => {
  it('it renders an image', () => {
    render(<Thumbnail src={DUMMY_SRC} />);
    expect(screen.getByAltText('thumbnail')).toBeVisible();
  });
  it('displays a sold item', () => {
    render(<Thumbnail sold={true} src={DUMMY_SRC} />);
    expect(screen.getByText('SOLD')).toBeVisible();
  });
});
