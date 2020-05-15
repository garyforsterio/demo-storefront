import React from 'react';
import { render, screen } from '@testing-library/react';

import config from '/config';

import ListItem from './';

import '@testing-library/jest-dom/extend-expect';

const DUMMY_SRC = '/test.jpg';
const DUMMY_NAME = 'Light pink shoes';
const DUMMY_PRICE = 51;
const DUMMY_LIKES = 91;
const DUMMY_ID = '5';

describe('List Item', () => {
  it('it renders a thumbnail', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
        src={DUMMY_SRC}
      />,
    );
    expect(screen.getByAltText('thumbnail')).toBeVisible();
  });

  it('displays a sold item', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
        sold={true}
        src={DUMMY_SRC}
      />,
    );
    expect(screen.getByText('SOLD')).toBeVisible();
  });

  it('displays a price', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
        src={DUMMY_SRC}
      />,
    );
    expect(screen.getByText(config.curreny + DUMMY_PRICE)).toBeVisible();
  });

  it('displays the number of likes', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
        src={DUMMY_SRC}
      />,
    );
    expect(screen.getByText(DUMMY_LIKES.toString())).toBeVisible();
  });

  it('links to a single product page', () => {
    const { container } = render(
      <ListItem
        id={DUMMY_ID}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
        src={DUMMY_SRC}
      />,
    );
    expect(container.closest('a')).toHaveAttribute(
      'href',
      '/items/' + DUMMY_ID,
    );
  });
});
