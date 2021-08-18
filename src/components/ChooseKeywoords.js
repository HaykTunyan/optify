import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, Link, Icon, KeywordsCarousel } from 'style-guide';
import { PATHS } from 'common';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { useWindowResize } from 'hooks';
import { urlHelper } from 'utils';
import { Helmet } from 'react-helmet-async';

const ChooseKeywords = ({ closeModal }) => {
  const { isMobile } = useWindowResize();
  const { paragraphs, keywordsByParagraph, modal } = useSelector(selectors.ui);
  const [index, setIndex] = useState(modal?.payload?.index || 0);
  const history = useHistory();
  const dispatch = useDispatch();
  const selectKeyword = (payload) => dispatch(actions.ui.selectParagraphKeyword(payload));
  const { t } = useTranslation();
  const paragraph = paragraphs.find((p, idx) => idx === index);
  const keywords = keywordsByParagraph(paragraph?.id);
  const onSubmit = () => {
    isMobile
      ? history.push({
          pathname: PATHS.GUEST_POST,
          search: urlHelper.setSearchParam({ key: 'section', value: 'exchange' }),
        })
      : closeModal();

  };

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('choose_keywords')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='lg:w-918 md:w-672 flex flex-col'>
        <div className='pt-5 md:hidden' />
        <Link.Internal
          to={PATHS.LINK_BUILDING}
          className='flex items-center hover:underline md:hidden'
        >
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-semibold text-dark text-lg leading-0'
            children={t('link_building')}
          />
        </Link.Internal>
        <div className='pt-8 md:hidden' />
        <Text.XL
          className='font-semibold text-primary md:hidden xs:text-xl'
          children={t('choose_keywords')}
        />
        <div className='pt-8' />
        <div className='block'>
          <KeywordsCarousel
            index={index}
            setIndex={setIndex}
            selectKeyword={selectKeyword}
            keywords={keywords}
            paragraph={paragraph}
            paragraphs={paragraphs}
          />
        </div>
        <div className='flex justify-between xs:sticky xs:py-8 bottom-0 z-50 md:static xs:bg-white md:bg-transparent'>
          <div>
            <Button.Secondary
              className='text-dark text-base py-3 px-10 w-150'
              children={t('reset')}
              type='button'
              onClick={() => selectKeyword({ [paragraph?.id]: [] })}
            />
          </div>
          <div>
            <Button.Primary
              className='text-light text-base py-3 px-10 w-150'
              children={t('submit')}
              type='button'
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ChooseKeywords;
