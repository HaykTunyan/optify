import React from 'react';
import { Icon, Input, Text } from 'style-guide';

const DOMAIN_METRICS = {
  DA: 'da',
  DR: 'dr',
};

const DomainMetrics = ({ t, register, errors }) => {
  return (
    <>
      <div className='pt-8' />
      <div>
        <div className='flex gap-4'>
          <Input.Radio
            value={DOMAIN_METRICS.DA}
            register={register}
            name='domainMetric'
            error={errors.domainMetric}
            defaultChecked={true}
            labelclassname='text-dark font-medium'
            labeltext={<Text.MD className='lg:text-lg'>{t('da')}</Text.MD>}
          />
          <Input.Radio
            name='domainMetric'
            value={DOMAIN_METRICS.DR}
            register={register}
            error={errors.domainMetric}
            labelclassname='text-dark font-medium'
            labeltext={<Text.MD className='lg:text-lg'>{t('dr')}</Text.MD>}
          />
        </div>

        <div className='lg:grid lg:gap-8 lg:grid-cols-2'>
          <div>
            <div className='pt-4' />
            <div className='grid grid-flow-col align-top md:w-8/12 lg:w-full'>
              <div className='w-full'>
                <Input.Base
                  name='min'
                  type='number'
                  defaultValue={1}
                  className='text-dark xs:p-3'
                  register={register}
                  error={errors.min}
                  tabIndex={1}
                  autoFocus={true}
                />
              </div>
              <div className='w-full flex justify-center p-6'>
                <Icon.HorizontalDiv />
              </div>
              <div className='ml-auto w-full'>
                <Input.Base
                  name='max'
                  type='number'
                  defaultValue={100}
                  className='xs:p-3'
                  register={register}
                  error={errors.max}
                  tabIndex={2}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div>
            <div className='pt-5' />
            <Text.SM className='text-sm font-medium text-lightBeta' children={t('traffic')} />
            <div className='grid grid-flow-col align-top md:w-8/12 lg:w-full'>
              <div className='w-full'>
                <Input.Base
                  name='trafficMin'
                  type='number'
                  defaultValue={1}
                  className='text-dark xs:p-3'
                  register={register}
                  error={errors.trafficMin}
                  tabIndex={3}
                />
              </div>
              <div className='w-full flex justify-center p-6'>
                <Icon.HorizontalDiv />
              </div>
              <div className='w-full'>
                <Input.Base
                  name='trafficMax'
                  type='number'
                  defaultValue={500}
                  className='xs:p-3 '
                  register={register}
                  error={errors.trafficMax}
                  tabIndex={4}
                />
              </div>
            </div>
          </div>
          <div>
            <div className='pt-5' />
            <Text.SM className='text-sm font-medium text-lightBeta' children={t('spam_score')} />
            <div className='grid grid-flow-col align-top md:w-8/12 lg:w-full'>
              <div className='w-full'>
                <Input.Base
                  name='spamScoreMin'
                  type='number'
                  defaultValue={1}
                  className='xs:p-3'
                  register={register}
                  error={errors.spamScoreMin}
                  tabIndex={5}
                />
              </div>
              <div className='w-full flex justify-center p-6'>
                <Icon.HorizontalDiv />
              </div>
              <div className='w-full'>
                <Input.Base
                  name='spamScoreMax'
                  type='number'
                  defaultValue={100}
                  className='xs:p-3'
                  register={register}
                  error={errors.spamScoreMax}
                  tabIndex={6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainMetrics;
