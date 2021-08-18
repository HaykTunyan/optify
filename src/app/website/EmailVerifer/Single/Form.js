import React, { Fragment } from 'react';
import { Button, Text, Input } from 'style-guide';
import { ErrorBlock } from 'components';
import { useForm } from 'react-hook-form';
import { useWindowResize } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from 'utils';

const Form = ({ onSubmit, loading, failed, loaded, data, resetData, t }) => {
  // hooks
  const { isMobile } = useWindowResize();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.emailVeriferSingle(t)),
  });

  const isValid = data?.isValid;
  const validationError = errors.email?.message;
  const notExistError = loaded && !isValid && t('email_not_exist');
  const errorMessage = validationError || notExistError;

  return (
    <Fragment>
      <form
        className='flex xs:flex-col xs:items-center md:flex-row md:items-end'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='xs:w-full md:w-415'>
          <Input.Status
            autoFocus={true}
            onChange={data && resetData}
            type='email'
            name='email'
            disabled={loading}
            loading={loading}
            success={loaded && !failed && isValid}
            placeholder={t('email_placeholder')}
            labeltext={<Text.XL children={t('email')} />}
            className='focus:ring-primary focus:ring-2 focus:border-transparent'
            labelclassname='pb-4'
            register={register}
            error={errors.email}
          />
        </div>
        <div className='xs:pt-5 md:pt-0 md:pl-8' />
        {isMobile ? ErrorBlock(errorMessage) : null}
        <Button.Primary
          children={t('check')}
          className='px-8 py-4 text-base xs:w-full md:w-auto xs:font-medium'
          type='submit'
          disabled={loading}
        />
      </form>
      <div className='md:pt-5' />
      {!isMobile ? ErrorBlock(errorMessage) : null}
    </Fragment>
  );
};

export default Form;
