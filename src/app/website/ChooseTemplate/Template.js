import React from 'react';
import { Button, Icon, Text } from 'style-guide';

const Template = ({ t, selected, onSelect, onCancel, title, content }) => {
  return (
    <div className='rounded-22 px-5 pt-5 pb-8 flex flex-col justify-between border-1 border-divider hover:border-transparent hover:shadow-layout transition-all'>
      <div className='flex justify-between'>
        <Text.XL className='font-semibold flex-1' children={title} />
        <div className='pl-1' />
        {selected ? <Icon.Checked className='w-6' /> : null}
      </div>
      <div className='pt-4' />
      <div children={content} className='flex-1' />
      <div className='pt-5' />
      <div className='flex justify-center'>
        {selected ? (
          <Button.Secondary
            className='px-10 py-3 w-150 xs:text-base xs:font-semibold select-none'
            children={t(`cancel`)}
            onClick={onCancel}
          />
        ) : (
          <Button.Primary
            className={`px-10 py-3 w-150 xs:text-base xs:font-semibold select-none ${
              onSelect ? 'visible' : 'invisible'
            }`}
            children={t(`select`)}
            onClick={onSelect}
          />
        )}
      </div>
    </div>
  );
};

export default Template;
