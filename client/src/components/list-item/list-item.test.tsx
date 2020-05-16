import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import config from '/config';
import { render, screen } from '/utils/test.utils';

import ListItem from './';

const DUMMY_IMAGE_SRC = '/test.jpg';
const DUMMY_NAME = 'Light pink shoes';
const DUMMY_PRICE = 51;
const DUMMY_LIKES = 91;
const DUMMY_ID = '5';

describe('List Item', () => {
  it('it renders a thumbnail', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        image={DUMMY_IMAGE_SRC}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
      />,
    );
    expect(screen.getByAltText('thumbnail')).toHaveAttribute(
      'src',
      DUMMY_IMAGE_SRC,
    );
  });

  it('displays a sold item', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        image={DUMMY_IMAGE_SRC}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
        sold={true}
      />,
    );
    expect(screen.getByTitle('SOLD')).toBeTruthy();
  });

  it('displays a price', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        image={DUMMY_IMAGE_SRC}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
      />,
    );
    expect(screen.getByText(config.currency + DUMMY_PRICE)).toBeVisible();
  });

  it('displays the number of likes', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        image={DUMMY_IMAGE_SRC}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
      />,
    );
    expect(screen.getByText(DUMMY_LIKES.toString())).toBeVisible();
  });

  it('links to a product page', () => {
    render(
      <ListItem
        id={DUMMY_ID}
        image={DUMMY_IMAGE_SRC}
        likes={DUMMY_LIKES}
        name={DUMMY_NAME}
        price={DUMMY_PRICE}
      />,
    );
    expect(screen.getByText(DUMMY_NAME).closest('a')).toHaveAttribute(
      'href',
      '/items/' + DUMMY_ID,
    );
  });
});
