import * as React from 'react';

import {} from './list-item.styles';

type ListItemProps = {
  id: string;
  likes: number;
  name: string;
  price: number;
  src: string;
  sold?: boolean;
};

const ListItem: React.FunctionComponent<ListItemProps> = () => {
  return null;
};

export default ListItem;
