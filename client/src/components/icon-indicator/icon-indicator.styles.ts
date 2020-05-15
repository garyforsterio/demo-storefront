import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type IconProps = {
  background?: 'true' | '';
};

export const IconContainer = styled.div<IconProps>`
  width: 1rem;
  height: 1rem;
  line-height: 0.9rem;
  padding: 0.3rem;
  margin-right: 0.2rem;
  border-radius: 50%;
  color: ${(props): string => props.theme.colors.iconColor};
  background-color: ${(props): string =>
    props.background === 'true'
      ? props.theme.colors.iconBackground
      : 'inherit'};
`;

export const Value = styled.span`
  color: ${(props): string => props.theme.colors.textPrimary};
`;
