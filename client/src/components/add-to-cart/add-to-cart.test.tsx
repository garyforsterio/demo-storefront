import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import config from '/config';
import { fireEvent, render, screen } from '/utils/test.utils';

import AddToCart from './';

const PRICE = 598;
const SHIPPING = 'Included';

describe('Add To Cart', () => {
  const handleAdd = jest.fn();
  it('it renders a price with currency', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} shipping={SHIPPING} />);
    expect(screen.getByText(config.currency + PRICE.toString())).toBeTruthy();
  });
  it('it renders shipping information', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} shipping={SHIPPING} />);
    expect(screen.getByText(SHIPPING)).toBeTruthy();
  });
  it('it renders a button', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} shipping={SHIPPING} />);
    expect(screen.getByRole('button')).toHaveTextContent('ADD TO CART');
  });
  it('it trigger callback function on click', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} shipping={SHIPPING} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
