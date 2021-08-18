import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('not_found_than')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='text-center w-screen mt-24'>
        <h1 className='text-7xl font-black'>404</h1>
        <h2 className='text-4xl font-bold'>Page not found</h2>
      </div>
    </Fragment>
  );
};
export default Page404;
