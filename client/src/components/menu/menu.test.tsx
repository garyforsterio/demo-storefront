import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { MenuItem } from '/index.d';
import { render, screen } from '/utils/test.utils';

import Menu from './';

// Default from react router
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
const ACTIVE_CLASS_NAME = 'active';

const ITEMS: MenuItem[] = [
  { label: 'First', path: '/' },
  { label: 'Second', path: '/second' },
];

describe('Menu', () => {
  it('it renders labels', () => {
    render(<Menu items={ITEMS} />);
    ITEMS.forEach((item) => {
      expect(screen.getByText(item.label)).toBeTruthy();
    });
  });
  it('items have associated links', () => {
    render(<Menu items={ITEMS} />);
    ITEMS.forEach((item) => {
      expect(screen.getByText(item.label).closest('a')).toHaveAttribute(
        'href',
        item.path,
      );
    });
  });
  it('the active item is set', () => {
    render(<Menu items={ITEMS} />);
    expect(screen.getByText(ITEMS[0].label).closest('a')).toHaveClass(
      ACTIVE_CLASS_NAME,
    );
  });
});
