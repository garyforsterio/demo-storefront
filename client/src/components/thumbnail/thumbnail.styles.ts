import styled from 'styled-components';

import Sold from './components/sold';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
`;

export const SoldTriangle = styled(Sold)`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 40%;
  fill: ${(props): string => props.theme.colors.primary};
`;
