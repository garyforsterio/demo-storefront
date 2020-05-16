import React from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
  title: string;
};

/**
 * Spawns warning as react-helemt dependency is still using componentWillMount method
 * https://github.com/nfl/react-helmet/issues/548
 * TODO: update once v7 released
 */

const SEO: React.FunctionComponent<SEOProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
