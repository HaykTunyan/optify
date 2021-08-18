import React, { useEffect, useRef } from 'react';
import { Text, Button, Input, Keyword } from 'style-guide';
import { useDispatch, useSelector } from 'react-redux';
import { MODALS, PATHS } from 'common';
import { useHistory, useLocation } from 'react-router-dom';
import { useWindowResize } from 'hooks';
import { urlHelper } from 'utils';
import actions from 'store/actions';
import selectors from 'store/selectors';

const WebsiteMetricsGuestPost = ({ t, register, errors }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
    const history = useHistory();
    const { isMobile } = useWindowResize();
    const { search } = useLocation();

  const onCreate = () => {
    if (isMobile){
      history.push(PATHS.ADD_KEYWORD)
    } else {
      dispatch(actions.ui.openModal({ type: MODALS.ADD_KEYWORD }))
    };
  };
  const { keywords } = useSelector(selectors.ui);
  const section = urlHelper.getSearchParam({ search, key: 'section' });

  useEffect(() => {
    section && ref.current.scrollIntoView({ block: 'center' });
  }, [section]);

  return (
    <div className='shadow-layout rounded-22 px-5 pt-4 pb-8'>
      <Text.MD
        className='text-dark xs:text-lg lg:text-xl font-medium'
        children={t('your_web_url')}
      />
      <div>
        <div className='md:w-8/12 lg:w-6/12'>
          <div className='pt-4' />
          <Input.Base
            type='url'
            name='websiteUrl'
            className='xs:p-3'
            register={register}
            placeholder={t('url')}
            error={errors.websiteUrl}
          />
        </div>
        <div className='pt-5' />
        <Text.MD
          className='text-dark xs:text-base font-medium'
          children={t('what_website_about')}
        />
        <div className='grid grid-flow-row grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-5 pt-4 pb-5'>
          {keywords.map((kw, index) => (
            <div key={index}>
              <Keyword
                title={kw}
                children={
                  <Text.XS
                    children={kw}
                    className='text-dark break-words overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full'
                  />
                }
                className='bg-lightAlpha'
              />
            </div>
          ))}
          <div className='xs:hidden md:block'>
            <Keyword
              children={
                <Text.XS
                  children={t('create')}
                  className='text-white break-words overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full'
                />
              }
              onClick={onCreate}
              className='bg-primary cursor-pointer'
            />
          </div>
        </div>
        <div className='xs:block md:hidden' ref={ref}>
          <Button.Primary
            children={t('create')}
            className='md:text-base xs:font-medium xs:rounded-md px-14 py-3 xs:w-full md:w-auto'
            type='button'
            onClick={onCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteMetricsGuestPost;
