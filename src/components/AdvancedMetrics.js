import React from 'react';
import { Input, Select, Text } from 'style-guide';
import countries from 'common/countries';

const AdvancedMetrics = ({ t, register, errors, watch }) => {
  const checkedAdvanced = watch('advaced', false);

  return (
    <>
      <div>
        <Input.Checkbox
          name='advaced'
          register={register}
          error={errors.advanced}
          defaultChecked={false}
          labelclassname='text-dark'
          labeltext={<Text.MD className='lg:text-xl'>{t(`advanced_filters`)}</Text.MD>}
          tabIndex={10}
        />
      </div>
      {checkedAdvanced ? (
        <div className='md:grid md:grid-cols-2 gap-8'>
          <div className='pt-8'>
            <Select.Base
              name='filterTraffic'
              options={countries.map((c) => ({ text: c.name, value: c.name }))}
              labeltext={t('filter_traffic_country')}
              labelclassname='text-sm font-medium text-lightBeta'
              register={register}
              className='xs:p-3'
              rules={{
                required: t('city_required_msg'),
                tabIndex: 11,
              }}
              errors={errors.filterTraffic}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AdvancedMetrics;
