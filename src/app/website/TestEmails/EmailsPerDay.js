import React from 'react';
import { Input, Text, Link } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { PATHS } from 'common';

const EmailsPerDay = ({ errors, register }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='grid xs:grid-cols-1 md:grid-cols-2'>
        <div>
          <Input.Base
            type='number'
            register={register}
            error={errors['emails_per_day']}
            rules={{
              required: t('required_field'),
              min: {
                value: 1,
                message: t('invalid_number_msg'),
              },
            }}
            name='emails_per_day'
            labeltext={<Text.XL children={t('max_emails_per_day')} className='font-medium pb-3' />}
          />
        </div>
      </div>
      <div className='pt-5' />
      <div className='grid grid-cols-1 items-center gap-2'>
        <Input.Checkbox
          tabIndex={8}
          name='c1'
          register={register}
          error={errors.c1}
          rules={{ required: t('you_must_agree') }}
          labelclassname='text-dark flex-1'
          labeltext={
            <Text.SM>
              {t('if_words_like_unsubscribe')}{' '}
              <span className='font-bold '>
                <Link.External className='text-primary' path={`${PATHS.TERMS_CONDITIONS}`}>
                  {t('unsubscribe')}
                </Link.External>
              </span>{' '}
              {t('add_to_unsub_list')}
            </Text.SM>
          }
        />
        <Input.Checkbox
          tabIndex={8}
          name='c2'
          register={register}
          error={errors.c2}
          rules={{ required: t('you_must_agree') }}
          labelclassname='text-dark  flex-1'
          labeltext={<Text.SM children={t('if_email_not_found')} />}
        />
        <Input.Checkbox
          tabIndex={8}
          name='c3'
          register={register}
          error={errors.c3}
          rules={{ required: t('you_must_agree') }}
          labelclassname='text-dark flex-1'
          labeltext={<Text.SM children={t('after_last_follow')} />}
        />
      </div>
    </div>
  );
};

export default EmailsPerDay;
