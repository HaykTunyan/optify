import React, { useEffect, Fragment } from 'react';
import { Text, Icon } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'common';
import { useSelector } from 'react-redux';
import selectors from 'store/selectors';
import { Helmet } from 'react-helmet-async';

const PurchaseSuccess = ({ closeModal }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { modal } = useSelector(selectors.ui);
  const { payload } = modal;

  useEffect(() => {
    return () => history.push(PATHS.MAIL_LIST);
  }, [history]);

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('purchase_success')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <Icon.Checked className='w-12 block mx-auto' />
        <div className='pt-3' />
        <div className='px-10 text-center'>
          <Text.Base
            children={t('purchase_success_title')}
            className='flex-1 pl-2 text-lgx flex justify-end font-semibold text-succesAlpha'
          />
          <div className='pt-5' />
          <div className='flex items-center'>
            <Text.Base children={t('pricing_plan')} className='font-semibold' />
            <Text.Base
              children={`${payload?.plan?.title} Credit for ${payload?.plan?.price}`}
              className='flex-1 pl-2 flex justify-end font-semibold'
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PurchaseSuccess;
