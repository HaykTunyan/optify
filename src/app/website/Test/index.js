import React from 'react';
import { Button, Dropdown, Container } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';
import { MODALS } from 'common';

const Test = ({ user }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClickcooperationFinder = () =>
    dispatch(actions.ui.openModal({ type: MODALS.COOPERATION_FINDER }));

  const onClickdirectExchange = () =>
    dispatch(actions.ui.openModal({ type: MODALS.DIRECT_EXCHANGE }));

  const onClickchooseKeywords = () =>
    dispatch(actions.ui.openModal({ type: MODALS.CHOOSE_KEYWORDS }));

  const onClicktestTemplate = () => dispatch(actions.ui.openModal({ type: MODALS.TEST_TEMPLATE }));

  const onClickStatistics = () => dispatch(actions.ui.openModal({ type: MODALS.STATISTICS }));

  const onClicknewTemplate = () =>
    dispatch(actions.ui.openModal({ type: MODALS.CREATE_NEW_TEMPLATE }));

  const onClicknewLabel = () => dispatch(actions.ui.openModal({ type: MODALS.NEW_LABEL }));

  const onClickyourCooperation = () =>
    dispatch(actions.ui.openModal({ type: MODALS.UNSUBSCRIBERS_LIST }));
  const onClickCreateNewTemplate = () =>
    dispatch(actions.ui.openModal({ type: MODALS.ADD_KEYWORD }));
  const onPurchaseSuccess = () =>
    dispatch(actions.ui.openModal({ type: MODALS.PURCHASE_SUCCESS, payload: { infoModal: true } }));

  return (
    <>
      <Container.BaseShadow className='grid grid-cols-4 gap-5 p-5'>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('cooperation_finder')}
            onClick={onClickcooperationFinder}
          />
        </div>

        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('direct_exchange')}
            onClick={onClickdirectExchange}
          />
        </div>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('choose_keywords')}
            onClick={onClickchooseKeywords}
          />
        </div>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('test_template')}
            onClick={onClicktestTemplate}
          />
        </div>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('statistics')}
            onClick={onClickStatistics}
          />
        </div>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('create_new_template')}
            onClick={onClicknewTemplate}
          />
        </div>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('new_label')}
            onClick={onClicknewLabel}
          />
        </div>
        <div>
          <Button.Primary
            className='px-10 py-4'
            children={t('unsubscribers_list')}
            onClick={onClickyourCooperation}
          />
        </div>
        <div>
          <Dropdown.Label t={t} children={'open'} />
        </div>
        <div>
          <Button.Secondary
            children='crete new Keyword'
            onClick={onClickCreateNewTemplate}
            className='px-10 py-4'
          />
        </div>
        <div>
          <Button.Secondary
            children='Purchase Success'
            onClick={onPurchaseSuccess}
            className='px-10 py-4'
          />
        </div>
      </Container.BaseShadow>
    </>
  );
};

export default Test;
