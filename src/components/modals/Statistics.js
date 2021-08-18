import React, { useEffect, useCallback, Fragment } from 'react';
import { DatePicker, Chart, Text, Link, Icon } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';
import { DateTime } from 'luxon';
import { PATHS } from 'common';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ data, request, afterSuccess }) => {
  // request({ ...data });
  alert('request to backend');
  afterSuccess(data);
};

const Statistics = ({ closeModal }) => {
  // hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleSubmit, errors, control, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  // actions
  const request = useCallback((data) => dispatch(actions.mailing.addLabel(data)), [dispatch]);
  const afterSuccess = (data) => console.log(data);
  const startDate = watch('start');
  const endDate = watch('end');

  useEffect(() => {
    startDate && endDate && handleSubmit((data) => onSubmit({ request, data, afterSuccess }))();
  }, [startDate, endDate, handleSubmit, request]);

  const validate = () =>
    (startDate &&
      endDate &&
      DateTime.fromJSDate(startDate).toMillis() < DateTime.fromJSDate(endDate).toMillis()) ||
    t('invalid_date_range_msg');

  const hasError = errors.start && errors.end;
  const errorMessage = hasError && errors.end.message;

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('statistics')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='xs:w-full md:w-540'>
        <div className='pt-5' />
        <Link.Internal to={PATHS.MAIL_LIST} className='flex items-center hover:underline md:hidden'>
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('my_emails')}
          />
        </Link.Internal>
        <div className='pt-8' />
        <form noValidate>
          <DatePicker.Range
            control={control}
            t={t}
            minDefaultValue={null}
            maxDefaultValue={null}
            rules={{ validate }}
            className='p-4'
          />
        </form>
        {hasError ? (
          <Fragment>
            <div className='xs:pt-8 md:pt-2' />
            <Text.Error children={errorMessage} />
          </Fragment>
        ) : null}
        <div className='xs:pt-8 md:pt-2' />
        <div className='rounded-22 border-1 relative z-0 border-lightAlpha p-2 bg-white h-300'>
          <div className='w-full h-full'>
            <Chart />
          </div>
          <div className='flex items-center bg-blue px-4 py-2 rounded-15 mt-4 mr-4 w-40 absolute right-0 top-0 z-10'>
            <Text.XS
              children='Number of sent emails'
              className='w-20 font-semibold text-white leading-4'
            />
            <div className='pl-2' />
            <Text.LG children='324' className='text-white' />
          </div>
        </div>
        <div className='pt-4' />
        <div className='grid  md:grid xs:grid-flow-row grid-cols-3'>
          <div className='flex md:gap-2 xs:gap-1 xs:mt-3 md:mt-0'>
            <div className='rounded-full w-5 h-5 bg-gradient-primary' />
            <Text.SM children='Open Rate' className='font-normal tracking-tighter' />
          </div>
          <div className='flex md:gap-2 xs:gap-1 xs:mt-3 md:mt-0'>
            <div className='rounded-full w-5 h-5 bg-gradient-alpha' />
            <Text.SM children='Answer Rate' className='font-normal tracking-tighter' />
          </div>
          <div className='flex md:gap-2 xs:gap-1 xs:mt-3 md:mt-0'>
            <div className='rounded-full w-5 h-5 bg-gradient-beta' />
            <Text.SM children='Unsubscriptions' className='font-normal tracking-tighter' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Statistics;
