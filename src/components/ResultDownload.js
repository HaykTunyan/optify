import React from 'react';
import { Text, Icon } from 'style-guide';

const ResultDownload = React.forwardRef((props, ref) => {
  const { data, onDownload, t } = props;
  return (
    <div className='animate-swing'>
      <div className='w-full h-1px bg-divider' />
      <div className='pt-8' />
      <Text.XL
        children={`${t('found')} ${data.length} ${
          data.length === 1 ? t('email') : t('emails').toLowerCase()
        }`}
      />
      <div className='pt-4' />
      <div className='border-1 md:w-5/12 rounded-15 px-5 py-4 flex justify-between items-center'>
        <Icon.Download />
        <button ref={ref} onClick={onDownload}>
          <Text.SM children={t('download')} className='text-primary font-semibold' />
        </button>
      </div>
    </div>
  );
});

export default ResultDownload;
