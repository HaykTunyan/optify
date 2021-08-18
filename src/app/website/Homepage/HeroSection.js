import React from 'react';
import HeroImage from 'assets/homepage/hero.png';
import { Button, Img, Text, Title } from 'style-guide';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import { MODALS } from 'common';
import selectors from 'store/selectors';

const HeroSection = ({ t}) => {

  const dispatch = useDispatch();
  const openModal = () => dispatch(actions.ui.openModal({ type:MODALS.SIGN_UP }));

  const { data } = useSelector(selectors.user)

  return (
    <div className='bg-hero-pattern bg-no-repeat bg-right-top xl:bg-hero-xl lg:bg-hero-lg md:bg-hero-md xs:bg-hero-xs xl:h-640 lg:h-600 md:h-auto'>
      <div className='md:pt-16 xs:pt-7' />
      <div className='flex flex-wrap'>
        <div className='md:w-6/12 xs:w-full hero-left-padding'>
          <div className='block text-3.5xl font-bold text-dark'>
            <Title.H1 className='font-semibold'>
              {t('boost_your')}<br />{t('seo_rankings')}
            </Title.H1>
          </div>
          <div className='pt-1' />
          <div className='block'>
            <Title.H3 className='font-medium' children={t('with_atm_tools')} />
            <div className='pt-3' />
            <Text.Base children={t('hero_desc')} />
          </div>
          <div className='xs:hidden md:block'>
            <div className='pt-6' />
            {data ? (
              <> </>
            ) : (
              <Button.Orange children={t('get_started')} className='text-base xs:font-medium' onClick={openModal} />
            )}
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

export default HeroSection;
