import React from 'react';
import HeroImage from 'assets/homepage/hero.png';
import { Img, Text, Title } from 'style-guide';

const Header = ({ t }) => {
  return (
    <div className='bg-landing-hero-pattern-xs md:bg-landing-hero-pattern-md lg:bg-landing-hero-pattern-lg xl:bg-landing-hero-pattern-xl bg-no-repeat bg-right-top xl:h-720 lg:h-564 md:h-464'>
      <div className='xs:pt-7 md:pt-20' />
      <div className='flex flex-wrap'>
        <div className='md:w-6/12 xs:w-full hero-left-padding'>
          <div className='xs:pt-5 md:pt-0 lg:pt-16 xl:pt-24' />
          <div className='block text-3.5xl font-bold text-dark'>
            <Title.H1 className='font-bold'>{t('link_building')}</Title.H1>
          </div>
          <div className='xs:pt-1 md:pt-3' />
          <div className='block'>
            <Text.Base children={t('link_building_title')} />
          </div>
        </div>
        <div className='xs:pt-12 xs:w-full md:pt-0 md:w-0' />
        <div className='xs:w-full md:w-6/12 text-right'>
          <Img.Static src={HeroImage} className='max-w-753 w-full h-auto inline' />
        </div>
      </div>
    </div>
  );
};

export default Header;
