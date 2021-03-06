import React from 'react';

import { Container, Image, SoldTriangle } from './thumbnail.styles';

type ThumbnailProps = {
  src: string;
  sold?: boolean;
};

/**
 * Product thumbnail with ability to display sold indicator
 */
const Thumbail: React.FunctionComponent<ThumbnailProps> = ({ src, sold }) => {
  return (
    <Container>
      {sold && <SoldTriangle />}
      <Image alt="thumbnail" src={src} />
    </Container>
  );
};

export default Thumbail;
