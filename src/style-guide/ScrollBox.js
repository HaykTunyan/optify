import React, { forwardRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const ScrollBox = forwardRef((props, ref) => {
  const { className, ...scrollBoxProps } = props;
  return (
    <Scrollbars
      ref={ref}
      autoHide={true}
      autoHideTimeout={10}
      className={className || ''}
      renderThumbVertical={() => <div className='w-1 bg-primary rounded-full'></div>}
      renderThumbHorizontal={() => <div className='h-2 bg-primary rounded-full'></div>}
      {...scrollBoxProps}
    />
  );
});

export default ScrollBox;
