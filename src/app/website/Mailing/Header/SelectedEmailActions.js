import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, Dropdown } from 'style-guide';

const SelectedEmailActions = () => {
  const { t } = useTranslation();
  return (
    <div className='flex-1 flex xs:flex-col lg:flex-row xs:gap-3 xl:gap-5 animate-fadeInFwd z-50 relative'>
      <Button.WithIcon iconType='remove' onClick={() => alert('request to backend')}>
        <Text.XS children={t('delete')} className='font-semibold hover:text-primary-light' />
      </Button.WithIcon>
      <Button.WithIcon iconType='read' onClick={() => alert('request to backend')}>
        <Text.XS children={t('mark_read')} className='font-semibold hover:text-primary-light' />
      </Button.WithIcon>
      <Button.WithIcon iconType='unread' onClick={() => alert('request to backend')}>
        <Text.XS children={t('mark_unread')} className='font-semibold hover:text-primary-light' />
      </Button.WithIcon>
      <Dropdown.Label t={t}>
        <Button.WithIcon iconType='label'>
          <Text.XS children={t('labels')} className='font-semibold hover:text-primary-light' />
        </Button.WithIcon>
      </Dropdown.Label>
    </div>
  );
};

export default SelectedEmailActions;
