import React, { Fragment } from 'react';
import { Container } from 'style-guide';
import { useTranslation } from 'react-i18next';
// sections
import HeroSection from './HeroSection';
import ChooseYourKeyword from './ChooseYourKeyword';
import ChooseTemplate from './ChooseTemplate';
import ChooseYourWayOfMagic from './ChooseYourWayOfMagic';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('homepage')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <HeroSection t={t} />
        <div className='xs:pt-10 md:pt-20' />
        <Container.Base>
          <ChooseYourKeyword t={t} />
        </Container.Base>
        <div className='xs:pt-20 md:pt-32' />
        <ChooseTemplate t={t} />
        <div className='pt-14' />
        <Container.Base>
          <ChooseYourWayOfMagic t={t} />
        </Container.Base>
        <div className='md:pt-32 xs:pt-24' />
      </div>
    </Fragment>
  );
};
export default Homepage;
