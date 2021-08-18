import React, { useEffect, useCallback, Fragment } from 'react';
import { Text } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from 'store/actions';
import { PATHS } from 'common';
import selectors from 'store/selectors';
import { Helmet } from 'react-helmet-async';

const SignOut = () => {
  // hooks
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data } = useSelector(selectors.user);

  // actions
  const signOut = useCallback(() => dispatch(actions.auth.signOut()), [dispatch]);

  useEffect(() => {
    data && window.setTimeout(signOut, 1000);
  }, [data, signOut]);
  // on logout redirect to homepage
  if (!data) {
    return <Redirect to={PATHS.HOMEPAGE} />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('sign_out')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='text-center'>
        <div className='pt-24' />
        <Text.Base>{t('signing_out')}...</Text.Base>
      </div>
    </Fragment>
  );
};

export default SignOut;
