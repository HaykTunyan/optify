import React from 'react';
import { Icon, Link } from 'style-guide';

export const blogPaginetions = [
  {
    key: '1',
    path: '/',
    namber: '1',
    className: 'bg-primaryBeta rounded-full text-light',
  },
  {
    key: '2',
    path: '/',
    namber: '2',
    className: 'text-primaryGrey',
  },
  {
    key: '3',
    path: '/',
    namber: '3',
    className: 'text-primaryGrey',
  },
  {
    key: '4',
    path: '/',
    namber: '...',
    className: 'text-primaryGrey',
  },
];

const Footer = () => {
  return (
    <div className='flex justify-end xs:py-10'>
      <nav className='relative z-0 inline-flex -space-x-px' aria-label='Pagination'>
        {blogPaginetions.map((item) => (
          <Link.External
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${item.className}`}
            key={item.key}
          >
            {item.namber}
          </Link.External>
        ))}
        <Link.External className='relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium'>
          <Icon.RightArrow className=' fill-primaryGrey' />
        </Link.External>
      </nav>
    </div>
  );
};
export default Footer;
