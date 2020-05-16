import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen } from '/utils/test.utils';

import AddToCart from './';

const PRICE = 598;

describe('Add To Cart', () => {
  const handleAdd = jest.fn();
  it('it renders a price', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} />);
    expect(screen.getByText(PRICE.toString())).toBeTruthy();
  });
  it('it renders a button', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} />);
    expect(screen.getByRole('button')).toHaveTextContent('ADD TO CART');
  });
  it('it trigger callback function on click', () => {
    render(<AddToCart onAdd={handleAdd} price={PRICE} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
