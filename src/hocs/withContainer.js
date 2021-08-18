import React from 'react';
import { Container } from 'style-guide';

const withContainer = (WrappedComponent) => {
  const HOC = () => (
    <Container.Base>
      <WrappedComponent />
    </Container.Base>
  );
  return HOC;
};

export default withContainer;
