import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 0.5rem;
  background: ${(props): string => props.theme.colors.backgroundSecondary};
`;

export const Card = styled.div`
  box-shadow: 0px 0px 0.5px;
  background: ${(props): string => props.theme.colors.backgroundPrimary};
  display: flex;
  margin: auto;
  max-width: 50rem;
  @media (max-width: 50rem) {
    flex-direction: column;
    max-width: 25rem;
  }
  > * {
    max-width: 25rem;
    min-width: 10rem;
  }
`;

export const Info = styled.div`
  padding: 0.7rem 1rem 1rem;
`;

export const Thumbnail = styled.img`
  width: 100%;
  object-fit: contain;
  background: #00000008;
  object-position: top;
`;

export const Name = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 0.5rem;
  color: ${(props): string => props.theme.colors.textPrimary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Description = styled.div`
  color: ${(props): string => props.theme.colors.textPrimary};
`;

export const IndicatorBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0rem;
  > div:not(:last-child) {
    margin-right: 0.8rem;
  }
`;
