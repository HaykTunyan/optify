import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input, Icon, Button, Link, Text } from 'style-guide';
import { PATHS } from 'common';
import actions from 'store/actions';
import { validators, convert, common } from 'utils';
import { ErrorBlock } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'store/selectors';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

const UnsubscribersList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // hooks
  const { register, handleSubmit, errors, clearErrors, setError, setValue } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  // const request = null;
  const onFileUpload = ({ file, setError, setValue, t }) => {
    const isExtValid = common.checkExtension({ fileName: file.name });
    if (isExtValid) {
      convert.sheetToArray({
        file,
        cb: (values) => setValue('emails', values, { shoudValidate: true }),
      });
    } else {
      setError('file', { type: 'manual', message: t('wrong_extension_msg') });
    }
  };
  // selectors
  const { loading } = useSelector(selectors.email);

  const errorMessage = errors.emails?.message;
  const resetData = () => dispatch(actions.email.resetData());
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('unsubscribers_list')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='pt-8' />
        <Link.Internal
          to={PATHS.MAIL_LIST}
          className='flex items-center hover:underline md:hidden'
        >
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('my_emails')}
          />
        </Link.Internal>
        <div className='pt-8 md:hidden' />
        <Text.XL
          className='font-semibold text-primary md:hidden xs:text-1xl'
          children={t('unsubscribers_list')}
        />
        <div className='pt-5 md:hidden' />
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Input.TextArea
            name='emails'
            disabled={loading}
            placeholder={t('emails_placeholder')}
            labelclassname='text-dark font-semibold pb-4'
            className='placeholder-lightGray text-sm border-lightAlpha border-1 rounded-15 px-4 py-5 h-450 resize-none focus:ring-primary focus:ring-2 focus:border-transparent'
            labeltext={<Text.XL children={t('emails')} />}
            error={errors.emails}
            register={register}
            rules={{
              required: t('email_required_msg'),
              validate: (str) => {
                try {
                  if (!str.trim().length) {
                    throw t('email_required_msg');
                  }
                  const emailsArray = convert.csvToArray({ csv: str });
                  const isValid = emailsArray.every((em) => validators.email.test(em));
                  if (isValid) {
                    return true;
                  } else {
                    throw t('invalid_email_msg');
                  }
                } catch (err) {
                  return err;
                }
              },
            }}
          />
          <div className='pt-1' />
          {ErrorBlock(errorMessage)}
          <div className='pt-5' />
          <div className='flex justify-between'>
            <div>
              <button
                className='hover:border-primary border-2 border-transparent rounded-full'
                type='button'
              >
                <label htmlFor='file' title={t('upload_sheet')}>
                  <Icon.Upload className='fill-primary block w-12' />
                </label>
              </button>
              <Input.Base
                type='file'
                name='file'
                className='hidden'
                id='file'
                onChange={(e) => {
                  clearErrors();
                  resetData();
                  onFileUpload({ file: e.target.files[0], setError, setValue, t });
                  e.target.value = null;
                }}
                accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                multiple={false}
                register={register}
                error={errors.file}
              />
            </div>
          </div>
          <div className='pt-5' />
          <div className='flex justify-between'>
            <div>
              <Button.Secondary
                className='text-dark text-base py-3 px-10 xs:w-auto'
                type='reset'
                children={t('reset')}
              />
            </div>
            <div>
              <Button.Primary
                className='text-light text-base py-3 px-10 xs:w-auto'
                children={t('next')}
                type='submit'
              />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default UnsubscribersList;
