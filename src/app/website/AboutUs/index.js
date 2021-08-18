import React, { Fragment } from 'react';
import { Container } from 'style-guide';
import HeroSection from './HeroSection';
import Better from './Better';
import Contact from './Contact';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('about_us')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <HeroSection />
        <div className='xs:pt-16 md:pt-20' />
        <Container.Base>
          <Better />
        </Container.Base>
        <div className='xs:pt-10 md:pt-20' />
        <Container.Base>
          <Contact />
        </Container.Base>
        <div className='pb-10'></div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
