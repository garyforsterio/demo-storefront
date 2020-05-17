/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Comment } from '@styled-icons/boxicons-regular/Comment';
import { Heart } from '@styled-icons/boxicons-regular/Heart';

import AddToCart from '/components/add-to-cart';
import IconIndicator from '/components/icon-indicator';
import { Product as IProduct } from '/index.d';

import {
  Container,
  Description,
  IndicatorBar,
  Info,
  Name,
  ProductWrapper,
  Thumbnail,
} from './product.styles';

type ProductProps = {
  data: IProduct;
  onAddToCart: (event: React.MouseEvent) => void;
};

const Product: React.FunctionComponent<ProductProps> = ({
  data,
  onAddToCart,
}) => {
  const {
    like_count,
    name,
    description,
    image,
    comment_count,
    price,
    shipping_fee,
  } = data;
  return (
    <ProductWrapper>
      <Container>
        <Thumbnail alt="thumbnail" src={image} />
        <Info>
          <Name>{name}</Name>
          <IndicatorBar>
            <IconIndicator
              icon={Heart}
              iconBackground
              title="likes"
              value={like_count}
            />
            <IconIndicator
              icon={Comment}
              iconBackground
              title="comments"
              value={comment_count}
            />
          </IndicatorBar>
          <Description>{description}</Description>
        </Info>
      </Container>
      <AddToCart onAdd={onAddToCart} price={price} shipping={shipping_fee} />
    </ProductWrapper>
  );
};

export default Product;
