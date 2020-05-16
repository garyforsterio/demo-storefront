import * as React from 'react';

import Menu from '/components/menu';
import SEO from '/components/seo';
import { MenuItem } from '/index.d';

import { Title } from './header.styles';

type HeaderProps = {
  title: string;
};

const menuItems: MenuItem[] = [
  {
    label: 'すべて',
    path: '/',
  },
  {
    label: 'レディース',
    path: '/',
  },
  {
    label: 'ベビー・キッズ',
    path: '/',
  },
  {
    label: 'エンタン',
    path: '/',
  },
];

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <>
      <SEO title={title} />
      <Title>{title}</Title>
      <Menu items={menuItems} />
    </>
  );
};

export default Header;
