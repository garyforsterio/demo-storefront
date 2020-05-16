/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react';

import ListItem from '/components/list-item';
import { useApi } from '/hooks';
import { Product } from '/index.d';

import { Container } from './list.styles';

const ITEM_PATHNAME = '/items';

const List: React.FunctionComponent = () => {
  const { response, error, loading } = useApi<Product[]>(ITEM_PATHNAME);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!response || !response.length) {
    return <p>No items found</p>;
  }
  return (
    <Container>
      {response.map(({ id, name, like_count, price, is_sold_out, image }) => {
        return (
          <ListItem
            id={id}
            image={image}
            key={id}
            likes={like_count}
            name={name}
            price={price}
            sold={is_sold_out}
          />
        );
      })}
    </Container>
  );
};

export default List;
