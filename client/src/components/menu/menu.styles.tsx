import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0.5rem 0.5rem;
  white-space: nowrap;
  overflow-x: auto;
  background: ${(props): string => props.theme.colors.backgroundPrimary};
`;

export const StyledNavLink = styled(NavLink)`
  line-height: 2rem;
  margin: 0 2vw 0 0.5rem;
  text-decoration: none;
  color: ${(props): string => props.theme.colors.textSecondary};
`;
