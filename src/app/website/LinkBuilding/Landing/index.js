import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'style-guide';
// Components
import HeroSection from './HeroSection';
import Outreach from './Outreach';
import Section from './Section';

const LinkBulding = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HeroSection t={t} />
      <div className='xs:pt-14 md:pt-20' />
      <Section t={t} />
      <Container.Base>
        <Outreach t={t} />
      </Container.Base>
    </div>
  );
};

export default LinkBulding;
