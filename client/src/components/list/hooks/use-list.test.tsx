/* eslint-disable @typescript-eslint/camelcase */
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useList } from '.';

const fetchMock = jest.spyOn(window, 'fetch');

export const DUMMY_DATA = [
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

describe('useComponentName', () => {
  describe('items', () => {
    it('should default to empty array', () => {
      const { result } = renderHook(() => useList());
      expect(result.current.items).toEqual([]);
    });
    it('should fetch items', () => {
      const { result } = renderHook(() => useList());
      act(() => {
        fetchMock.mockResolvedValueOnce(
          new Response(JSON.stringify({ data: DUMMY_DATA })),
        );
      });
      expect(result.current.items).toEqual(DUMMY_DATA);
    });
  });
});
