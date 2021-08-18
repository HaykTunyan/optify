import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import selectors from 'store/selectors';
import { Container, Title } from 'style-guide';
import { PATHS } from 'common';
import { urlHelper } from 'utils';
import Form from './Form';
import { Helmet } from 'react-helmet-async';

const PaymentDetails = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const id = urlHelper.getSearchParam({ key: 'id', search });
  const { planById } = useSelector(selectors.pricing);
  const plan = planById(id);

  if (!plan) {
    return <Redirect to={PATHS.PRICING} />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('payment_details')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='py-9 px-8'>
      <div className='flex flex-wrap'>
        <Title.H5 children={t('pricing_plan')} className='font-semibold' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Title.H5 className='font-semibold'>
          <span className='text-primary' children={plan?.title} />
          &nbsp;&nbsp;
          <span children={t('credit_for')} />
          &nbsp;&nbsp;
          <span className='text-primary' children={plan?.price} />
        </Title.H5>
      </div>
      <div className='pt-10' />
      <Form plan={plan} />
    </Container.BaseShadow>
    </Fragment>
  );
};

export default PaymentDetails;
