import React, { Fragment } from 'react';
import { Button, Title, Text } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const RegisterSuccess = ({ closeModal }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('sign_up_success')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='text-center'>
        <div className='pt-4' />
        <Title.H3 children={t('sign_up_success')} className='text-primary block font-semibold' />
        <div className='pt-2' />
        <Text.LG children={t('check_email_for_instructions')} />
        <div className='pt-6' />
        <Button.Primary children={t('ok')} className='px-16 py-3' onClick={closeModal} />
      </div>
    </Fragment>
  );
};

export default RegisterSuccess;
