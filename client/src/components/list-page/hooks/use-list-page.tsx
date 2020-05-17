import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useApi } from '/hooks';
import { Product } from '/index.d';

const ITEM_PATHNAME = '/items';

type ListPageRouteParams = {
  id?: string;
};

type useListPageReturn = {
  items: Product[] | undefined;
  loading: boolean;
  error: Error | undefined;
};

const useListPage = (): useListPageReturn => {
  const [items, setItems] = useState<Product[]>();
  const { response, error, loading } = useApi<Product[]>(ITEM_PATHNAME);
  const { id: categoryId } = useParams<ListPageRouteParams>();
  useEffect(() => {
    const filterProducts = (): void => {
      if (!response) {
        return;
      }
      if (categoryId && !isNaN(+categoryId)) {
        setItems(
          response.filter((product) => product.category_id === +categoryId),
        );
        return;
      }
      setItems(response);
    };
    filterProducts();
  }, [response, categoryId]);

  return {
    items,
    error,
    loading,
  };
};

export default useListPage;
