import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;
`;

export const Container = styled.div`
  box-shadow: 0px 0px 0.5px;
  background: ${(props): string => props.theme.colors.backgroundPrimary};
`;

export const Info = styled.div`
  padding: 0.5rem 0.5rem 0.4rem;
`;

export const Name = styled.h4`
  font-weight: normal;
  margin: 0 0 0.3rem;
  color: ${(props): string => props.theme.colors.textPrimary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${(props): string => props.theme.colors.textPrimary};
`;

export const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
