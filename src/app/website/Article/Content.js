import React from 'react';
import { Container, Img, Text } from 'style-guide';
import { useTranslation } from 'react-i18next';
import ContentBanner from 'assets/blog/content-banner.png';
import ContentHero from 'assets/blog/content-hero.png';

const Content = () => {
  const { t } = useTranslation();
  return (
    <Container.Base>
      <div className='md:px-40 lg:px-48'>
        <div className='xs:pt-3 md:pt-10 md:hidden' />
        <Text.MD className='md:hidden' children={t('lorem')} />
        <div className='pt-8' />
        <Text.MD children={t('lorem')} />
        <Text.MD children={t('lorem')} />
        <div className='pt-8' />
        <Text.MD children={t('lorem')} />
        <Text.MD children={t('lorem')} />
        <div className='pt-10' />
        <Img.Static className='w-full' src={ContentBanner} />
        <div className='pt-10' />
        <Text.MD children={t('lorem')} />
        <Text.MD children={t('lorem')} />
        <div className='pt-10' />
        <Img.Static className='w-full' src={ContentHero} />
      </div>
    </Container.Base>
  );
};

export default Content;
