import React from 'react';
import { render, screen } from '@testing-library/react';
import Heart from '@styled-icons/boxicons-regular/Heart';

import IconIndicator from './';

import '@testing-library/jest-dom/extend-expect';

const DUMMY_ICON = Heart;
const DUMMY_VALUE = 18;

describe('List Item', () => {
  it('it renders an icon', () => {
    render(<IconIndicator icon={DUMMY_ICON} value={DUMMY_VALUE} />);
    expect(screen.getByTitle('icon')).toBeVisible();
  });

  it('displays a value', () => {
    render(<IconIndicator icon={DUMMY_ICON} value={DUMMY_VALUE} />);
    expect(screen.getByText('SOLD')).toBeVisible();
  });
});
