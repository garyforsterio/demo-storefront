import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 30rem;
  flex-wrap: wrap;
`;

export const StyledNavLink = styled(NavLink)`
  line-height: 2rem;
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${(props): string => props.theme.colors.textSecondary};
`;
