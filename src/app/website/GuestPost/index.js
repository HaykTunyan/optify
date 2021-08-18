import React, { Fragment } from 'react';
import { Container } from 'style-guide';
import { SectionTitle } from 'components';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { withLazy } from 'hocs';
import { useForm } from 'react-hook-form';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';
import { MODALS, PATHS } from 'common';
import { Helmet } from 'react-helmet-async';
import { useWindowResize } from 'hooks';
// components
const DomainMetrics = withLazy(import('components/DomainMetrics'));
const PageMetrics = withLazy(import('components/PageMetrics'));
const AdvancedMetrics = withLazy(import('components/AdvancedMetrics'));
const ProffesionMetrics = withLazy(import('components/ProffesionMetrics'));
const WebsiteMetricsGuestPost = withLazy(import('components/WebsiteMetricsGuestPost'));
const QuestionBacklink = withLazy(import('components/Question/Backlink'));
const QuestionExchange = withLazy(import('components/Question/Exchange'));
const Exchange = withLazy(import('components/Exchange'));
const Submit = withLazy(import('components/Submit'));

const onSubmit = ({ request, data, afterSuccess }) => {
  afterSuccess();
  console.log(data);
};

const GuestPost = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowResize();
  const { register, handleSubmit, errors, control, watch, reset } = useForm({
    resolver: yupResolver(schemas.guestPost(t)),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const openUnsubscirbersListModal = () => {
    if(isMobile){
      history.push(PATHS.UNSUBSCRIBERS_LIST);
    }else {
      dispatch(actions.ui.openModal({ type: MODALS.UNSUBSCRIBERS_LIST }));
    }
  }
    
  const request = null;

  const giveBacklink = watch('backlink');
  const exchangeType = watch('exchangeType');
  const afterSuccess = () => {
    history.push(PATHS.CHOOSE_TEMPLATE);
  };

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('guest_post')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='xs:pt-6 xs:pb-6 lg:pt-6 lg:pb-10 xl:pb-8'>
        <SectionTitle
          titleText={t('domain_metrics')}
          buttonText={t('unsubscribers_list')}
          onButtonClick={openUnsubscirbersListModal}
        />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data, afterSuccess }))}
          noValidate
          className='md:px-5'
        >
          <DomainMetrics t={t} register={register} errors={errors} />
          <div className='pt-8' />
          <PageMetrics t={t} register={register} errors={errors} control={control} watch={watch} />
          <div className='pt-8' />
          <AdvancedMetrics t={t} register={register} errors={errors} watch={watch} />
          <div className='pt-8' />
          <ProffesionMetrics t={t} control={control} errors={errors} />
          <div className='pt-8' />
          <WebsiteMetricsGuestPost t={t} register={register} errors={errors} />
          <div className='pt-8' />
          <div className={giveBacklink ? 'hidden' : ''}>
            <QuestionBacklink t={t} register={register} />
          </div>
          <div className={giveBacklink ? (exchangeType ? 'hidden' : '') : 'hidden'}>
            <QuestionExchange t={t} register={register} />
          </div>
          <div className={exchangeType ? 'visible' : 'hidden'}>
            <Exchange
              t={t}
              register={register}
              errors={errors}
              type={exchangeType}
              title={t(`${exchangeType}_exchange`)}
            />
            <Submit t={t} register={register} errors={errors} reset={reset} />
          </div>
        </form>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default GuestPost;
