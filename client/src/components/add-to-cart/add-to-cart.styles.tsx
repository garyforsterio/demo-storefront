import styled from 'styled-components';

export const Filler = styled.div`
  height: 2rem;
`;

export const Container = styled(Filler)`
  box-shadow: 0 -1px 1px #efefef;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props): string => props.theme.colors.backgroundPrimary};
  color: ${(props): string => props.theme.colors.textPrimary};
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${(props): string => props.theme.colors.textPrimary};
`;

export const Postage = styled.div`
  font-weight: lighter;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  color: ${(props): string => props.theme.colors.textSecondary};
`;

export const Button = styled.button`
  background: ${(props): string => props.theme.colors.primary};
  color: white;
  padding: 0.6rem;
  border: none;
  outline: none;
  &:disabled {
    background: initial;
    color: ${(props): string => props.theme.colors.primary};
  }
`;
