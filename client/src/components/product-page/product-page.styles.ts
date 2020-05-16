import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 0.5rem;
  background: ${(props): string => props.theme.colors.backgroundSecondary};
`;
