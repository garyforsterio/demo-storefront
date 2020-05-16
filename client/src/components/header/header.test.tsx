import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import Header from './';

const TITLE = 'Title';

describe('Header', () => {
  it('it renders title', () => {
    render(<Header title={TITLE} />);
    expect(screen.getByRole('heading')).toHaveTextContent(TITLE);
  });
  it('it has a bold title', () => {
    render(<Header title={TITLE} />);
    expect(screen.getByRole('heading')).toHaveStyle(`font-weight: bold;`);
  });
});
