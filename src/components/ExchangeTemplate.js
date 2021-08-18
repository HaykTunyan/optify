import React from 'react';
import { useTranslation } from 'react-i18next';
// style guide
import { Link, Icon, Text, Button } from 'style-guide';
import { PATHS } from 'common';

const ExchangeTemplate = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='pt-5 md:hidden' />
      <Link.Internal
        to={PATHS.CHOOSE_TEMPLATE}
        className='flex items-center hover:underline md:hidden'
      >
        <Icon.LeftArrow className='fill-dark' />
        <Text.MD
          className='ml-5 font-semibold text-dark text-lg leading-0'
          children={t('template')}
        />
      </Link.Internal>
      <div className='pt-8 md:hidden' />
      <Text.XL
        className='font-semibold text-primary md:hidden xs:text-xl'
        children={t('direct_exchange')}
      />
      <div className='pt-3' />
      <div className='flex justify-between'>
        <div className='flex'>
          <Text.Base
            className='text-sm font-medium text-primary opacity-60'
            children={t('previous')}
          />
        </div>
        <div className='flex'>
          <Text.Base className='text-sm font-medium text-primary' children={t('next')} />
        </div>
      </div>
      <div className='pt-4' />
      <div className='shadow-layout rounded-22 px-5 pt-5 pb-8'>
        <Text.XL className='xs:font-semibold' children={t('template')} />
        <div className='pt-4' />
        <Text.MD className='text-lightGray' children={t('lorem')} />
        <Text.MD className='text-lightGray' children={t('lorem')} />
        <div className='pt-4' />
        <Text.MD className='text-lightGray' children={t('lorem')} />
        <div className='pt-5' />
        <div className='flex justify-center'>
          <Button.Primary
            className='px-10 py-3 w-150 xs:text-base xs:font-semibold'
            children={t('select')}
          />
        </div>
      </div>
      <div className='md:px-5'>
        <div className='pt-8' />
        <div className='flex justify-between'>
          <div className='xs:pt-5 md:pt-0'>
            <Button.Secondary
              className='text-dark text-base py-3 px-12 xs:w-auto'
              children={t('back')}
              onClick={ () => window.history.back() }
            />
          </div>
          <div className='xs:pt-5 md:pt-0'>
            <Button.Primary
              className='text-light text-base py-3 px-12 xs:w-auto'
              children={t('send')}
            />
          </div>
        </div>
        <div className='pt-3' />
      </div>
    </>
  );
};

export default ExchangeTemplate;
