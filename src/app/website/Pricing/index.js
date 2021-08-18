import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title, Text } from 'style-guide';
import Card from './Card';
import { useSelector } from 'react-redux';
import selectors from 'store/selectors';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
  const { t } = useTranslation();
  const { plans } = useSelector(selectors.pricing);
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('pricing')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='my-10'>
        <Container.Base>
          <div className='md:shadow-layout rounded-22'>
            <div className='md:pt-8' />
            <div className='text-center flex flex-col'>
              <Title.Base className='text-dark font-bold xs:text-xl' children={t('pricing_plan')} />
              <div className='pt-2' />
              <Text.MD className='xs:text-lg xs:font-normal' children={t('pricing_chuoose')} />
            </div>
            <div className='pt-8' />
            <div className='grid xs:grid-cols-1 lg:grid-cols-3 xl:gap-6 lg:gap-3 xs:gap-8 px-8 pb-8 h-100'>
              {plans.map((plan) => (
                <Card t={t} {...plan} key={plan.id} />
              ))}
            </div>
          </div>
        </Container.Base>
      </div>
    </Fragment>
  );
};

export default Pricing;
