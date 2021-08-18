import React from 'react';
import MessagePreview from '../MessagePreview/index';
import { ScrollBox } from 'style-guide';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { withLazy } from 'hocs';
import { NoData } from 'components';
import { useLocation } from 'react-router-dom';
import { useWindowResize } from 'hooks';

const Labels = withLazy(import('../Labels/Classic'));

const ClassicView = ({ data }) => {
  // hooks
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { isMobile } = useWindowResize();
  // selectors
  const {
    mailing: { selectedIds },
  } = useSelector(selectors.ui);

  const onSelect = (payload) => dispatch(actions.ui.selectEmail(payload));
  const onDeselect = (payload) => dispatch(actions.ui.deSelectEmail(payload));

  const Body = (
    <div className='grid grid-cols-1 gap-4 px-4 py-4'>
      {data.length ? (
        data.map((item, key) => (
          <MessagePreview.Classic
            search={search}
            item={item}
            key={key}
            onSelect={onSelect}
            onDeselect={onDeselect}
            selected={selectedIds.includes(item.id)}
          />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );

  return (
    <div className='h-full flex xs:flex-col xs:w-full md:flex-row'>
      <div className='xl:w-52 lg:w-48 md:w-44 md:h-full xs:w-full xs:h-auto flex-shrink-0'>
        <Labels />
      </div>
      <div className='md:flex-1'>{isMobile ? Body : <ScrollBox children={Body} />}</div>
    </div>
  );
};

export default ClassicView;
