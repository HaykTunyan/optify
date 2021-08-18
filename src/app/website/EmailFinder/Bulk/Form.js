import React from 'react';
import { Button, Text, Icon, Input, TagsAutocomplete } from 'style-guide';
import { useForm } from 'react-hook-form';
import { ErrorBlock } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from 'utils';

const Form = ({ resetData, loading, onSubmit, t, onFileUpload }) => {
  const { register, handleSubmit, errors, setError, setValue, clearErrors, control } = useForm({
    resolver: yupResolver(schemas.emailFinderBulk(t)),
    mode: 'onSubmit',
  });
  const errorMessage = errors.domains?.message;

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:gap-8 md:gap-5 xs:gap-8'>
        <div>
          <div>
            <Text.XL children={t('choose_whom_to_find')} />
            <div className='pt-5' />
          </div>
          <div className='flex md:flex-row xs:flex-col items-start'>
            <TagsAutocomplete
              control={control}
              name='proffesions'
              error={errors.proffesions}
              autofocus={true}
              randomOption={true}
              placeholderText={t('choose_proffesion')}
            />
          </div>
        </div>
        <div>
          <div>
            <Text.XL children={t('number_of_emails_per_domain')} />
            <div className='pt-5' />
          </div>
          <div className='flex md:flex-row xs:flex-col items-start'>
            <div className='md:flex-1 xs:w-full'>
              <Input.Base
                name='emailsPerDomain'
                type='number'
                defaultValue='1'
                register={register}
                error={errors.emailsPerDomain}
                className='h-12'
              />
            </div>
            <div className='xs:pt-4 md:pt-0 md:pl-5 lg:pl-8' />
          </div>
        </div>
      </div>
      <div className='pt-10' />
      <Input.TextArea
        name='domains'
        disabled={loading}
        placeholder={t('emails_placeholder')}
        labelclassname='text-dark font-semibold pb-4'
        className='text-sm border-lightAlpha border-1 rounded-15 px-4 py-5 h-450 resize-none focus:ring-primary focus:ring-2 focus:border-transparent'
        labeltext={<Text.XL children={t('domain')} />}
        error={errors.domains}
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
        <Button.Primary
          children={t('find_emails')}
          className='px-12 py-3 text-base'
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default Form;
