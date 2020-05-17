import React from 'react';

import { MenuItem } from '/index.d';

import { Container, StyledNavLink } from './menu.styles';

type MenuProps = {
  items: MenuItem[];
};

/**
 * Used to render a sequence of links in a horizontal bar
 */
const Menu: React.FunctionComponent<MenuProps> = ({ items }) => {
  return (
    <Container>
      {items.map(({ label, path }) => (
        <StyledNavLink exact key={label} to={path}>
          {label}
        </StyledNavLink>
      ))}
    </Container>
  );
};

export default Menu;
