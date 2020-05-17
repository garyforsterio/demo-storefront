import React from 'react';
import { useTranslation } from 'react-i18next';

import Menu from '/components/menu';
import SEO from '/components/seo';
import { MenuItem } from '/index.d';
import { useCategories } from '/providers/categories-provider';

import { Title } from './header.styles';

type HeaderProps = {
  title?: string;
};

/**
 * Header component responsible for rendering title, menu and also adding SEO info to page
 */
const Header: React.FunctionComponent<HeaderProps> = ({ title: titleProp }) => {
  const { categories } = useCategories();
  const { t } = useTranslation();
  const title = titleProp || (t('global.siteName') as string);
  const items: MenuItem[] = [
    {
      label: t('menu.home'),
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
