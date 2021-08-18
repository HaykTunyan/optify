import React, { useCallback, useEffect, Fragment } from 'react';
import { Button, Title } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation, useHistory } from 'react-router-dom';
import { useWindowResize } from 'hooks';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { MODALS, PATHS } from 'common';
import { urlHelper } from 'utils';
import { Helmet } from 'react-helmet-async';

const Verify = () => {
  // hooks
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { search } = useLocation();
  const { isMobile } = useWindowResize();
  const history = useHistory();
  // params
  const token = urlHelper.getSearchParam({ search, key: 'token' });
  const userId = urlHelper.getSearchParam({ search, key: 'userId' });
  // actions
  const request = useCallback(() => dispatch(actions.auth.verifyEmail({ token, userId })), [
    dispatch,
    token,
    userId,
  ]);
  const openSignInModal = () => dispatch(actions.ui.openModal({ type: MODALS.SIGN_IN }));
  const { isVerified, loaded } = useSelector(selectors.userVerification);

  const openSignIn = () => {
    if (isMobile) {
      history.push(PATHS.SIGN_IN);
    } else {
      history.push(PATHS.HOMEPAGE);
      openSignInModal();
    }
  };

  useEffect(() => {
    if (token && userId) request();
  }, [token, userId, request]);

  if (!token || !userId || (loaded && !isVerified)) {
    return <Redirect to={PATHS.HOMEPAGE} />;
  }

  return loaded ? (
    isVerified ? (
      <Fragment>
        <Helmet>
          <title>{`${t('verify')} | ${t('brand_name')}`}</title>
        </Helmet>
        <div className='text-center'>
          <div className='pt-24' />
          <Title.H1>{t('successfully_verifed')}</Title.H1>
          <div className='py-3' />
          <Button.Primary children={t('sign_in')} className='px-14 py-3' onClick={openSignIn} />
        </div>
      </Fragment>
    ) : null
  ) : (
    <div className='text-center'>
      <div className='pt-24' />
      <Title.H1>{t('please_wait')}</Title.H1>
      <Title.H4>{t('verifying')}...</Title.H4>
    </div>
  );
};

export default Verify;
