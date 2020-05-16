import React from 'react';

import Header from '/components/header';
import List from '/components/list';

const Item: React.FunctionComponent = () => {
  return (
    <>
      <Header title={'メルカリ'} />
      <List />
    </>
  );
};

export default Item;
