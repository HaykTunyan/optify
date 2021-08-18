import React from 'react';
import { Text, Button, Input, Keyword } from 'style-guide';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MODALS, PATHS } from 'common';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { useWindowResize } from 'hooks';

const keywordsCount = {
  xl: 6,
  lg: 4,
  md: 3,
  sm: 4,
  xs: 4,
};

const WebsiteMetricsLinkBuilding = ({ t, register, errors }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { breakpoint, isMobile } = useWindowResize();

  const { paragraphs, keywordsByParagraph } = useSelector(selectors.ui);
  const onClickchooseKeywords = (payload) => {
    if (isMobile) {
      history.push(PATHS.CHOOSE_KEYWORDS);
    } else {
      dispatch(actions.ui.openModal({ type: MODALS.CHOOSE_KEYWORDS, payload }));
    }
  };

  const keywordsCountToShow = keywordsCount[breakpoint];

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
        <div className='grid grid-cols-1 gap-3'>
          {paragraphs.map((pr, index) => {
            const allKeywords = keywordsByParagraph(pr.id);
            const keywordsToShow = keywordsByParagraph(pr.id).slice(0, keywordsCountToShow);
            const showMoreVisible = allKeywords.length > keywordsCountToShow;
            return (
              <div className='flex xs:flex-col md:flex-row gap-2 items-start' key={pr.id}>
                <div className='md:w-2/12 xs:w-full xs:pb-2 md:pb-0'>
                  <Keyword
                    title={pr.title}
                    onClick={() => onClickchooseKeywords({ index })}
                    children={
                      <Text.XS
                        children={pr.title}
                        className='text-primary break-words overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full'
                      />
                    }
                    className='bg-secondary cursor-pointer'
                  />
                </div>

                {keywordsToShow.length ? (
                  <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 xs:w-full gap-4 flex-1 px-2'>
                    {keywordsToShow.map((kw) => (
                      <Keyword
                        key={kw}
                        title={kw}
                        children={
                          <Text.XS
                            children={kw}
                            className='text-primary break-words overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full'
                          />
                        }
                        className='bg-lightAlpha'
                      />
                    ))}
                  </div>
                ) : (
                  <div className='flex items-center px-2 md:h-full xs:h-auto'>
                    <Text.SM children={t('no_keyword_found')} />
                  </div>
                )}

                <div className='md:w-2/12 xs:grid xs:grid-cols-2 md:flex w-full gap-2 xs:px-2 md:px-0'>
                  {showMoreVisible ? (
                    <Keyword
                      children={
                        <Text.XS
                          title={t('create')}
                          children={t('create')}
                          className='text-white break-words overflow-hidden overflow-ellipsis whitespace-nowrap'
                        />
                      }
                      onClick={() => onClickchooseKeywords({ index })}
                      className='bg-primary cursor-pointer w-full'
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        <div className='md:w-4/12 md:pr-4 md:py-4 lg:w-3/12 xl:w-2/12'>
          <div className=''>
            <Button.Primary
              children={t('add_title')}
              className='md:text-sm xs:font-medium px-10 py-3 xs:rounded-xl xs:w-full'
              type='button'
            />
          </div>
        </div>
        {/* <div className='xs:block md:hidden '>
          <Button.Primary
            children={t('create')}
            className='md:text-base xs:font-medium xs:rounded-md px-14 py-3 xs:w-full md:w-auto'
            type='button'
            onClick={openCreateKeywordModal}
          />
        </div> */}
      </div>
    </div>
  );
};

export default WebsiteMetricsLinkBuilding;
