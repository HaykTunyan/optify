import React from 'react';
import { Text, Input, Icon, DatePicker } from 'style-guide';
import { DateTime } from 'luxon';

const PageMetrics = ({ t, register, errors, control }) => {
  const dateError = errors.start || errors.end;
  return (
    <div className='px-5 pt-4 pb-8 shadow-layout rounded-22'>
      <Text.XL className='xs:text-lg lg:text-xl font-medium' children={t('page_metrics')} />
      <div className='md:grid md:grid-cols-2 gap-8'>
        <div className='md:w-full'>
          <div className='pt-5' />
          <Text.SM className='text-sm font-medium text-lightBeta' children={t('publishing_date')} />
          <div className='pt-1' />
          <div className='w-full'>
            <DatePicker.Range
              t={t}
              control={control}
              minDefaultValue={null}
              maxDefaultValue={null}
              params={{
                // maxDate: DateTime.local().toJSDate(),
                tabIndex: 7
              }}
              className='p-3'
            />
            {dateError ? (
              <>
                <div className='pt-2' />
                <Text.Error children={dateError?.message} />
              </>
            ) : null}
          </div>
        </div>
        <div>
          <div className='pt-5' />
          <Text.SM className='text-sm font-medium text-lightBeta' children={t('word_count')} />
          <div className='pt-1' />
          <div className='grid grid-flow-col'>
            <div className='w-11/12'>
              <Input.Base
                name='wordCountMin'
                type='number'
                defaultValue={1}
                className='text-dark xs:p-3'
                register={register}
                error={errors.wordCountMin}
                tabIndex={8}
              />
            </div>
            <div className='w-full flex-col justify-center items-start'>
              <div className='pt-6' />
              <Icon.HorizontalDiv />
            </div>
            <div className='ml-auto w-11/12'>
              <Input.Base
                name='wordCountMax'
                type='number'
                defaultValue={100}
                className='text-dark xs:p-3'
                register={register}
                error={errors.wordCountMax}
                tabIndex={9}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMetrics;
