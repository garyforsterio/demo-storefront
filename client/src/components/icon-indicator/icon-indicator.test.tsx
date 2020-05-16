import React from 'react';
import { Heart } from '@styled-icons/boxicons-regular/Heart';

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '/utils/test.utils';

import IconIndicator from './';

const DUMMY_ICON = Heart;
const DUMMY_VALUE = 18;
const DUMMY_TITLE = 'Likes';

describe('List Item', () => {
  it('it renders an icon', () => {
    render(
      <IconIndicator
        icon={DUMMY_ICON}
        title={DUMMY_TITLE}
        value={DUMMY_VALUE}
      />,
    );
    expect(screen.getByTitle(DUMMY_TITLE)).toBeTruthy();
  });

  it('displays a value', () => {
    render(
      <IconIndicator
        icon={DUMMY_ICON}
        title={DUMMY_TITLE}
        value={DUMMY_VALUE}
      />,
    );
    expect(screen.getByText(DUMMY_VALUE.toString())).toBeVisible();
  });

  it('displays an icon background', () => {
    render(
      <IconIndicator
        icon={DUMMY_ICON}
        iconBackground
        title={DUMMY_TITLE}
        value={DUMMY_VALUE}
      />,
    );
    expect(screen.getByTitle(DUMMY_TITLE).closest('div')).toHaveStyle({
      backgroundColor: '#eeeeee',
    });
  });
});
