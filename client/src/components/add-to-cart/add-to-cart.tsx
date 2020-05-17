import React, { useCallback } from 'react';
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
  soldOut: boolean;
};

/**
 * Displays ribbon on bottom of screen with price and button to add to cart
 */
const AddToCart: React.FunctionComponent<AddToCartProps> = ({
  price,
  onAdd,
  shipping,
  soldOut,
}) => {
  const { t } = useTranslation();
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (soldOut) {
        return;
      }
      onAdd(event);
    },
    [soldOut],
  );
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
        <Button disabled={soldOut} onClick={handleClick} type="button">
          {soldOut ? t('addToCart.soldOut') : t('addToCart.prompt')}
        </Button>
      </Container>
    </>
  );
};

export default AddToCart;
