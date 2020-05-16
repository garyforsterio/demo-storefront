import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Container, IconContainer, Value } from './icon-indicator.styles';

type IconIndicatorProps = {
  icon: StyledIcon;
  value: number;
  iconBackground?: boolean;
  title: string;
};

const IconIndicator: React.FunctionComponent<IconIndicatorProps> = ({
  icon: Icon,
  value,
  iconBackground,
  title,
}) => {
  return (
    <Container>
      <IconContainer background={iconBackground ? 'true' : ''}>
        <Icon title={title} />
      </IconContainer>
      <Value>{value}</Value>
    </Container>
  );
};

export default IconIndicator;
