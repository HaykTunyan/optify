import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
// style guide
import { Link, Icon, Text, Input, Button } from 'style-guide';
import { PATHS } from 'common';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

const TestTemplate = () => {
  const { t } = useTranslation();
  // hooks
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  const request = null;

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('test_template')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='pt-5 md:hidden' />
        <Link.Internal
          to={PATHS.TEST_TEMPLATE}
          className='flex items-center hover:underline md:hidden'
        >
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('template')}
          />
        </Link.Internal>
        <div className='pt-8 md:hidden' />
        <Text.XL
          className='font-semibold text-primary md:hidden xs:text-xl'
          children={t('test_email')}
        />
        <form onSubmit={handleSubmit((data) => onSubmit({ request, data }))} noValidate>
          <div>
            <div className='pt-5' />
            <Input.Base
              autoComplete='email'
              name='email'
              type='email'
              labeltext={t('email')}
              labelclassname='text-dark font-semibold'
              placeholder={t('email_address')}
              rules={{
                required: t('email_required_msg'),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t('invalid_email_msg'),
                },
              }}
              register={register}
              error={errors.email}
            />
          </div>
          <div className='flex flex-col'>
            <div className='xs:pt-5 '>
              <Button.Secondary
                className='text-dark text-base py-3 px-10 xs:w-full'
                children={t('add_an_email')}
              />
            </div>
            <div className='xs:pt-5'>
              <Button.Primary
                className='text-light text-base py-3 px-10 xs:w-full'
                children={t('send')}
              />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default TestTemplate;
