import React from 'react';
import { Text, Input, TagsAutocomplete } from 'style-guide';

const WebsiteMetricsBrokenLink = ({ t, register, errors, control }) => {
  return (
    <div className='shadow-layout rounded-22 px-5 pt-4 pb-8'>
      <Text.MD
        className='text-dark xs:text-lg lg:text-xl font-medium'
        children={t('your_web_url')}
      />
      <div>
        <div className='w-6/12'>
          <div className='pt-4' />
          <Input.Base
            type='url'
            name='websiteUrl'
            className='xs:p-3'
            register={register}
            placeholder={t('url')}
            error={errors.websiteUrl}
          />
        </div>
        <div className='pt-5' />
        <div className='w-6/12'>
          <Text.MD
            className='text-dark xs:text-lg lg:text-xl font-medium'
            children={t('your_competitors_url')}
          />
          <div>
            <div className='pt-4' />
            <div className='w-full'>
              {/* validate url */}
              <TagsAutocomplete
                control={control}
                name='competitorsUrl'
                error={errors?.competitorsUrl}
                randomOption={false}
                placeholderText={t('your_competitor_url')}
                params={{ allowNew: true }}
                suggestions={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMetricsBrokenLink;
