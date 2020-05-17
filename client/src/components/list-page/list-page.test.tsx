/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import * as hooks from '/hooks';
import { render, screen } from '/utils/test.utils';

import ListPage from './list-page';

const stateSpy = jest.spyOn(hooks, 'useApi');

const DUMMY_DATA = [
  {
    id: '1',
    name: 'Light pink shoes',
    description:
      'Pre-owned, in good condition with signs of wear, may just need to be cleaned or washed.  Please see photos for style & condition.',
    like_count: 91,
    comment_count: 59,
    price: 51,
    is_sold_out: false,
    shipping_fee: '送料込み',
    image: 'http://localhost:5000/images/image_1.png',
    category_id: 2,
  },
  {
    id: '2',
    name: 'Vegan leather bag',
    description:
      'Black tote in excellent condition.\n\nFabric:Vegan leather\n Measurement: 17"L 0.5" W 11.75"H\n Handles about 8.5',
    like_count: 0,
    comment_count: 0,
    price: 10000,
    is_sold_out: true,
    shipping_fee: '送料込み',
    image: 'http://localhost:5000/images/image_2.png',
    category_id: 2,
  },
];

describe('List Page', () => {
  afterEach(() => {
    stateSpy.mockReset();
  });
  it('it renders a loading icon', async () => {
    stateSpy.mockReturnValue({
      loading: true,
      response: undefined,
      error: undefined,
    });
    render(<ListPage />);
    expect(screen.getByTitle('loading')).toBeTruthy();
  });
  it('displays items', async () => {
    stateSpy.mockReturnValue({
      loading: false,
      response: DUMMY_DATA,
      error: undefined,
    });
    render(<ListPage />);
    await screen.findByText('Light pink shoes');
    expect(stateSpy).toHaveBeenCalledTimes(1);
    expect(screen.getAllByAltText('thumbnail')).toHaveLength(2);
    expect(screen.getAllByTitle('likes')).toHaveLength(2);
  });
});
