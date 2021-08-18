import React from 'react';
import { Text, Input, Button } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { validators } from 'utils';

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

const Contact = () => {
  // hooks
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  const request = null;

  return (
    <div className='shadow-layout rounded-22 md:py-8 md:px-14 xs:py-4 xs:px-4'>
      <div className='contact-title'>
        <div className='text-2xl font-bold'>{t('we_are_open_for_coop')}</div>
        <div className='pt-3' />
        <Text.MD children={t('we_are_open_titile')} />
      </div>
      <div className='md:pt-7' />
      <form onSubmit={handleSubmit((data) => onSubmit({ request, data }))} noValidate>
        <div className='flex flex-wrap'>
          <div className='xs:w-full md:w-6/12'>
            <Input.Base
              autoComplete='name'
              name='fullName'
              labeltext={t('full_name')}
              labelclassname='text-dark font-semibold'
              placeholder={t('about_contact_name_placeholder')}
              register={register}
              error={errors.fullName}
              rules={{ required: t('full_name_required_msg') }}
            />
            <div className='pt-5' />
            <Input.Base
              autoComplete='organization'
              name='companyName'
              labeltext={t('company_name')}
              labelclassname='text-dark font-semibold'
              placeholder={t('about_contact_company_placeholder')}
              register={register}
              error={errors.companyName}
              rules={{ required: t('c_name_required_msg') }}
            />
            <div className='pt-5' />
            <Input.Base
              autoComplete='email'
              name='email'
              type='email'
              labeltext={t('email')}
              labelclassname='text-dark font-semibold'
              placeholder={t('email_placeholder')}
              rules={{
                required: t('email_required_msg'),
                pattern: {
                  value: validators.email,
                  message: t('invalid_email_msg'),
                },
              }}
              register={register}
              error={errors.email}
            />
          </div>
          <div className='xs:w-full md:w-6/12 md:pl-7'>
            <div className='xs:pt-5 md:pt-0' />
            <Input.TextArea
              name='message'
              labeltext={t('message')}
              className='resize-none h-279'
              labelclassname='text-dark font-semibold'
              placeholder={t('about_contact_message_placeholder')}
              register={register}
              error={errors.message}
              rules={{ required: t('message_required_msg') }}
            />
          </div>
        </div>
        <div className='md:pt-8' />
        <div className='flex flex-wrap items-center'>
          <div className='flex xs:w-full justify-between md:w-6/12'>
            <span>
              <div className='xs:pt-5 md:pt-0' />
              <Input.Checkbox
                name='robot'
                register={register}
                error={errors.robot}
                rules={{ required: t('not_robot_required_msg') }}
                labelclassname='text-dark'
                labeltext={<Text.SM>{t('i_am_not_robot')}</Text.SM>}
              />
            </span>
          </div>
          <div className='flex xs:w-full md:w-6/12 md:justify-end xs:pt-4 md:pt-0'>
            <Button.Primary
              children={t('send')}
              className='md:text-base px-14 py-3 xs:w-full md:w-auto'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
