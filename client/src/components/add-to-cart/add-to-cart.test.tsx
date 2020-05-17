import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import config from '/config';
import { fireEvent, render, screen } from '/utils/test.utils';

import AddToCart from './';

const PRICE = 598;
const SHIPPING = 'Included';

describe('Add To Cart', () => {
  const handleAdd = jest.fn();
  afterEach(() => {
    handleAdd.mockReset();
  });
  it('should render a price with currency', () => {
    render(
      <AddToCart
        onAdd={handleAdd}
        price={PRICE}
        shipping={SHIPPING}
        soldOut={false}
      />,
    );
    expect(screen.getByText(config.currency + PRICE.toString())).toBeTruthy();
  });
  it('should render shipping information', () => {
    render(
      <AddToCart
        onAdd={handleAdd}
        price={PRICE}
        shipping={SHIPPING}
        soldOut={false}
      />,
    );
    expect(screen.getByText(SHIPPING)).toBeTruthy();
  });
  it('should render a button', () => {
    render(
      <AddToCart
        onAdd={handleAdd}
        price={PRICE}
        shipping={SHIPPING}
        soldOut={false}
      />,
    );
    expect(screen.getByRole('button')).toHaveTextContent('ADD TO CART');
  });
  it('should trigger callback function on click', () => {
    render(
      <AddToCart
        onAdd={handleAdd}
        price={PRICE}
        shipping={SHIPPING}
        soldOut={false}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
  it('should render a disabled button when sold out', () => {
    render(
      <AddToCart
        onAdd={handleAdd}
        price={PRICE}
        shipping={SHIPPING}
        soldOut={true}
      />,
    );
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
  it('should not register add to cart event when sold out', () => {
    render(
      <AddToCart
        onAdd={handleAdd}
        price={PRICE}
        shipping={SHIPPING}
        soldOut={true}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleAdd).toHaveBeenCalledTimes(0);
  });
});
