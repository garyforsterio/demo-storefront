import { ErrorCircle } from '@styled-icons/boxicons-regular/ErrorCircle';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 4em 2em;
`;

export const Message = styled.div`
  margin-top: 1em;
  color: ${(props): string => props.theme.colors.textSecondary};
`;

export const Icon = styled(ErrorCircle)`
  color: ${(props): string => props.theme.colors.textSecondary};
  width: 4em;
`;
