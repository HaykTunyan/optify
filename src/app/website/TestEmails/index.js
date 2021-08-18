
import React, { Fragment } from 'react';
import { Container, Button, Title } from 'style-guide';
import { SectionTitle } from 'components';
import { withLazy } from 'hocs';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { MODALS } from 'common';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';

const SendingDays = withLazy(import('./SendingDays'));
const FollowUpDays = withLazy(import('./FollowUpDays'));
const EmailsPerDay = withLazy(import('./EmailsPerDay'));

const onSubmit = ({ data, afterSuccess }) => {
  afterSuccess();
  console.log(data);
};

const TestEmails = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory

  const { register, handleSubmit, errors, control, watch, setError, clearErrors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  const request = null;

  const openCooperationSuccessModal = () =>
    dispatch(
      actions.ui.openModal({ type: MODALS.COOPERATION_SUCCESS, payload: { infoModal: true } })
    );
  const afterSuccess = openCooperationSuccessModal;

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('test_emails')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='xs:pt-6 xs:pb-6 lg:pt-6 lg:pb-10 xl:pb-8'>
        <SectionTitle titleText={t('test_emails')} />
        <div className='pt-8' />
        <div className='text-center'>
          <Title.Base>
            {t('we_found')} &nbsp;
            <span className='text-primary font-bold'>200</span>
            &nbsp;
            {t('potencial_cooperations')}
          </Title.Base>
        </div>
        <div className='pt-8' />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data, afterSuccess }))}
          noValidate
          className='md:px-5'
        >
          <SendingDays
            control={control}
            register={register}
            errors={errors}
            watch={watch}
            setError={setError}
            clearErrors={clearErrors}
          />
          <div className='pt-8' />
          <div className='h-1px bg-divider w-full' />
          <div className='pt-8' />
          <FollowUpDays control={control} errors={errors} />
          <div className='pt-8' />
          <div className='h-1px bg-divider w-full' />
          <div className='pt-8' />
          <EmailsPerDay control={control} register={register} errors={errors} />
          <div className='pt-8' />
          <div className='flex justify-between'>
            <Button.Secondary type='button' className='py-3 px-14' children={t('back')} onClick={ () => window.history.back() } />
            <Button.Primary type='submit' className='py-3 px-14' children={t('submit')} />
          </div>
        </form>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default TestEmails;
