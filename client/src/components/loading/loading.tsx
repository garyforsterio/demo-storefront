import React from 'react';

import { Container, SpinningLoaderIcon } from './loading.styled';

/**
 * Used to display loading universally across site
 */
const Loading: React.FunctionComponent = () => {
  return (
    <Container>
      <SpinningLoaderIcon title="loading" />
    </Container>
  );
};

export default Loading;
