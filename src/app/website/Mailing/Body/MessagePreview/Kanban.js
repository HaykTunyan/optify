import React from 'react';
import { Input, Text } from 'style-guide';
import { date as dt } from 'utils';

const onChange = ({ event, id, onSelect, onDeselect }) => {
  const checked = event.target.checked;
  checked ? onSelect({ ids: [id] }) : onDeselect({ ids: [id] });
};

const truncateString = (str) => {
  let truncatedStr = str.split(' ').slice(0, 7);
  truncatedStr.push('...');
  return truncatedStr.join(' ');
};

const Kanban = ({ item, selected, onDeselect, onSelect }) => {
  const { author, subject, content, date, id } = item;

  return (
    <div className='px-4 py-4 shadow-layout rounded-15 hover:border-primary border-2 transition-all duration-75 animate-fadeInFwd w-full overflow-x-hidden'>
      <div className='flex'>
        <Input.Checkbox
          checked={selected}
          register={() => null}
          onClick={(event) => event.stopPropagation()}
          onChange={(event) => onChange({ event, onSelect, onDeselect, id })}
        />
        <Text.SM children={author} className='font-semibold text-dark-beta flex-1' />
        <Text.XS children={dt.formatTime(date)} className='text-dark-beta font-semibold' />
      </div>
      <div className='pt-3' />

      <div className='w-full whitespace-nowrap overflow-hidden overflow-ellipsis'>
        <Text.SM children={subject} className='font-semibold text-dark-beta' />
      </div>
      <div className='pt-2' />
      <div className='w-full'>
        <Text.SM children={truncateString(content)} className='text-dark-alpha' />
      </div>
    </div>
  );
};

export default Kanban;
