/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import * as hooks from '/hooks';
import { render, screen } from '/utils/test.utils';

import ProductPage from './product-page';

const stateSpy = jest.spyOn(hooks, 'useApi');

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

describe('List', () => {
  afterEach(() => {
    stateSpy.mockReset();
  });
  it('it renders a loading icon', async () => {
    stateSpy.mockReturnValue({
      loading: true,
      response: undefined,
      error: undefined,
    });
    render(<ProductPage />);
    expect(screen.getByTitle('loading')).toBeTruthy();
  });
  it('displays item', async () => {
    stateSpy.mockReturnValue({
      loading: false,
      response: DATA,
      error: undefined,
    });
    render(<ProductPage />);
    await screen.findByText(DATA.description);
    expect(stateSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByAltText('thumbnail')).toHaveAttribute('src', DATA.image);
  });
  it('displays add to cart ribbon', async () => {
    stateSpy.mockReturnValue({
      loading: false,
      response: DATA,
      error: undefined,
    });
    render(<ProductPage />);
    await screen.findByRole('button');
    expect(stateSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button')).toHaveTextContent('ADD TO CART');
  });
});
