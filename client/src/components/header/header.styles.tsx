import styled from 'styled-components';

export const Title = styled.h1`
  padding: 1rem;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  background: ${(props): string => props.theme.colors.backgroundPrimary};
  margin: 0;
  z-index: 2;
  color: ${(props): string => props.theme.colors.textPrimary};
`;
