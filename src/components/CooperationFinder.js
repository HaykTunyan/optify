import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, Input, Link, Icon } from 'style-guide';
import { useForm } from 'react-hook-form';
import { validators } from 'utils';
import { PATHS } from 'common';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

const CooperationFinder = () => {
  const { t } = useTranslation();
  // hooks
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  const request = null;
  const checkedDirect = watch('direct');
  const checkedIndirect = watch('indirect');
  const checkedOutreach = watch('outreach');

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('cooperation_finder')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='xs:w-full md:w-464 xl:h-auto'>
        <div className='pt-8' />
        <Link.Internal to={PATHS.MAIL_LIST} className='flex items-center hover:underline md:hidden'>
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-semibold text-dark text-lg leading-0'
            children={t('my_emails')}
          />
        </Link.Internal>
        <div className='pt-8 md:hidden' />
        <Text.XL
          className='font-semibold text-primary md:hidden xs:text-1xl'
          children={t('cooperation_finder')}
        />
        <div className='pt-5 md:hidden' />
        <form onSubmit={handleSubmit((data) => onSubmit({ request, data }))} noValidate>
          <div className='grid xs:grid-cols-3 xs:flex-wrap xs:flex xs:gap-x-8 xs:gap-y-5 md:grid-cols-3 md:justify-between md:gap-4'>
            <div>
              <Input.Checkbox
                name='direct'
                register={register}
                error={errors.direct}
                defaultChecked={true}
                labeltext={
                  <Text.SM className={checkedDirect ? 'text-primary font-semibold' : null}>
                    {t('direct_exchange')}
                  </Text.SM>
                }
              />
            </div>
            <div>
              <Input.Checkbox
                name='indirect'
                register={register}
                error={errors.indirect}
                labeltext={
                  <Text.SM className={checkedIndirect ? 'text-primary font-semibold' : null}>
                    {t('indirect_exchange')}
                  </Text.SM>
                }
              />
            </div>
            <div>
              <Input.Checkbox
                name='outreach'
                register={register}
                error={errors.outreach}
                labeltext={
                  <Text.SM className={checkedOutreach ? 'text-primary font-semibold' : null}>
                    {t('outreach')}
                  </Text.SM>
                }
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <div>
              <div className='pt-8' />
              <Input.Base
                name='name'
                placeholder={t('name')}
                register={register}
                error={errors.name}
                type='text'
                rules={{
                  required: t('name_required_msg'),
                  minLength: {
                    value: 2,
                    message: t('invalid_name_msg'),
                  },
                  validate: {
                    noWhitespace: (v) => v.trim().length || t('invalid_name_msg'),
                    spaceCount: (v) => {
                      const spacesCount = v.split(' ').length - 1;
                      return spacesCount < 2 || t('invalid_name_msg');
                    },
                    validName: (v) => validators.name.test(v) || t('invalid_name_msg'),
                  },
                }}
              />
            </div>
            <div>
              <div className='pt-5' />
              <Input.Base
                name='url'
                placeholder={t('url')}
                register={register}
                error={errors.url}
                rules={{
                  required: t('url_required_msg'),
                  minLength: {
                    value: 5,
                    message: t('invalid_url_msg'),
                  },
                }}
              />
            </div>
            { checkedIndirect ? (
              <div>
              <div className='pt-5' />
              <Input.Base
                name='newUrl'
                placeholder={t('url')}
                register={register}
                error={errors.newUrl}
                rules={{
                  required: t('url_required_msg'),
                  minLength: {
                    value: 5,
                    message: t('invalid_url_msg'),
                  },
                }}
              />
            </div>
            ) : null }
            <div>
              <div className='pt-5' />
              <Input.Base
                name='confirmUrl'
                placeholder={t('url')}
                register={register}
                error={errors.confirmUrl}
                rules={{
                  required: t('url_required_msg'),
                  minLength: {
                    value: 5,
                    message: t('invalid_url_msg'),
                  },
                }}
              />
            </div>
          </div>
          <div className='flex md:justify-center'>
            <div className='xs:w-full md:w-auto'>
              <div className='pt-8' />
              <Button.Primary
                className='px-12 py-3 text-base xs:w-full md:w-auto'
                children={t('select')}
                type='submit'
              />
              <div className='pb-3' />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CooperationFinder;
