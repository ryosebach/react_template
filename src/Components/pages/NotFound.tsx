/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';

const renderHelmet = () => {
  return(
    <Helmet>
      <title>Not Found</title>
    </Helmet>
  );
};

/**
 * * Feed Component
 */
export const NotFound = () => {
  return (
    <div>
      { renderHelmet() }
      <h1>Page Not Found</h1>
    </div>
  );
};
