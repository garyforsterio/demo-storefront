import React from 'react';
import { Heart } from '@styled-icons/boxicons-regular/Heart';

import IconIndicator from '/components/icon-indicator';
import Thumbnail from '/components/thumbnail';
import config from '/config';

import {
  BottomBar,
  Container,
  Info,
  Name,
  Price,
  StyledLink,
} from './list-item.styles';

type ListItemProps = {
  id: string;
  likes: number;
  name: string;
  price: number;
  image: string;
  sold?: boolean;
};

/**
 * Used to give a brief overview of product and link to product page
 */
const ListItem: React.FunctionComponent<ListItemProps> = ({
  id,
  likes,
  name,
  price,
  image,
  sold,
}) => {
  return (
    <StyledLink to={'/items/' + id}>
      <Container>
        <Thumbnail sold={sold} src={image} />
        <Info>
          <Name>{name}</Name>
          <BottomBar>
            <Price>
              {config.currency}
              {price}
            </Price>
            <IconIndicator icon={Heart} title="likes" value={likes} />
          </BottomBar>
        </Info>
      </Container>
    </StyledLink>
  );
};

export default ListItem;
