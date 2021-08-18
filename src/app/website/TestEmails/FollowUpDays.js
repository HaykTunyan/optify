import React from 'react';
import { CheckboxGroup, Text } from 'style-guide';
import { useTranslation } from 'react-i18next';
import days from 'common/days';

const FollowUpDays = ({ errors, control }) => {
  const { t } = useTranslation();
  return (
    <div>
      <CheckboxGroup
        rules={{
          validate: { empty: (val) => val?.length || t('day_required_msg') },
        }}
        error={errors['follow-up-days']}
        options={days}
        label={<Text.XL children={t('follow_up_days')} className='font-medium' />}
        control={control}
        name='follow-up-days'
      />
    </div>
  );
};

export default FollowUpDays;
