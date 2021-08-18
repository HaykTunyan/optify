import React, { Fragment } from 'react';
import { Container } from 'style-guide';
import { withLazy } from 'hocs';
import { useLocation, Redirect } from 'react-router-dom';
import { urlHelper } from 'utils';
import { MAILING } from 'common';
import { data } from './data';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Body = withLazy(import('./Body'));
const Header = withLazy(import('./Header'));

const { VIEWS } = MAILING;
const ITEM_PER_PAGE = 10;

const getDefaultLocation = ({ pathname, search }) => {
  const searchParams = urlHelper.setSearchParams({
    search,
    params: [
      { key: 'label', value: 1 },
      { key: 'page', value: 1 },
      { key: 'view', value: VIEWS.CLASSIC },
    ],
  });
  return { pathname, search: searchParams };
};

const Mailing = () => {
  const { t } = useTranslation();
  const { search, pathname } = useLocation();
  const labelParam = urlHelper.getSearchParam({ search, key: 'label' });
  const pageParam = urlHelper.getSearchParam({ search, key: 'page' });
  const viewParam = urlHelper.getSearchParam({ search, key: 'view' });

  // redirect on wrong url params
  if (!labelParam && !pageParam && !viewParam) {
    return <Redirect to={getDefaultLocation({ search, pathname })} />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('my_emails')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='bg-body overflow-hidden'>
        <Header search={search} page={pageParam} label={labelParam} viewType={viewParam} />
        <div className='h-1px bg-divider w-full md:block xs:hidden' />
        <div className='md:min-h-115vh md:max-h-115vh lg:min-h-90vh lg:max-h-90vh xl:min-h-90vh xl:max-h-90vh flex'>
          <div className='w-full flex flex-col flex-1'>
            <div className='flex flex-1 w-full'>
              <Body
                search={search}
                page={pageParam}
                label={labelParam}
                pathname={pathname}
                viewType={viewParam}
                pageCount={data.length / ITEM_PER_PAGE}
              />
            </div>
          </div>
        </div>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default Mailing;
