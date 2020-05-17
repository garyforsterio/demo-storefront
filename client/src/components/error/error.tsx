import React from 'react';

import { Container, Icon, Message } from './error.styled';

type ErrorProps = {
  message: string;
};

/**
 * Used to display there has been an error of somekind.
 */
const Error: React.FunctionComponent<ErrorProps> = ({ message }) => {
  return (
    <Container>
      <Icon title="error" />
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default Error;
