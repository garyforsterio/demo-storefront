import React from 'react';

import Header from '/components/header';
import List from '/components/list';

const Item: React.FunctionComponent = () => {
  return (
    <div>
      <Header title={'メルカリ'} />
      <List />
    </div>
  );
};

export default Item;
