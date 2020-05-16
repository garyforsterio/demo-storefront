/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import AddToCart from '/components/add-to-cart';
import Header from '/components/header';
import Product from '/components/product';
import { useApi } from '/hooks';
import { Product as IProduct } from '/index.d';

import { ProductWrapper } from './product-page.styles';

const ITEMS_PATHNAME = '/items/';

const ProductPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const { response, error, loading } = useApi<IProduct>(ITEMS_PATHNAME + id);
  const handleAdd = useCallback(() => {
    window.alert(`Product with ID ${id} added to cart!`);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!response) {
    return <p>No item found</p>;
  }

  const {
    name,
    description,
    comment_count,
    like_count,
    price,
    image,
    shipping_fee,
  } = response;
  return (
    <>
      <Header title={name} />
      <ProductWrapper>
        <Product
          comments={comment_count}
          description={description}
          image={image}
          likes={like_count}
          name={name}
        />
      </ProductWrapper>
      <AddToCart onAdd={handleAdd} price={price} shipping={shipping_fee} />
    </>
  );
};

export default ProductPage;
