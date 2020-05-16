import React from 'react';
import { Comment } from '@styled-icons/boxicons-regular/Comment';
import { Heart } from '@styled-icons/boxicons-regular/Heart';

import IconIndicator from '/components/icon-indicator';

import {
  Container,
  Description,
  IndicatorBar,
  Info,
  Name,
  Thumbnail,
} from './product.styles';

type ProductProps = {
  comments: number;
  likes: number;
  name: string;
  description: string;
  image: string;
};

const Product: React.FunctionComponent<ProductProps> = ({
  likes,
  name,
  description,
  image,
  comments,
}) => {
  return (
    <Container>
      <Thumbnail alt="thumbnail" src={image} />
      <Info>
        <Name>{name}</Name>
        <IndicatorBar>
          <IconIndicator
            icon={Heart}
            iconBackground
            title="likes"
            value={likes}
          />
          <IconIndicator
            icon={Comment}
            iconBackground
            title="comments"
            value={comments}
          />
        </IndicatorBar>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};

export default Product;
