import React, { Fragment } from 'react';
import { Title, Input, Button, Toast } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useWindowResize } from 'hooks';
import actions from 'store/actions';
import { MODALS, PATHS } from 'common';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ data, request, afterSuccess }) => {
  request({
    ...data,
    afterFail: (response) => Toast.notify.warn(response?.error?.message),
    afterSuccess,
  });
};

const ForgotPassword = () => {
  // hooks
  const { t } = useTranslation();
  const history = useHistory();
  const { isMobile } = useWindowResize();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.forgotPassword(t)),
    mode: 'onSubmit',
  });
  // actions
  const request = (data) => dispatch(actions.auth.forgotPassword(data));
  const closeForgotPassModal = () => dispatch(actions.ui.closeModal({ type: MODALS.SIGN_UP }));
  const openSuccessModal = () =>
    dispatch(
      actions.ui.openModal({ type: MODALS.FORGOT_PASSWORD_SUCCESS, payload: { infoModal: true } })
    );

  const afterSuccess = () => {
    if (isMobile) {
      history.push(PATHS.HOMEPAGE);
    } else {
      closeForgotPassModal();
    }
    openSuccessModal();
  };

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('forgot_password')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='xs:pt-8 md:pt-0' />
        <Title.Base
          children={t('forgot_password')}
          className='text-primary tracking-tight md:hidden font-semibold'
        />
        <div className='pt-4' />
        <div className='xs: pt-0 md:pt-4' />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data, afterSuccess }))}
          noValidate
        >
          <Input.Base
            autoFocus={true}
            tabIndex={1}
            name='email'
            type='email'
            labeltext={t('email')}
            placeholder={t('email_placeholder')}
            labelclassname='text-dark font-semibold'
            autoComplete='email'
            register={register}
            error={errors.email}
          />
          <div className='pt-3' />
          <div className='pt-8' />
          <div className='flex xs:justify-center xs:flex-col items-center'>
            <Button.Primary
              children={t('submit')}
              tabIndex={2}
              className='px-12 py-4 xs:w-full md:w-auto'
              type='submit'
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
