import React from 'react';
import Helmet from 'react-helmet';

import '@testing-library/jest-dom/extend-expect';

import { render } from '/utils/test.utils';

import SEO from './seo';

const TITLE = 'Test page';

describe('SEO', () => {
  it('sets a page title', () => {
    render(<SEO title={TITLE} />);
    const helmet = Helmet.peek();
    expect(helmet.title).toBe(TITLE);
  });
});
