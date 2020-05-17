import { LoaderAlt } from '@styled-icons/boxicons-regular/LoaderAlt';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 4em 2em;
`;

export const SpinningLoaderIcon = styled(LoaderAlt)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  color: ${(props): string => props.theme.colors.textSecondary};
  width: 4em;
  animation-name: spin;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
