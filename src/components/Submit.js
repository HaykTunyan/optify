import React from 'react';
import { Button } from 'style-guide';

const Submit = ({ t, reset }) => {
  return (
    <div className='md:px-5'>
      <div className='pt-5' />
      <div className='flex xs:flex-col md:flex-row md:justify-between'>
        <div className='xs:pt-5 md:pt-0'>
          <Button.Secondary
            className='text-dark text-base py-3 px-10 xs:w-full md:w-auto'
            children={t('reset')}
            type='button'
            onClick={reset}
          />
        </div>
        <div className='xs:pt-5 md:pt-0'>
          <Button.Primary
            className='text-light text-base py-3 px-10 xs:w-full md:w-auto'
            children={t('next')}
            type='submit'
          />
        </div>
      </div>
    </div>
  );
};

export default Submit;
