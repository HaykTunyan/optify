import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title, Text } from 'style-guide';

const NoData = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full grid text-center pt-5'>
      <Title.H2 children={t('oops')} className='font-black' />
      <Text.LG children={t('no_data_found')} className='font-body' />
    </div>
  );
};

export default NoData;
