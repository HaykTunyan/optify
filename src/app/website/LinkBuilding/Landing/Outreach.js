import React from 'react';
import { Text, Button, Icon, Title } from 'style-guide';

const listData = [
  {
    key: '0',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primary' />
      </span>
    ),
    title: 'lorem_sm',
  },
  {
    key: '1',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primary' />
      </span>
    ),
    title: 'lorem_sm',
  },
  {
    key: '2',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primary' />
      </span>
    ),
    title: 'lorem_sm',
  },
  {
    key: '3',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primary' />
      </span>
    ),
    title: 'lorem_sm',
  },
  {
    key: '4',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primary' />
      </span>
    ),
    title: 'lorem_sm',
  },
  {
    key: '5',
    icon: (
      <span className='pt-6px'>
        <Icon.Check className='fill-primary' />
      </span>
    ),
    title: 'lorem_sm',
  },
];

const Outreach = ({ t }) => {
  return (
    <div className='xs:w-full md:w-610 mx-auto xl:w-730'>
      <div className='xs:pt-16' />
      <div className='px-5 py-8 text-center rounded-tr-22 rounded-bl-22 shadow-layout'>
        <Title.Base children={t('link_building_outrech')} />
        <div className='xs:pt-4' />
        <Text.SM className='text-center' children={t('lorem_md')} />
        <ul className='list-inside list-none grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:gap-3 md:gap-5 px-4 xs:pt-5'>
          {listData.map((idx) => (
            <li className='flex font-medium items-baseline xs:w-12/12 xs:mx-auto' key={idx.key}>
              {idx.icon}
              <div className='pl-2' />
              <Text.SM children={t(`${idx.title}`)} className='font-normal flex-1' />
            </li>
          ))}
        </ul>
        <div className='lg:pt-8 xs:pt-5' />
        <div className='text-center'>
          <Button.Orange
            className='px-6 py-3 text-base font-semibold'
            children={t('pricing_get')}
          />
        </div>
      </div>
      <div className='xs:pb-22 md:pb-28 xl:pb-32' />
    </div>
  );
};

export default Outreach;
