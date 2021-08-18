import React from 'react';
import { ScrollBox, Link, BasicCarousel } from 'style-guide';
import { useHistory, useLocation } from 'react-router-dom';
import { urlHelper } from 'utils';
import Label from './Label';
import { MODALS, PATHS } from 'common';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { useTranslation } from 'react-i18next';
import { useWindowResize } from 'hooks';

const Labels = () => {
  // hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const history = useHistory();
  const { isMobile } = useWindowResize();
  const activeLabel = urlHelper.getSearchParam({ search, key: 'label' });
  // selectors
  const { labels } = useSelector(selectors.mailing);
  // actions

  const onAddLabelClick = () => {
    if (isMobile) {
      history.push(PATHS.ADD_LABEL);
    } else {
      dispatch(actions.ui.openModal({ type: MODALS.NEW_LABEL, payload: { cb: null } }));
    }
  };

  const CurrentLabels = labels.data.map((label) => (
    <Link.Internal
      to={{
        pathname: PATHS.MAIL_LIST,
        search: urlHelper.setSearchParam({ search, key: 'label', value: label.id }),
      }}
      key={label.id}
    >
      <Label.Base
        text={t(label.name)}
        active={label.id === Number(activeLabel)}
        isMobile={isMobile}
      />
    </Link.Internal>
  ));

  const AddLabel = (
    <Label.Add
      text={`+ ${t('add_label')}`}
      active={true}
      onClick={onAddLabelClick}
      className='bg-body  border-0'
    />
  );

  return isMobile ? (
    <div className='w-full'>
      <div className='w-full'>
        <BasicCarousel
          initialSlide={Number(activeLabel) - 1}
          slidesPerView={3.5}
          slides={[...CurrentLabels, AddLabel]}
        />
      </div>
    </div>
  ) : (
    <ScrollBox className='border-r-1 border-divider'>
      <div className='overflow-x-hidden'>{CurrentLabels}</div>
      <div className='sticky bottom-0' children={AddLabel} />
    </ScrollBox>
  );
};

export default Labels;
