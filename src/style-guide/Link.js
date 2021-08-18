import React from 'react';
import Logo from 'assets/logo.png';
import { Link } from 'react-router-dom';
import Img from './Img';
import Text from './Text';

const Brand = ({ t }) => (
  <Link to='/' className='flex items-center'>
    <Img.Static src={Logo} className='xs:w-12 xs:mr-1 md:mr-0 xl:w-16' />
    <Text.Brand children={t('brand_name')} />
  </Link>
);

const BrandSidebar = ({ t }) => (
  <Link to='/' className='flex items-center xl:mr-28 md:mr-0'>
    <Img.Static src={Logo} className='h-8 mr-1' />
    <Text.Brand children={t('brand_name')} />
  </Link>
);

const Internal = Link;
const External = ({ path, children, ...props }) => (
  <a href={path} target='_blank' rel='noopener noreferrer' children={children} {...props} />
);

const NavLink = {
  Brand,
  Internal,
  External,
  BrandSidebar,
};
export default NavLink;
