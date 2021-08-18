import { PATHS } from 'common';
import React from 'react';
import { Input, Link, Text } from 'style-guide';
import { date as dt } from 'utils';

const Pipe = () => (
  <div className='flex items-center'>
    <div className='pl-2' />
    <div className='w-2px h-4 bg-secondary'></div>
    <div className='pl-2' />
  </div>
);

const onChange = ({ event, id, onSelect, onDeselect }) => {
  const checked = event.target.checked;
  checked ? onSelect({ ids: [id] }) : onDeselect({ ids: [id] });
};

const Classic = ({ item, selected, onDeselect, onSelect, search }) => {
  const { author, subject, content, date, id, isRead } = item;

  return (
    <Link.Internal to={{ pathname: `${PATHS.MAIL_SINGLE}/${id}`, search }}>
      <div className='px-3 py-4 flex xs:flex-wrap xs:h-32 md:h-auto md:flex-row items-center shadow-layout rounded-15 hover:border-primary border-2 transition-all duration-75 animate-fadeInFwd'>
        <div className='flex xs:w-10/12 md:w-auto md:order-1'>
          <Input.Checkbox
            checked={selected}
            register={() => null}
            onClick={(event) => event.stopPropagation()}
            onChange={(event) => onChange({ event, onSelect, onDeselect, id })}
          />
          <Text.SM
            children={author}
            className={`font-semibold ${isRead ? 'text-dark-alpha' : 'text-dark-beta'} `}
          />
        </div>
        <div className='xs:hidden md:block md:order-2'>
          <Pipe />
        </div>
        <div className='xs:w-full xs:order-4 xs:pl-7 md:max-w-min md:flex-1 md:order-3 md:pl-0 break-all whitespace-nowrap overflow-hidden overflow-ellipsis'>
          <Text.SM
            children={subject}
            className={`font-semibold ${isRead ? 'text-dark-alpha' : 'text-dark-beta'} `}
          />
        </div>
        <div className='xs:hidden md:block md:order-4'>
          <Pipe />
        </div>
        <div className='xs:pl-7 xs:flex-col xs:order-5 md:order-6 md:pl-0 flex-1 md:max-w-min break-all whitespace-nowrap overflow-hidden overflow-ellipsis'>
          <Text.SM children={content} className='text-dark-alpha xs:break-words' />
        </div>
        <div className='xs:order-3 md:order-7 xs:ml-auto md:ml-0 md:pl-5'>
          <Text.XS children={dt.formatTime(date)} className='text-dark-beta font-semibold' />
        </div>
      </div>
    </Link.Internal>
  );
};

export default Classic;
