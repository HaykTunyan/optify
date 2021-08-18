import React from 'react';

const Menu = ({ className = '', ...props }) => (
  <span
    className={`${className} font-medium text-dark md:text-1xs lg:text-1sm xl:text-base`}
    {...props}
  />
);

const Tiny = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-tiny`} {...props} />
);

const XS = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-xs`} {...props} />
);

const SM = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-sm`} {...props} />
);

const Base = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-base`} {...props} />
);

const MD = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-md`} {...props} />
);

const LG = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-lg`} {...props} />
);
const XL_2 = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-2xl`} {...props} />
);

const XL = ({ className = '', ...props }) => (
  <span className={`${className} font-medium text-xl`} {...props} />
);

const Brand = ({ className = '', ...props }) => (
  <span
    className={`${className} xl:text-4xl lg:text-3xl xs:text-2xl text-primary font-bold xl:ml-2 lg:ml-1 lg:block md:hidden`}
    {...props}
  />
);

const Error = ({ className = '', ...props }) => (
  <span
    className={`${className} text-1sm text-warrning font-medium animate-swing duration-75`}
    {...props}
  />
);

const Text = {
  Base,
  Error,
  Menu,
  SM,
  XS,
  MD,
  LG,
  XL,
  XL_2,
  Brand,
  Tiny,
};

export default Text;
