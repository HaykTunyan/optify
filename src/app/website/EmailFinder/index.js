import React, { useCallback, Fragment } from 'react';
import { Container } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { urlHelper } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { withLazy } from 'hocs';
import { SectionTitle } from 'components';
import { Helmet } from 'react-helmet-async';
// subcomponents
const SingleEmailFinder = withLazy(import('./Single/index'));
const BulkEmailFinder = withLazy(import('./Bulk/index'));

const types = { single: 'single', bulk: 'bulk' };

const getDefaultLocation = ({ pathname, search }) => ({
  pathname,
  search: urlHelper.setSearchParam({ search, key: 'type', value: types.single }),
});

const EmailFinder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const { search, pathname } = useLocation();
  // params
  const type = urlHelper.getSearchParam({ search, key: 'type' });
  const isSingle = type === types.single;
  const isCorrectType = [types.single, types.bulk].includes(type);
  const Body = isSingle ? SingleEmailFinder : BulkEmailFinder;
  // actions
  const findEmail = (data) => dispatch(actions.email.findSingle(data));
  const resetData = useCallback(() => dispatch(actions.email.resetData()), [dispatch]);
  // selectors
  const { data, loaded, failed, loading } = useSelector(selectors.email);

  if (!isCorrectType) {
    return <Redirect to={getDefaultLocation({ url: search, pathname })} />;
  }
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('email_finder')} | ${t('brand_name')}`} </title>
      </Helmet>
      <Container.BaseShadow className='py-6'>
        <SectionTitle
          titleText={t(isSingle ? 'single_email_finder' : 'bulk_email_finder')}
          buttonText={t(isSingle ? 'bulk_email_finder' : 'single_email_finder')}
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
        <div className='pt-6' />
        <div className='md:px-8'>
          <Body
            loaded={loaded}
            failed={failed}
            loading={loading}
            request={findEmail}
            resetData={resetData}
            data={isSingle ? data?.[0] : data}
          />
        </div>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default EmailFinder;
