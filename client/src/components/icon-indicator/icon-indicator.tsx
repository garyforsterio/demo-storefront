import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Container, IconContainer, Value } from './icon-indicator.styles';

type IconIndicatorProps = {
  icon: StyledIcon;
  value: number;
  iconBackground?: boolean;
  title: string;
};

/**
 * Used to indicate a icon value pairing. For example number of comments
 */
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
      <Value>{value || 0}</Value>
    </Container>
  );
};

export default IconIndicator;
