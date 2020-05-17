import React from 'react';
import { useTranslation } from 'react-i18next';

import Error from '/components/error';
import Header from '/components/header';
import ListItem from '/components/list-item';
import Loading from '/components/loading';

import { useListPage } from './hooks';
import { Container } from './list-page.styles';

/**
 * Page displaying a listing of products which can be filtered using route params
 */
const ListPage: React.FunctionComponent = () => {
  const { loading, error, items } = useListPage();
  const { t } = useTranslation();
  return (
    <>
      <Header />
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      {items && (
        <>
          {!items.length && <Error message={t('listPage.emptyList')} />}
          <Container>
            {items.map(
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
        </>
      )}
    </>
  );
};

export default ListPage;
