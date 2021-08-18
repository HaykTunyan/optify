import React from 'react';
import { Pagination } from 'style-guide';
import { useHistory, useLocation } from 'react-router-dom';
import { urlHelper } from 'utils';
import { withLazy } from 'hocs';
import { useSelector } from 'react-redux';
import selectors from 'store/selectors';
import { MAILING } from 'common';

const ClassicView = withLazy(import('./Classic'));
const KanbanView = withLazy(import('./Kanban'));

const view = { [MAILING.VIEWS.CLASSIC]: ClassicView, [MAILING.VIEWS.KANBAN]: KanbanView };

const setPage = ({ value, history, search, pathname }) => {
  const searchParams = urlHelper.setSearchParam({ search, key: 'page', value });
  history.push({ pathname, search: searchParams });
};

const View = () => {
  // hooks
  const { search, pathname } = useLocation();
  const history = useHistory();
  const labelParam = urlHelper.getSearchParam({ search, key: 'label' });
  const pageParam = urlHelper.getSearchParam({ search, key: 'page' });
  const viewParam = urlHelper.getSearchParam({ search, key: 'view' });
  const activePage = Number(pageParam);
  const Body = view[viewParam];
  const { emailsByLabel, emails } = useSelector(selectors.mailing);
  const emailData =
    viewParam === MAILING.VIEWS.CLASSIC ? emailsByLabel(Number(labelParam)) : emails;

  return (
    <div className='flex-1 relative w-full'>
      <Body data={emailData} />
      <div className='py-4 flex justify-end'>
        <Pagination
          pageCount={emailData.length / 10}
          page={activePage - 1}
          onChange={(p) => setPage({ value: p.selected + 1, search, history, pathname })}
        />
      </div>
    </div>
  );
};

export default View;
