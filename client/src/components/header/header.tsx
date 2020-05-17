import React from 'react';

import Menu from '/components/menu';
import SEO from '/components/seo';
import { MenuItem } from '/index.d';
import { useCategories } from '/providers/categories-provider';

import { Title } from './header.styles';

type HeaderProps = {
  title?: string;
};

const DEFAULT_TITLE = 'メルカリ';

const Header: React.FunctionComponent<HeaderProps> = ({
  title = DEFAULT_TITLE,
}) => {
  const { categories } = useCategories();
  const items: MenuItem[] = [
    {
      label: 'すべて',
      path: '/',
    },
    ...(categories || []).map(({ name, id }) => ({
      label: name,
      path: '/categories/' + id,
    })),
  ];
  return (
    <>
      <SEO title={title} />
      <Title>{title}</Title>
      {categories && <Menu items={items || []} />}
    </>
  );
};

export default Header;
