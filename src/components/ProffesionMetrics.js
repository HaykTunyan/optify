import React from 'react';
import { Text, TagsAutocomplete } from 'style-guide';

const ProffesionMetrics = ({ t, control, errors }) => {
  return (
    <div className='shadow-layout rounded-22 px-5 pt-4 pb-8'>
      <Text.MD
        className='text-dark xs:text-lg lg:text-xl font-medium'
        children={t('choose_whom_send')}
      />
      <div>
        <div className='pt-4' />
        <div className='md:w-7/12 xs:w-full'>
          <TagsAutocomplete
            control={control}
            name='proffesions'
            error={errors?.proffesions}
            randomOption={true}
            placeholderText={t('choose_proffesion')}
            tabIndex={12}
          />
        </div>
      </div>
    </div>
  );
};

export default ProffesionMetrics;
