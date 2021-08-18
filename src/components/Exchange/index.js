import React, { useRef, useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Text, Keyword } from 'style-guide';
import selectors from 'store/selectors';
import actions from 'store/actions';
import { MODALS, PATHS } from 'common';
import { useWindowResize } from 'hooks';
import { useHistory, useLocation } from 'react-router-dom';
import { urlHelper } from 'utils';

const keywordsCount = {
  xl: 6,
  lg: 4,
  md: 3,
  sm: 4,
  xs: 4,
};

const Exchange = ({ t, register, errors, type, title }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { breakpoint, isMobile } = useWindowResize();
  const history = useHistory();
  const { search } = useLocation();
  const section = urlHelper.getSearchParam({ search, key: 'section' });
  const { paragraphs, keywordsByParagraph } = useSelector(selectors.ui);
  const onClickchooseKeywords = (payload) => {
    if (isMobile) history.push(PATHS.CHOOSE_KEYWORDS);
    else dispatch(actions.ui.openModal({ type: MODALS.CHOOSE_KEYWORDS, payload }));
  };
  const keywordsCountToShow = keywordsCount[breakpoint];
  const isInDirectExchange = type === 'indirect';
  const nextCountKeys = () => {  
    keywordsByParagraph([ paragraphs.keywordsCountToShow ]);
  }
 
  useEffect(() => {
    section && ref.current.scrollIntoView({ block: 'center' });
  }, [section]);

  return (
    <Fragment>
      <div className='shadow-layout rounded-22 xs:px-4 xs:pt-4 xs:pb-8'>
        <Text.XL className='xs:text-lg lg:text-xl font-medium' children={title} />
        <div>
          {isInDirectExchange ? (
            <div>
              <div className='pt-4' />
              <Input.Base
                autoComplete='url'
                name='exchangeUrl'
                type='text'
                className='xs:p-3'
                placeholder={t('url')}
                register={register}
                error={errors.exchangeUrl}
                tabIndex={14}
              />
            </div>
          ) : null}
          <div className='pt-4' />
          <div className='grid grid-cols-1 gap-3' ref={ref}>
            {paragraphs.slice(0,3).map((pr, index) => {
              
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
                            title={t('see_10_more')}
                            children={t('see_10_more')}
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
          <div className='xs:pt-5 md:pt-0' />
          <div className='md:w-4/12 md:pr-4 md:py-4 lg:w-3/12 xl:w-2/12'>
            <div>
              <Button.Primary
                children={t('see_more')}
                className='md:text-sm xs:font-medium px-10 py-3 xs:rounded-xl xs:w-full'
                type='button'
                onClick={nextCountKeys}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Exchange;
