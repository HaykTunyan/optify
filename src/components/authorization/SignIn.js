import React, { Fragment } from 'react';
import { Title, Input, Button, Text, Toast } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useWindowResize } from 'hooks';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';
import { PATHS, MODALS } from 'common';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ data, request, afterSuccess }) => {
  request({
    ...data,
    afterFail: (response) => Toast.notify.warn(response?.error?.message),
    afterSuccess: () => afterSuccess({ data }),
  });
};

const SignIn = ({ closeModal }) => {
  // hooks
  const { isMobile } = useWindowResize();
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.signIn(t)),
    mode: 'onSubmit',
  });
  // actions
  const request = (data) => dispatch(actions.auth.signIn(data));
  // TODO implement remember functional
  // const signOut = () => dispatch(actions.auth.signOut());
  const openSignUpModal = () => dispatch(actions.ui.openModal({ type: MODALS.SIGN_UP }));
  const openForgotPassModal = () =>
    dispatch(actions.ui.openModal({ type: MODALS.FORGOT_PASSWORD }));

  const onForgotPassClick = () => {
    if (isMobile) {
      history.push(PATHS.FORGOT_PASSWORD);
    } else {
      closeModal();
      openForgotPassModal();
    }
  };

  const onSignUpClick = () => {
    if (isMobile) {
      history.push(PATHS.SIGN_UP);
    } else {
      closeModal();
      openSignUpModal();
    }
  };

  const afterSuccess = ({ data }) => {
    if (isMobile) {
      history.push(PATHS.HOMEPAGE);
    } else {
      closeModal();
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('sign_in')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='xs:pt-8 md:pt-0' />
        <Title.Base
          children={t('sign_in')}
          className='text-primary tracking-tight md:hidden font-semibold'
        />
        <div className='pt-4' />
        <div className='xs:pt-0 md:pt-4' />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ data, request, afterSuccess }))}
          noValidate
        >
          <div>
            <Input.Base
              name='email'
              type='email'
              autoComplete='email'
              autoFocus={true}
              tabIndex={1}
              labeltext={t('email')}
              placeholder={t('email_placeholder')}
              labelclassname='text-dark font-medium border-0'
              register={register}
              error={errors.email}
            />
            <div className='pt-5' />
            <Input.Password
              name='password'
              tabIndex={2}
              placeholder='******'
              labeltext={t('password')}
              labelclassname='text-dark font-medium'
              autoComplete='current-password'
              register={register}
              error={errors.password}
            />
          </div>
          <div className='pt-3' />
          <div className='flex justify-between'>
            <span>
              <Input.Checkbox
                tabIndex={3}
                name='remember'
                register={register}
                error={errors.remember}
                labeltext={<Text.SM className='xs:font-normal' children={t('remember_me')} />}
                labelclassname='text-dark'
              />
            </span>
            <Button.Base onClick={onForgotPassClick} type='button' tabIndex={4}>
              <Text.XS className='text-primary font-medium leading-0'>
                {t('forgot_password')} ?{' '}
              </Text.XS>
            </Button.Base>
          </div>
          <div className='pt-8' />
          <div className='flex xs:justify-center xs:flex-col md:flex-row md:justify-between items-center'>
            <Button.Primary
              tabIndex={4}
              children={t('sign_in')}
              className='px-12 py-4 xs:w-full md:w-auto xs:font-medium'
              type='submit'
            />
            <div className='xs:pt-8 md:pt-0' />
            <Text.Base className='text-dark cursor-pointer font-medium' onClick={onSignUpClick}>
              {t('still_not_user')} &nbsp;
              <span className='text-primary font-semibold' children={t('sign_up')} />
            </Text.Base>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignIn;
