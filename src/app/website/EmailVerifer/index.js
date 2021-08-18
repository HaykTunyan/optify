import React, { useCallback, Fragment } from 'react';
import { Container } from 'style-guide';
import { SectionTitle } from 'components';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { urlHelper } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { withLazy } from 'hocs';
import { Helmet } from 'react-helmet-async';

// components
// todo remove index
const SingleEmailVerifer = withLazy(import('./Single/index'));
const BulkEmailVerifer = withLazy(import('./Bulk/index'));

const types = { single: 'single', bulk: 'bulk' };

const getDefaultLocation = ({ pathname, search }) => ({
  pathname,
  search: urlHelper.setSearchParam({ search, key: 'type', value: types.single }),
});

const EmailVerifer = () => {
  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const { search, pathname } = useLocation();
  // params
  const type = urlHelper.getSearchParam({ search, key: 'type' });
  const isSingle = type === types.single;
  const isCorrectType = [types.single, types.bulk].includes(type);
  const Body = isSingle ? SingleEmailVerifer : BulkEmailVerifer;

  // actions
  const verifyEmail = (data) => dispatch(actions.email.verify(data));
  const resetData = useCallback(() => dispatch(actions.email.resetData()), [dispatch]);
  // selectors
  const { data, loaded, failed, loading } = useSelector(selectors.email);

  if (!isCorrectType) {
    return <Redirect to={getDefaultLocation({ url: search, pathname })} />;
  }
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('email_verifer')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='py-6'>
        <SectionTitle
          titleText={t(isSingle ? 'email_verifer' : 'bulk_email_verifer')}
          buttonText={t(isSingle ? 'bulk_email_verifer' : 'single_email_verifer')}
          onButtonClick={() =>
            history.push({
              search: urlHelper.setSearchParam({
                search,
                key: 'type',
                value: isSingle ? types.bulk : types.single,
              }),
            })
          }
        />
        <div className='pt-8' />
        <div className='md:px-8'>
          <Body
            request={verifyEmail}
            resetData={resetData}
            data={isSingle ? data?.[0] : data}
            loading={loading}
            loaded={loaded}
            failed={failed}
          />
        </div>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default EmailVerifer;
