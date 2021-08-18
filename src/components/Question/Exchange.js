import React from 'react';
import { Title } from 'style-guide';

const Exchange = ({ t, register }) => {
  return (
    <div className='md:w-6/12 lg:w-4/12 md:mx-auto'>
      <div className='text-center'>
        <Title.Base className='text-center font-medium' children={t('direct_indirect_exchange')} />
      </div>
      <div className='pt-5' />
      <div className='grid grid-cols-2 grid-flow-row gap-7'>
        <input
          type='radio'
          name='exchangeType'
          value='direct'
          id='direct'
          className='hidden'
          ref={register}
        />
        <input
          type='radio'
          name='exchangeType'
          value='indirect'
          id='indirect'
          className='hidden'
          ref={register}
        />
        <label
          htmlFor='direct'
          children={t('direct')}
          className='md:text-sm xs:font-medium px-10 py-3 xs:w-full bg-secondary text-dark text-center rounded-full'
        />
        <label
          htmlFor='indirect'
          children={t('indirect')}
          className='md:text-sm xs:font-medium px-10 py-3 xs:w-full bg-primary text-white text-center rounded-full'
        />
      </div>
    </div>
  );
};

export default Exchange;
