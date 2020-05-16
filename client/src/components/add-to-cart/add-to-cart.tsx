import React from 'react';

import config from '/config';

import {
  Button,
  Container,
  Filler,
  LeftBlock,
  Postage,
  Price,
} from './add-to-cart.styles';

type AddToCartProps = {
  price: number;
  shipping: string;
  onAdd: (event: React.MouseEvent) => void;
};

const AddToCart: React.FunctionComponent<AddToCartProps> = ({
  price,
  onAdd,
  shipping,
}) => {
  return (
    <>
      <Filler />
      <Container>
        <LeftBlock>
          <Price>
            {config.currency}
            {price}
          </Price>
          <Postage>{shipping}</Postage>
        </LeftBlock>
        <Button onClick={onAdd} type="button">
          ADD TO CART
        </Button>
      </Container>
    </>
  );
};

export default AddToCart;
