import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import * as hooks from './hooks';
import { DUMMY_DATA } from './hooks/use-list.test';
import List from './list';

import '@testing-library/jest-dom/extend-expect';

const stateSpy = jest.spyOn(hooks, 'useList');

describe('List', () => {
  it('it renders a loading screen', () => {
    render(<List />);
    expect(screen.getByText('Loading...')).toBeVisible();
  });
  it('displays items', async () => {
    render(<List />);
    stateSpy.mockReturnValue({
      items: DUMMY_DATA,
    });
    await waitFor(() => screen.getByText('Light pink shoes'));
    expect(stateSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByAltText('thumbnail')).toBeVisible();
    expect(screen.getByAltText('favourites')).toBeVisible();
  });
});
