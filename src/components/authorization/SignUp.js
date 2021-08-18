import React, { Fragment } from 'react';
import { Title, Input, Select, Button, Text, Toast, Link } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useWindowResize } from 'hooks';
import { useHistory } from 'react-router-dom';
import actions from 'store/actions';
import { PATHS, MODALS } from 'common';
import { common, schemas } from 'utils';
import countries from 'common/countries';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ data, request, afterSuccess }) => {
  request({
    ...data,
    afterFail: (response) => Toast.notify.warn(response?.error?.message),
    afterSuccess,
  });
};

const SignUp = ({ closeModal }) => {
  // hooks
  const history = useHistory();
  const { isMobile } = useWindowResize();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm({
    resolver: yupResolver(schemas.signUp(t)),
    mode: 'onSubmit',
  });
  // actions
  const request = (data) => dispatch(actions.auth.signUp(data));
  const closeSignUpModal = () => dispatch(actions.ui.closeModal({ type: MODALS.SIGN_UP }));
  const openSuccessModal = () =>
    dispatch(actions.ui.openModal({ type: MODALS.SIGN_UP_SUCCESS, payload: { infoModal: true } }));

  const afterSuccess = () => {
    if (isMobile) {
      history.push(PATHS.SIGN_IN);
    } else {
      closeSignUpModal();
    }
    openSuccessModal();
  };

  const password = watch('password');
  const passwordInfo = common.checkPassword(password);

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('sign_up')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='xs:pt-8 md:pt-0' />
        <Title.Base
          children={t('sign_up')}
          className='text-primary tracking-tight md:hidden font-semibold'
        />
        <div className='pt-4' />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data, afterSuccess }))}
          noValidate
        >
          <div>
            <Input.Base
              tabIndex={1}
              autoFocus={true}
              name='email'
              labeltext={t('email')}
              placeholder={t('email_placeholder')}
              autoComplete='email'
              labelclassname='font-medium text-lightBeta'
              type='email'
              register={register}
              error={errors.email}
            />
            <div className='pt-5' />
            <Input.Base
              tabIndex={2}
              name='firstName'
              labeltext={t('firstname')}
              labelclassname='font-medium text-lightBeta'
              autoComplete='given-name'
              type='text'
              register={register}
              error={errors.firstName}
            />
            <div className='pt-5' />
            <Input.Base
              tabIndex={3}
              name='lastName'
              labeltext={t('lastname')}
              labelclassname='font-medium text-lightBeta'
              autoComplete='family-name'
              type='text'
              register={register}
              error={errors.lastName}
            />
            <div className='pt-5' />
            <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <Select.Base
                  tabIndex={4}
                  name='country'
                  options={countries.map((c) => ({ text: c.name, value: c.name }))}
                  labelclassname='pb-2 block font-medium text-lightBeta'
                  labeltext={t('country')}
                  register={register}
                  error={errors.country}
                />
              </div>
              <div>
                <Input.Base
                  tabIndex={5}
                  name='city'
                  labelclassname='pb-2 block font-medium text-lightBeta'
                  labeltext={t('city')}
                  register={register}
                  error={errors.city}
                />
              </div>
            </div>
            <div className='pt-5' />
            <Input.Password
              tabIndex={6}
              name='password'
              labeltext={t('password')}
              labelclassname='font-medium text-lightBeta'
              autoComplete='new-password'
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
                  } border-b-2 rounded-sm transition-all`}
                >
                  {t('capital_case')},
                </span>
                &nbsp;
                <span
                  className={` ${
                    passwordInfo.numeric ? 'border-success' : 'border-info'
                  } border-b-2 rounded-sm  transition-all`}
                >
                  {t('numeric')}
                </span>
              </span>
            </Text.Tiny>
            <div className='pt-5' />
            <Input.Base
              tabIndex={7}
              name='confirmPassword'
              labeltext={t('c_password')}
              labelclassname='font-medium text-lightBeta'
              type='password'
              autoComplete='new-password'
              register={register}
              error={errors.confirmPassword}
            />
          </div>

          <div className='pt-3' />
          <div className='flex items-center'>
            <Input.Checkbox
              tabIndex={8}
              name='tacAgreed'
              register={register}
              error={errors.tacAgreed}
              labelclassname='text-dark'
              labeltext={
                <Text.Tiny>
                  {t('i_agree_to')}{' '}
                  <span className='font-bold'>
                    <Link.External className='underline' path={`${PATHS.TERMS_CONDITIONS}`}>
                      {t('t_c')}
                    </Link.External>
                  </span>
                </Text.Tiny>
              }
            />
          </div>
          <div className='pt-5' />
          <div className='flex xs:justify-center xs:flex-col md:flex-row md:justify-between items-center'>
            <Button.Secondary
              tabIndex={9}
              children='Cancel'
              className='px-12 py-4 xs:hidden md:block'
              onClick={closeModal}
              type='button'
            />
            <div className='xs:pt-4 md:hidden' />
            <Button.Primary
              tabIndex={10}
              children='Submit'
              className='px-12 py-4 xs:w-full md:w-auto'
              type='submit'
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
