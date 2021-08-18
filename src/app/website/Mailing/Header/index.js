import React, { useEffect, useCallback } from 'react';
import { Button, Input, Text, Link, Icon } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'store/selectors';
import actions from 'store/actions';
import { withLazy } from 'hocs';
import { useHistory } from 'react-router-dom';
import { urlHelper } from 'utils';
import { MAILING, MODALS, PATHS } from 'common';
import { useWindowResize } from 'hooks';
const SelectedEmailActions = withLazy(import('./SelectedEmailActions'));

const onSelectAllChange = ({ event, onSelectGroup, onDeselectGroup }) => {
  const value = event.target.checked;
  value ? onSelectGroup() : onDeselectGroup();
};

const onViewTypeChange = ({ event, history, search, pathname }) => {
  const value = event.target.checked;
  const searchParams = urlHelper.setSearchParam({
    search,
    key: 'view',
    value: value ? MAILING.VIEWS.KANBAN : MAILING.VIEWS.CLASSIC,
  });
  history.push({ pathname, search: searchParams });
};

const Pipe = () => (
  <div className='flex items-center'>
    <div className='pl-2' />
    <div className='w-2px h-4 bg-dark-alpha'></div>
    <div className='pl-2' />
  </div>
);

const ActionPanel = ({ data, page, label, viewType, search, pathname }) => {
  // hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isMobile } = useWindowResize();
  const { emailsByLabel, emails } = useSelector(selectors.mailing);
  const {
    mailing: { selectedIds },
  } = useSelector(selectors.ui);
  const labelParam = urlHelper.getSearchParam({ search, key: 'label' });
  const viewParam = urlHelper.getSearchParam({ search, key: 'view' });

  const emailData =
    viewParam === MAILING.VIEWS.CLASSIC ? emailsByLabel(Number(labelParam)) : emails?.data;

  // actions
  const onSelectGroup = useCallback(
    () => dispatch(actions.ui.selectEmail({ ids: emailData.map((it) => it.id) })),
    [dispatch, emailData]
  );
  const onDeselectGroup = useCallback(
    () => dispatch(actions.ui.deSelectEmail({ ids: emailData.map((it) => it.id) })),
    [dispatch, emailData]
  );
  const onDeselectAll = useCallback(() => dispatch(actions.ui.deSelectAllEmails()), [dispatch]);
  const onClickStatistics = () => {
    if (isMobile) {
      history.push(PATHS.STATISTICS);
    } else {
      dispatch(actions.ui.openModal({ type: MODALS.STATISTICS }));
    }
  };

  const openNewCampaignModal = () => {
    if(isMobile) {
      history.push(PATHS.NEW_CAMPAIGN)
    } else {
      dispatch(actions.ui.openModal({ type: MODALS.NEW_CAMPAIGN }))
    }
  }

  const atLeastOneEmailSelected = selectedIds.length;

  useEffect(() => {
    atLeastOneEmailSelected && onDeselectAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, label, onDeselectAll]);

  return (
    <div className='w-full py-5 px-4 flex xs:flex-col md:flex-row md:justify-between'>
      <Link.Internal to={PATHS.MAIL_LIST} className='flex items-center hover:underline md:hidden'>
        <Icon.LeftArrow className='fill-dark' />
        <Text.MD
          className='ml-5 font-medium text-dark text-lg leading-0'
          children={t('my_emails')}
        />
      </Link.Internal>
      <div className='xs:w-full md:mx-0 md:w-44 xs:order-2 xs:pt-5 md:pt-0'>
        <Button.Primary children={t('new_campaign')} className='w-full px-6 py-3' onClick={openNewCampaignModal} />
      </div>
      <div className='flex-1 flex items-center xs:order-3 xs:pt-5 md:pt-0 md:pl-9'>
        <Input.Checkbox
          name='selectAll'
          register={() => null}
          onChange={(event) => onSelectAllChange({ event, onSelectGroup, onDeselectGroup })}
          labeltext={<Text.XS children={t('select_all')} />}
        />
        <div className='pl-3' />
        <Pipe />
        <div className='pl-3' />
        {selectedIds.length ? (
          <SelectedEmailActions />
        ) : (
          <Input.Checkbox
            checked={viewType === MAILING.VIEWS.KANBAN}
            onChange={(event) => onViewTypeChange({ event, search, pathname, history })}
            name='kanbanView'
            labeltext={<Text.XS children={t('kanban_view')} />}
            register={() => null}
          />
        )}
      </div>
      <div className='xs:w-full xs:order-1 md:order-3 md:w-auto xs:pt-8 md:pt-0'>
        <Button.Secondary
          children={t('statistics')}
          className='px-6 py-3 xs:w-full md:w-auto'
          onClick={onClickStatistics}
        />
      </div>
    </div>
  );
};

export default ActionPanel;
