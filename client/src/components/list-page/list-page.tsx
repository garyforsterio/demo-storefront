import React from 'react';

import Error from '/components/error';
import Header from '/components/header';
import ListItem from '/components/list-item';
import Loading from '/components/loading';

import { useListPage } from './hooks';
import { Container } from './list-page.styles';

const ListPage: React.FunctionComponent = () => {
  const { loading, error, items } = useListPage();
  return (
    <>
      <Header />
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      {items && (
        <Container>
          {items.map(({ id, name, like_count, price, is_sold_out, image }) => {
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
      )}
    </>
  );
};

export default ListPage;
