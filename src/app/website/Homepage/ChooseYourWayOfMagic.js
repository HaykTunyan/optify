import React from 'react';
import { Text, Title, Button } from 'style-guide';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'common';

const ChooseYourWayOfMagic = ({ t }) => {
  const history = useHistory();
  return (
    <div>
      <Title.H3 className='text-center font-medium text-dark' children={t('choose_way_magic')} />
      <div className='md:pt-10 xs:pt-8' />
      <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-7 justify-between'>
        <div className='shadow-layout pt-6 pb-7 px-7 rounded-bl-15 rounded-tr-15 text-center flex flex-col items-center justify-between'>
          <Text.SM
            className='text-dark xs:text-lg lg:text-1xl xl:text-2xl block'
            children={t('link_building_outrech')}
          />
          <div className='md:pt-5 xs:pt-3' />
          <Text.XS className='text-dark block' children={t('link_building_outrech_desc')} />
          <div className='pt-5' />
          <Button.Orange
            className='xs:font-medium'
            children='Get Started'
            onClick={() => history.push(PATHS.LINK_BUILDING)}
          />
        </div>
        <div className='shadow-layout pt-6 pb-7 px-7 rounded-bl-15 rounded-tr-15 text-center flex flex-col items-center justify-between'>
          <Text.SM
            className='text-dark xs:text-lg lg:text-1xl xl:text-2xl block'
            children={t('guest_post__outrech')}
          />
          <div className='md:pt-5 xs:pt-3' />
          <Text.XS className='text-dark block' children={t('guest_post__outrech_desc')} />
          <div className='pt-5' />
          <Button.Orange
            className='xs:font-medium'
            children='Get Started'
            onClick={() => history.push(PATHS.GUEST_POST)}
          />
        </div>
        <div className='shadow-layout pt-6 pb-7 px-7 rounded-bl-15 rounded-tr-15 text-center flex flex-col items-center justify-between'>
          <Text.SM
            className='text-dark xs:text-lg lg:text-1xl xl:text-2xl block'
            children={t('broken_link_outrech')}
          />
          <div className='md:pt-5 xs:pt-3' />
          <Text.XS className='text-dark block' children={t('broken_link_outrech_desc')} />
          <div className='pt-5' />
          <Button.Orange
            className='xs:font-medium'
            children='Get Started'
            onClick={() => history.push(PATHS.BROKEN_LINK)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourWayOfMagic;
