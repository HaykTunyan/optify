import React from 'react';

const Base = ({ className, children, ...props }) => (
  <span className={`md:text-2xl xs:text-1xl ${className}`} children={children} {...props} />
);

const H1 = ({ className, children, ...props }) => (
  <h1
    className={`xl:text-7xl lg:text-6xl md:text-5xl xs:text-4xl ${className}`}
    children={children}
    {...props}
  />
);
const H2 = ({ className, children, ...props }) => (
  <h2
    className={`xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl ${className}`}
    children={children}
    {...props}
  />
);

const H3 = ({ className, children, ...props }) => (
  <h3
    className={`xl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl ${className}`}
    children={children}
    {...props}
  />
);
const H4 = ({ className, children, ...props }) => (
  <h4
    className={`xl:text-3xl lg:text-2xl md:text-1xl xs:text-3xl ${className}`}
    children={children}
    {...props}
  />
);
const H5 = ({ className, children, ...props }) => (
  <h5 className={`xl:text-2xl   xs:text-1xl ${className}`} children={children} {...props} />
);

const Title = { Base, H1, H2, H3, H4, H5 };
export default Title;
