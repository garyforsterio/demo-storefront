import React from 'react';

import Error from '/components/error';
import Header from '/components/header';
import ListItem from '/components/list-item';
import Loading from '/components/loading';
import { useApi } from '/hooks';
import { Product } from '/index.d';

import { Container } from './list-page.styles';

const ITEM_PATHNAME = '/items';

const ListPage: React.FunctionComponent = () => {
  const { response, error, loading } = useApi<Product[]>(ITEM_PATHNAME);
  return (
    <>
      <Header />
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      {response && (
        <Container>
          {response.map(
            ({ id, name, like_count, price, is_sold_out, image }) => {
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
            },
          )}
        </Container>
      )}
    </>
  );
};

export default ListPage;
