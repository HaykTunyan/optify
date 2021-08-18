import React from 'react';

const Base = ({ children = 'ContainerBase', className }) => (
  <div className={`container  ${className}`} children={children} />
);

const BaseShadow = ({ children = 'ContainerBase', className }) => (
  <div
    className={`${className} container shadow-layout rounded-22 mt-8 static mb-20`}
    children={children}
  />
);

const Fluid = ({ children = 'Container Fluid' }) => (
  <div className='w-full bg-gray-300' children={children} />
);
const Container = {
  Base,
  Fluid,
  BaseShadow,
};
export default Container;
