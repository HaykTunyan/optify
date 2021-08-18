import { PATHS } from 'common';
import React from 'react';
import { Icon } from 'style-guide';

// const plans = [
//   {
//     t_key: 'link_building_outrech',
//     price: '100.00',
//     gradient: 'bg-gradient-alpha',
//     icon: (
//       <span className='pt-6px'>
//         <Icon.Check className='fill-primaryAlpha' />
//       </span>
//     ),
//     listData: ['lorem_md', 'lorem_md', 'lorem_md', 'lorem_md'],
//     link: PATHS.LINK_BUILDING,
//   },
//   {
//     t_key: 'guest_post__outrech',
//     price: '200.00',
//     gradient: 'bg-gradient-beta',
//     icon: (
//       <span className='pt-6px'>
//         <Icon.Check className='fill-primaryBeta' />
//       </span>
//     ),
//     listData: ['lorem_md', 'lorem_md', 'lorem_md', 'lorem_md'],
//     link: PATHS.GUEST_POST,
//   },
//   {
//     t_key: 'broken_link_outrech',
//     price: '300.00',
//     gradient: 'bg-gradient-primary',
//     icon: (
//       <span className='pt-6px'>
//         <Icon.Check className='fill-primary' />
//       </span>
//     ),
//     listData: ['lorem_md', 'lorem_md', 'lorem_md', 'lorem_md'],
//     link: PATHS.BROKEN_LINK,
//   },
// ];

// new Plan
const plans = [
  {
    id: 1,
    title: '1000',
    price: '15$',
    gradient: 'bg-gradient-beta',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primaryAlpha-second' />
      </span>
    ),
    listData: ['pricing_mouth', 'pricing_email', 'pricing_credits'],
    link: PATHS.BROKEN_LINK,
    popular: false,
  },
  {
    id: 2,
    title: '2500',
    price: '27$',
    gradient: 'bg-gradient-beta',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primaryLight' />
      </span>
    ),
    listData: ['pricing_mouth', 'pricing_email', 'pricing_credits'],
    link: PATHS.BROKEN_LINK,
    popular: true,
  },
  {
    id: 3,
    title: '5000',
    price: '49$',
    gradient: 'bg-gradient-beta',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primaryGamma' />
      </span>
    ),
    listData: ['pricing_mouth', 'pricing_email', 'pricing_credits'],
    link: PATHS.BROKEN_LINK,
    popular: false,
  },
  {
    id: 4,
    title: '10 000',
    price: '79$',
    gradient: 'bg-gradient-beta',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primaryAlpha-second' />
      </span>
    ),
    listData: ['pricing_mouth', 'pricing_email', 'pricing_credits'],
    link: PATHS.BROKEN_LINK,
    popular: false,
  },
  {
    id: 5,
    title: '25 000',
    price: '189$',
    gradient: 'bg-gradient-beta',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primaryLight' />
      </span>
    ),
    listData: ['pricing_mouth', 'pricing_email', 'pricing_credits'],
    link: PATHS.BROKEN_LINK,
    popular: false,
  },
  {
    id: 6,
    title: '50 000',
    price: '359$',
    gradient: 'bg-gradient-beta',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primaryGamma' />
      </span>
    ),
    listData: ['pricing_mouth', 'pricing_email', 'pricing_credits'],
    link: PATHS.BROKEN_LINK,
    popular: false,
  },
  
];

const pricing = (state = plans, action) => {
  return state;
};

export default pricing;
