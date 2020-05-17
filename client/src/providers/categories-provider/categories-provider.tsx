import React, { createContext, useContext } from 'react';

import { useApi } from '/hooks';
import { Category } from '/index.d';

type CategoriesContextType = {
  categories: Category[] | undefined;
};

const CATEGORIES_API_PATH = '/categories';
export const CategoryContext = createContext({} as CategoriesContextType);

export const useCategories = (): CategoriesContextType =>
  useContext(CategoryContext);

/**
 * Provides categories to be used across application
 * It is assumed these do not change frequently so can be cached over the duration of a session
 */
const CategoriesContextProvider: React.FunctionComponent = ({ children }) => {
  const { response, error } = useApi<Category[]>(CATEGORIES_API_PATH);
  if (error) {
    // TODO: better handle error
    console.log('Could not fetch categories', error);
  }

  const value: CategoriesContextType = {
    categories: response,
  };
  return (
    <CategoryContext.Provider value={value}>
      {' '}
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoriesContextProvider;
