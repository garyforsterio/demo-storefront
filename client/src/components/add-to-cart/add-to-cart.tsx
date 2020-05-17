import React from 'react';
import { useTranslation } from 'react-i18next';

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

/**
 * Displays ribbon on bottom of screen with price and button to add to cart
 */
const AddToCart: React.FunctionComponent<AddToCartProps> = ({
  price,
  onAdd,
  shipping,
}) => {
  const { t } = useTranslation();
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
          {t('addToCart.buttonLabel')}
        </Button>
      </Container>
    </>
  );
};

export default AddToCart;
