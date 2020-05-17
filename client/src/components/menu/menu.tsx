import React from 'react';

import { MenuItem } from '/index.d';

import { Container, StyledNavLink } from './menu.styles';

type MenuProps = {
  items: MenuItem[];
};

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
