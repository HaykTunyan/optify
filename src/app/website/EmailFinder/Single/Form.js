import React, { Fragment } from 'react';
import { Button, Input } from 'style-guide';
import { ErrorBlock } from 'components';
import { useWindowResize } from 'hooks';

const Form = ({ t, register, errors, handleSubmit, loading }) => {
  const { isMobile } = useWindowResize();
  const validationError = errors.domain?.message;
  return (
    <Fragment>
      <form
        className='flex xs:flex-col xs:items-center md:flex-row justify-between md:items-end'
        noValidate
        autoComplete='off'
        // onSubmit({ data, request }
        onSubmit={handleSubmit}
      >
        <div className='xs:w-full md:w-415'>
          <Input.Base
            autoFocus={true}
            type='url'
            name='domain'
            register={register}
            placeholder={t('paste_domain_here')}
            className='focus:ring-primary focus:ring-2 focus:border-transparent'
          />
        </div>
        <div className='xs:pt-5 md:pt-0 md:pl-8' />
        {isMobile ? ErrorBlock(validationError) : null}
        <Button.Primary
          children={t('find_emails')}
          className='px-8 py-4 text-base xs:w-full md:w-auto'
          type='submit'
          disabled={loading}
        />
      </form>
      <div className='md:pt-5' />
      {!isMobile ? ErrorBlock(validationError) : null}
    </Fragment>
  );
};

export default Form;
