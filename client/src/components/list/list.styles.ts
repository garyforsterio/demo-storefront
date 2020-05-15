import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props): string => props.theme.colors.backgroundSecondary};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 0.5rem;
  padding: 0.5em;
`;
