import React from 'react';

import { Container, SpinningLoaderIcon } from './loading.styled';

const Loading: React.FunctionComponent = () => {
  return (
    <Container>
      <SpinningLoaderIcon title="loading" />
    </Container>
  );
};

export default Loading;
