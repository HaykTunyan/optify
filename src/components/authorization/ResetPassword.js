import React, { Fragment } from 'react';
import { Title, Input, Button, Toast, Text, Container } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect, useLocation, useHistory } from 'react-router-dom';
import actions from 'store/actions';
import { MODALS, PATHS } from 'common';
import { common, urlHelper } from 'utils';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';

const { checkPassword } = common;

const onSubmit = ({ data, request, afterSuccess }) => {
  request({
    ...data,
    afterFail: (response) => Toast.notify.warn(response?.error?.message),
    afterSuccess,
  });
};

const ResetPassword = () => {
  // hooks
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm({
    resolver: yupResolver(schemas.resetPassword(t)),
    mode: 'onSubmit',
  });
  const { search } = useLocation();
  const token = urlHelper.getSearchParam({ search, key: 'token' });
  const userId = urlHelper.getSearchParam({ search, key: 'userId' });

  // actions
  const request = (data) => dispatch(actions.auth.resetPassword(data));
  const openSuccessModal = () =>
    dispatch(
      actions.ui.openModal({ type: MODALS.RESET_PASSWORD_SUCCESS, payload: { infoModal: true } })
    );

  const afterSuccess = () => {
    history.push(PATHS.HOMEPAGE);
    openSuccessModal();
  };

  const password = watch('password');
  const passwordInfo = checkPassword(password);

  if (!token || !userId) {
    return <Redirect to={PATHS.HOMEPAGE} />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('reset_password')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='py-6 w-600'>
        <div className='flex justify-between items-center px-8'>
          <Title.Base children={t('reset_password')} className='font-medium' />
        </div>
        <div className='pt-6' />
        <div className='w-full h-1px bg-divider' />
        <div className='pt-6' />
        <div className='px-6'>
          <form
            onSubmit={handleSubmit((data) =>
              onSubmit({ request, data: { ...data, token, userId }, afterSuccess })
            )}
            noValidate
          >
            <Input.Password
              autoFocus={true}
              tabIndex={1}
              name='password'
              labeltext={t('password')}
              labelclassname='font-medium text-lightBeta'
              autoComplete='new-password'
              rules={{
                required: t('password_required_msg'),
                minLength: {
                  value: 8,
                  message: t('password_min_length_msg'),
                },
                validate: {
                  criterias: (value) => checkPassword(value).isValid || t('invalid_password_msg'),
                },
              }}
              register={register}
              error={errors.password}
            />
            <div className='pt-1' />
            <Text.Tiny className='text-dark'>
              {t('pass_must_include')}:
              <span className='font-semibold'>
                &nbsp;
                <span
                  className={` ${
                    passwordInfo.capital ? 'border-success' : 'border-info'
                  } border-b-2  rounded-sm transition-all`}
                >
                  {t('capital_case')},
                </span>
                &nbsp;{' '}
                <span
                  className={` ${
                    passwordInfo.numeric ? 'border-success' : 'border-info'
                  } border-b-2  rounded-sm  transition-all`}
                >
                  {t('numeric')}
                </span>
              </span>
            </Text.Tiny>
            <div className='pt-5' />
            <Input.Base
              tabIndex={2}
              name='confirmPassword'
              labeltext={t('c_password')}
              labelclassname='font-medium text-lightBeta'
              type='password'
              autoComplete='new-password'
              rules={{
                required: t('c_password_required_msg'),
                validate: (value) => value === password || t('passwords_not_equal_msg'),
              }}
              register={register}
              error={errors.confirmPassword}
            />
            <div className='pt-3' />
            <div className='pt-8' />
            <div className='flex xs:justify-center xs:flex-col items-center'>
              <Button.Primary
                tabIndex={3}
                children={t('submit')}
                className='px-12 py-4 xs:w-full md:w-auto'
                type='submit'
              />
            </div>
          </form>
        </div>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default ResetPassword;
