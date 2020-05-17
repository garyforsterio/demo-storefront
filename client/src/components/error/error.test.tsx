import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import Error from './';

const MESSAGE = 'There was an error';

describe('Loading', () => {
  it('display an icon', () => {
    render(<Error message={MESSAGE} />);
    expect(screen.getByTitle('error')).toBeTruthy();
  });
  it('displays a message', () => {
    render(<Error message={MESSAGE} />);
    expect(screen.getByText(MESSAGE)).toBeTruthy();
  });
});
