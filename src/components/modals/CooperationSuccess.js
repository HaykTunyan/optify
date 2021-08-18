import React, { useEffect, Fragment } from 'react';
import { Button, Text, Link, Icon } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'common';
import { Helmet } from 'react-helmet-async';

const CooperationSuccess = ({ closeModal }) => {
  const { t } = useTranslation();
  const history = useHistory();

  // after modal close navigate to homepage
  useEffect(() => {
    return () => history.push(PATHS.MAIL_LIST);
  }, [history]);

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('your_cooperation_sent_success')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='pt-5' />
        <Link.Internal to={PATHS.MAIL_LIST} className='flex items-center hover:underline md:hidden'>
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('my_emails')}
          />
        </Link.Internal>
        <div className='text-center'>
          <div className='pt-4' />
          <Text.Base
            children={t('your_cooperation_sent_success')}
            className='text-primary block font-semibold text-2xl'
          />
          <div className='pt-5' />
          <div className='flex justify-center'>
            <Button.Primary children={t('ok')} className='px-16 py-3' onClick={closeModal} />
          </div>
          <div className='pb-2' />
        </div>
      </div>
    </Fragment>
  );
};

export default CooperationSuccess;
