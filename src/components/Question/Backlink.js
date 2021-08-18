import React from 'react';
import { Title, Button} from 'style-guide';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'common';

const Backlink = ({ t, register }) => {
  const history = useHistory();

const openTemplate = ( ) => { history.push(PATHS.CHOOSE_TEMPLATE) }

  return (
    <div className='md:w-6/12 lg:w-4/12 md:mx-auto'>
      <div className='text-center'>
        <Title.Base className='text-center font-medium' children={t('give_backlink_question')} />
      </div>
      <div className='pt-5' />
      <div className='grid grid-cols-2 grid-flow-row gap-7'>
        <input
          type='radio'
          name='backlink'
          value='no'
          id='backlink-no'
          className='hidden'
          ref={register}
        />
        <input
          type='radio'
          name='backlink'
          value='yes'
          id='backlink-yes'
          className='hidden'
          ref={register}
        />
        <label
          htmlFor='backlink-no'
          children={t('no')}
          className='md:text-sm xs:font-medium px-10 py-3 xs:w-full bg-secondary text-dark text-center rounded-full'
          onClick={openTemplate}
        />
        <label
          htmlFor='backlink-yes'
          children={t('yes')}
          className='md:text-sm xs:font-medium px-10 py-3 xs:w-full bg-primary text-white text-center rounded-full'
        />
      </div>
    </div>
  );
};

export default Backlink;
