import React from 'react';
import { Text, Img, Title } from 'style-guide';
import AboutBetter from 'assets/about/about-better.png';
import { useTranslation } from 'react-i18next';

const Better = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-wrap xl:pt-10'>
      <div className='xs:w-full md:w-7/12 md:order-1 md:pl-20'>
        <Img.Static src={AboutBetter} className='w-full' />
        <div className='xs:pt-5 md:pt-0' />
      </div>
      <div className='xs:w-full md:w-5/12 md:order-0 flex items-center'>
        <div className='w-full'>
          <Title.H4 className='font-semibold'>
            {t('we_do_what_we_love')}<br />{t('for_the_better')}
          </Title.H4>
          <div className='xs:pt-2 md:pt-5' />
          <Text.MD children={t('we_do_what_title')} />
          <div className='pt-5' />
          <Text.MD children={t('we_do_what_subtitle')} />
        </div>
      </div>
    </div>
  );
};

export default Better;
