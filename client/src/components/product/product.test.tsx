import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import Product from './';

const IMAGE_SRC = '/test.jpg';
const NAME = 'Light pink shoes';
const DESCRIPTION =
  'Pre-owned, in good condition with signs of wear, may just need to be cleaned or washed.  Please see photos for style & condition.';
const LIKES = 76;
const COMMENTS = 22;

describe('Product', () => {
  it('it renders a thumbnail', () => {
    render(
      <Product
        comments={COMMENTS}
        description={DESCRIPTION}
        image={IMAGE_SRC}
        likes={LIKES}
        name={NAME}
      />,
    );
    expect(screen.getByAltText('thumbnail')).toHaveAttribute('src', IMAGE_SRC);
  });

  it('displays the name', () => {
    render(
      <Product
        comments={COMMENTS}
        description={DESCRIPTION}
        image={IMAGE_SRC}
        likes={LIKES}
        name={NAME}
      />,
    );
    expect(screen.getByText(NAME)).toBeTruthy();
  });

  it('displays a description', () => {
    render(
      <Product
        comments={COMMENTS}
        description={DESCRIPTION}
        image={IMAGE_SRC}
        likes={LIKES}
        name={NAME}
      />,
    );
    expect(screen.getByText(DESCRIPTION)).toBeTruthy();
  });

  it('displays the number of likes', () => {
    render(
      <Product
        comments={COMMENTS}
        description={DESCRIPTION}
        image={IMAGE_SRC}
        likes={LIKES}
        name={NAME}
      />,
    );
    expect(screen.getByText(LIKES.toString())).toBeVisible();
  });

  it('displays the number of comments', () => {
    render(
      <Product
        comments={COMMENTS}
        description={DESCRIPTION}
        image={IMAGE_SRC}
        likes={LIKES}
        name={NAME}
      />,
    );
    expect(screen.getByText(COMMENTS.toString())).toBeVisible();
  });
});
