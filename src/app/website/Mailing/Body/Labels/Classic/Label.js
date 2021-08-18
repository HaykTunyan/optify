import React from 'react';
import { Text } from 'style-guide';

const Base = ({ text, active, onClick, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`py-5 w-full text-center transition-all overflow-hidden md:px-1 xs:px-0 overflow-ellipsis whitespace-nowrap 
      ${
        isMobile
          ? active
            ? 'border-b-2 border-primary'
            : ''
          : active
          ? 'md:border-b-0 xs:border-l-0 md:border-l-4  border-primary md:shadow-label border-0'
          : 'hover:border-l-4 border-b-1'
      } 
      `}
    >
      <Text.Base
        children={text}
        className={`${active ? 'font-semibold text-primary' : 'font-medium text-dark-beta'}`}
      />
    </div>
  );
};

const Add = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-5 w-full max-w-full text-center border-0 group transition-all cursor-pointer select-none ${className}`}
    >
      <Text.Base children={text} className='text-lightGray group-hover:text-primary' />
    </button>
  );
};

const Label = {
  Base,
  Add,
};

export default Label;
