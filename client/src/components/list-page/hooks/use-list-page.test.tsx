import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';

import * as hooks from '/hooks';

import { useListPage } from '.';

const apiSpy = jest.spyOn(hooks, 'useApi');

const RESPONSE = [
  {
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
    category_id: 1,
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

const ERROR = new Error('Test error');

const basicWrapper: React.FunctionComponent = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const routedWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <MemoryRouter initialEntries={['categories/1']}>
      <Route path="categories/:id">{children}</Route>
    </MemoryRouter>
  );
};

describe('useListPage', () => {
  afterEach(() => {
    apiSpy.mockReset();
  });
  describe('loading', () => {
    it('should return loading as true when awaiting request', async () => {
      apiSpy.mockReturnValue({
        loading: true,
        response: undefined,
        error: undefined,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: basicWrapper,
      });
      expect(result.current.loading).toBe(true);
    });
    it('should return loading as false when api request completed', async () => {
      apiSpy.mockReturnValue({
        loading: false,
        response: RESPONSE,
        error: undefined,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: basicWrapper,
      });
      expect(result.current.loading).toBe(false);
    });
  });
  describe('error', () => {
    it('should return error', async () => {
      apiSpy.mockReturnValue({
        loading: false,
        response: undefined,
        error: ERROR,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: basicWrapper,
      });
      expect(result.current.error).toEqual(ERROR);
    });
    it('should return no error when api request completed', async () => {
      apiSpy.mockReturnValue({
        loading: false,
        response: RESPONSE,
        error: undefined,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: basicWrapper,
      });
      expect(result.current.error).toBeUndefined();
    });
  });
  describe('items', () => {
    it('should return undefined as default', async () => {
      apiSpy.mockReturnValue({
        loading: true,
        response: undefined,
        error: undefined,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: basicWrapper,
      });
      expect(result.current.items).toBeUndefined();
    });
    it('should return unfiltered items from response', async () => {
      apiSpy.mockReturnValue({
        loading: false,
        response: RESPONSE,
        error: undefined,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: basicWrapper,
      });
      expect(result.current.items).toEqual(RESPONSE);
    });
    it('should return filtered items from response depending on category ID', async () => {
      apiSpy.mockReturnValue({
        loading: false,
        response: RESPONSE,
        error: undefined,
      });
      const { result } = renderHook(() => useListPage(), {
        wrapper: routedWrapper,
      });
      expect(result.current.items).toHaveLength(1);
    });
  });
});
