import React from 'react';
import { Icon } from 'style-guide';
import Button from './Button';

const Chips = ({ className = '', onDelete, ...props }) => {
  return (
    <div
      className={`flex whitespace-nowrap items-center justify-center py-3 md:px-4 xs:px-2 rounded-22 bg-secondary animate-scaleInCenter`}
    >
      <div
        className={`flex flex-1 items-center whitespace-nowrap overflow-ellipsis justify-center md:pr-2 xs:pr-1 overflow-hidden md:text-sm xs:text-xs text-primary ${className}`}
        {...props}
      />
      <Button.Base
        className='bg-white group hover:bg-primary p-1 rounded-full transition-all'
        onClick={onDelete}
        type='button'
      >
        <Icon.ChipsClose className='fill-primary group-hover:fill-secondary' />
      </Button.Base>
    </div>
  );
};

export default Chips;
