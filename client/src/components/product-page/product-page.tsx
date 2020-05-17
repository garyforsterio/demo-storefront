import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Error from '/components/error';
import Header from '/components/header';
import Loading from '/components/loading';
import Product from '/components/product';
import { useApi } from '/hooks';
import { Product as IProduct } from '/index.d';

const ITEMS_PATHNAME = '/items/';

/**
 * Page for viewing information about specific product
 */
const ProductPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const { response, error, loading } = useApi<IProduct>(ITEMS_PATHNAME + id);
  const handleAdd = useCallback(() => {
    window.alert(`Product with ID ${id} added to cart!`);
  }, [id]);

  return (
    <>
      <Header title={response ? response.name : 'メルカリ'} />
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      {response && <Product data={response} onAddToCart={handleAdd} />}
    </>
  );
};

export default ProductPage;
