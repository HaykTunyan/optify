import React from 'react';
import { Button, Text, Icon, Input } from 'style-guide';
import { useForm } from 'react-hook-form';
import { ErrorBlock } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from 'utils';

const Form = ({ resetData, loading, onSubmit, t, onFileUpload }) => {
  // hooks
  const { register, handleSubmit, errors, setError, setValue, clearErrors } = useForm({
    resolver: yupResolver(schemas.emailVeriferBulk(t)),
    mode: 'onSubmit',
  });

  const errorMessage = errors.emails?.message;
  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Input.TextArea
        autoFocus={true}
        name='emails'
        disabled={loading}
        placeholder={t('emails_placeholder')}
        labelclassname='text-dark font-semibold pb-4'
        className='placeholder-lightGray text-sm border-lightAlpha border-1 rounded-15 px-4 py-5 h-450 resize-none focus:ring-primary focus:ring-2 focus:border-transparent'
        labeltext={<Text.XL children={t('emails')} />}
        error={errors.emails}
        register={register}
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
              // clear input value after change
              e.target.value = null;
            }}
            accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
            multiple={false}
            register={register}
            error={errors.file}
          />
        </div>
        <Button.Primary children={t('check')} className='px-12 py-3 text-base xs:font-medium' disabled={loading} />
      </div>
    </form>
  );
};

export default Form;
