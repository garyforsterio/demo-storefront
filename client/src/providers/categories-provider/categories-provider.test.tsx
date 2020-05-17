import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import * as hooks from '/hooks';
import { Category } from '/index.d';

import DataProvider, { useCategories } from './categories-provider';

const apiSpy = jest.spyOn(hooks, 'useApi');

const CATEGORIES: Category[] = [
  {
    name: 'Test',
    id: '2000',
  },
];

const basicWrapper: React.FunctionComponent = ({ children }) => {
  return <DataProvider>{children}</DataProvider>;
};

describe('Data Provider', () => {
  afterEach(() => {
    apiSpy.mockReset();
  });
  describe('categories', () => {
    it('should return undefined as default', async () => {
      apiSpy.mockReturnValue({
        loading: true,
        response: undefined,
        error: undefined,
      });
      const { result } = renderHook(() => useCategories(), {
        wrapper: basicWrapper,
      });
      expect(result.current.categories).toBeUndefined();
    });
    it('should return categories', async () => {
      apiSpy.mockReturnValue({
        loading: false,
        response: CATEGORIES,
        error: undefined,
      });
      const { result } = renderHook(() => useCategories(), {
        wrapper: basicWrapper,
      });
      expect(result.current.categories).toEqual(CATEGORIES);
    });
  });
});
