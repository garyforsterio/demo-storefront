import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import Product from './';

const DATA = {
  id: '1',
  name: 'Light pink shoes',
  description:
    'Pre-owned, in good condition with signs of wear, may just need to be cleaned or washed. Please see photos for style & condition.',
  like_count: 91,
  comment_count: 59,
  price: 51,
  is_sold_out: false,
  shipping_fee: '送料込み',
  image: 'http://localhost:5000/images/image_1.png',
  category_id: 2,
};

describe('Product', () => {
  const handleAddToCart = jest.fn();
  it('it renders a thumbnail', () => {
    render(<Product data={DATA} onAddToCart={handleAddToCart} />);
    expect(screen.getByAltText('thumbnail')).toHaveAttribute('src', DATA.image);
  });

  it('displays the name', () => {
    render(<Product data={DATA} onAddToCart={handleAddToCart} />);
    expect(screen.getByText(DATA.name)).toBeTruthy();
  });

  it('displays a description', () => {
    render(<Product data={DATA} onAddToCart={handleAddToCart} />);
    expect(screen.getByText(DATA.description)).toBeTruthy();
  });

  it('displays the number of likes', () => {
    render(<Product data={DATA} onAddToCart={handleAddToCart} />);
    expect(screen.getByText(DATA.like_count.toString())).toBeVisible();
  });

  it('displays the number of comments', () => {
    render(<Product data={DATA} onAddToCart={handleAddToCart} />);
    expect(screen.getByText(DATA.comment_count.toString())).toBeVisible();
  });
});
