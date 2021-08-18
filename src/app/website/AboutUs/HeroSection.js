import React from 'react';
import { Text, Img, Title } from 'style-guide';
import HeroImage from 'assets/about/hero.png';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-about-pattern bg-no-repeat xs:bg-about-pattern-xs md:bg-about-pattern-md lg:bg-about-pattern-lg xl:bg-about-pattern-xl xs:h-auto sm:h-auto md:h-417 lg:h-672 xl:h-735 flex flex-wrap hero-right-padding justify-between'>
      <div className='xs:w-full md:w-7/12 xl:w-6/12'>
        <Img.Static
          src={HeroImage}
          className='md:max-w-611 xs:w-10/12 sm:h-auto xs:-mt-6 md:mt-0 md:w-390 lg:w-full h-auto'
        />
      </div>
      <div className='xs:w-full xs:px-4 md:px-0 md:w-5/12 xl:w-4/12'>
        <div className='md:pt-32 lg:pt-60 xl:pt-64' />
        <Title.H1 className='font-semibold' children={t('and_here_we_are')} />
        <div className='pt-4' />
        <Text.MD children={t('and_here_title')} />
      </div>
    </div>
  );
};

export default HeroSection;
