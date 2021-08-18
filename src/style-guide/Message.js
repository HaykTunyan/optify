import React from 'react';
import { Icon } from 'style-guide';

const Fail = ({ text = '', className }) => (
  <div
    className={`text-warrning border-1 border-warrning rounded-15 px-4 flex items-center py-4 ${className}`}
  >
    <Icon.Fail className='fill-warrning border-warrning border-2 p-1 w-8 rounded-full' />
    <div className='pl-5' />
    {text}
  </div>
);

const Message = {
  Fail,
};

export default Message;
