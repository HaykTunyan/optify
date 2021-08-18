import React, { useEffect, useState, useRef } from 'react';
import { Text, Input, Pagination } from 'style-guide';
import { withLazy } from 'hocs';
// dummy data
import { data } from './data';

const ITEM_PER_PAGE = 10;
// subcomponents
const Item = withLazy(import('./Item'));

const List = ({ t, register }) => {
  const listRef = useRef(null);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keyword || page) {
      const filteredList = data.filter(
        (item) =>
          item.email.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
          item.fullName.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
          item.job.toLowerCase().includes(keyword.toLocaleLowerCase())
      );
      const result = filteredList.slice(page * ITEM_PER_PAGE - 10, page * ITEM_PER_PAGE);
      setList(result);
    }
  }, [keyword, page]);

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  useEffect(() => {
    listRef.current && listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  return (
    <div>
      <div className='flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center'>
        <Text.XL children={t('results')} />
        <div className='xs:pt-2 md:pt-0' />
        <div className='xs:w-full md:w-80 lg:w-415' ref={listRef}>
          <Input.Base
            name='search'
            register={register}
            placeholder={t('Search')}
            className='focus:ring-primary focus:ring-2 focus:border-transparent'
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className='pt-8' />
      <div className='grid grid-cols-1 gap-5'>
        {list.length ? (
          list.map((item, idx) => <Item item={item} key={idx} />)
        ) : (
          <Text.Error className='text-center'>No Result</Text.Error>
        )}
      </div>

      <div className='pt-5' />
      {list.length ? (
        <div className='flex justify-end'>
          <Pagination
            page={Number(page - 1)}
            pageCount={keyword ? list.length / ITEM_PER_PAGE : data.length / ITEM_PER_PAGE}
            onChange={(p) => setPage(p.selected + 1)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default List;
