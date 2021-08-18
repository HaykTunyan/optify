import React from 'react';

const Keyword = ({ className, ...props }) => {
  return (
    <div
      className={`px-5 text-center py-3 justify-center rounded-lg overflow-hidden whitespace-nowrap overflow-ellipsis ${className}`}
      {...props}
    />
  );
};

export default Keyword;
