import React from 'react';
import { CheckboxGroup, Text, Select, DatePicker } from 'style-guide';
import { useTranslation } from 'react-i18next';
import days from 'common/days';
import { DateTime } from 'luxon';

// mock data
const sending_minutes = [
  { text: 'Per 1 min', value: 1 },
  { text: 'Per 2 min', value: 2 },
  { text: 'Per 3 min', value: 3 },
  { text: 'Per 4 min', value: 4 },
];

const follow_numbers = [
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
];
const follow_after_numbers = [
  { text: '1 day', value: 1 },
  { text: '2 day', value: 2 },
  { text: '3 day', value: 3 },
  { text: '4 day', value: 4 },
];

const SendingDays = ({ control, errors, register, watch }) => {
  const { t } = useTranslation();

  const hourStart = watch('hour_start');
  const hourEnd = watch('hour_end');

  const validator = () => {
    const filled = hourStart && hourEnd;
    if (filled) {
      // fix validation
      const start = DateTime.fromJSDate(hourStart);
      const end = DateTime.fromJSDate(hourEnd);
      const minutesStart = start.hour * 60 + start.minute;
      const minutesEnd = end.hour * 60 + end.minute;
      const valid = minutesStart < minutesEnd;
      if (!valid) {
        return t('invalid_date_range_msg');
      } else {
        return true;
      }
    }
  };

  return (
    <div>
      <CheckboxGroup
        rules={{
          validate: {
            empty: (val) => val?.length || t('day_required_msg'),
          },
        }}
        error={errors['sending-days']}
        options={days}
        label={<Text.XL children={t('sending_days')} className='font-medium' />}
        control={control}
        name='sending-days'
      />
      <div className='pt-8' />
      <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='grid grid-cols-1'>
          <div>
            <Text.LG
              children={t('sending_hours')}
              className='pb-2 block font-medium text-lightBeta'
            />
          </div>
          <div className='grid grid-cols-2 gap-8 items-start'>
            <div>
              <DatePicker.Time
                t={t}
                name='hour_start'
                control={control}
                error={errors['hour_start']}
                rules={{ required: t('required_field'), validate: validator }}
              />
            </div>
            <div>
              <DatePicker.Time
                t={t}
                name='hour_end'
                control={control}
                error={errors['hour_end']}
                rules={{ required: t('required_field'), validate: validator }}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Text.LG
              children={t('sending_per_minute')}
              className='pb-2 block font-medium text-lightBeta'
            />
          </div>
          <Select.Base name='per_minute' register={register} options={sending_minutes} />
        </div>
      </div>
      <div className='pt-8' />
      <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='grid grid-cols-1'>
          <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-8 items-start'>
            <div>
              <Select.Base
                labeltext={
                  <Text.LG
                    children={t('number_follow_ups')}
                    className='pb-2 block font-medium text-lightBeta'
                  />
                }
                options={follow_numbers}
                name='per_minute'
                register={register}
              />
            </div>
            <div>
              <Select.Base
                labeltext={
                  <Text.LG
                    children={t('follow_up_after')}
                    className='pb-2 block font-medium text-lightBeta'
                  />
                }
                name='per_minute'
                register={register}
                options={follow_after_numbers}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendingDays;
