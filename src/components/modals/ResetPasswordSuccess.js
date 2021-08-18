import React, { Fragment } from 'react';
import { Title, Button } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useWindowResize } from 'hooks';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from 'store/actions';
import { MODALS } from 'common';
import { PATHS } from 'common';
import { Helmet } from 'react-helmet-async';

const ResetPasswordSuccess = ({ closeModal }) => {
  // hooks
  const { isMobile } = useWindowResize();
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // actions
  const openSignInModal = () => dispatch(actions.ui.openModal({ type: MODALS.SIGN_IN }));
  const onClickSignIn = () => {
    closeModal();
    if (isMobile) {
      history.push(PATHS.SIGN_IN);
    } else {
      openSignInModal();
    }
  };
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('reset_password')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='text-center'>
        <div className='pt-4' />
        <Title.H3
          children={t('reset_password_success')}
          className='text-primary block font-semibold text-center'
        />
        <div className='pt-6' />
        <Button.Primary children={t('sign_in')} className='px-16 py-3' onClick={onClickSignIn} />
      </div>
    </Fragment>
  );
};

export default ResetPasswordSuccess;
