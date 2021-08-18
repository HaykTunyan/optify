import React from 'react';
import { Text } from 'style-guide';

const Item = ({ item }) => (
  <div className='shadow-button rounded-22 py-5 px-8 flex xs:flex-col md:flex-row justify-between min-w-0 overflow-hidden'>
    <Text.SM children={item?.email} className='font-semibold text-dark underline' />
    <div className='xs:pt-5 md:pt-0' />
    <div className='flex items-center'>
      <Text.SM children={item?.fullName} className='font-medium text-dark' />
      <div className='pl-2' />
      <span children='&#9679;' className='font-medium text-tiny text-dark-alpha' />
      <div className='pl-2 block' />
      <Text.SM children={item?.job} className='font-medium text-dark-alpha flex-1' />
    </div>
  </div>
);

export default Item;
