import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon, Toast, Text } from 'style-guide';
import Button from './Button';
import Chips from './Chips';
import Highlighter from 'react-highlight-words';

import 'swiper/swiper.scss';
import 'styles/carousel.scss';
import { useTranslation } from 'react-i18next';
import Title from './Title';
import { useWindowResize } from 'hooks';
import { useState } from 'react';

SwiperCore.use([Navigation]);

const onKeywordSelect = ({ keywords, slide, selectKeyword, t }) => {
  const selection = window.document.getSelection();
  const start = selection.baseOffset;
  const end = selection.extentOffset;

  if (start - end) {
    const keyword = selection.anchorNode.textContent.substring(start, end);
    const trimmedKeyword = keyword.trim();

    // if keywords is empty space or keyword length equal to 1
    if (!trimmedKeyword || (trimmedKeyword && trimmedKeyword.length === 1)) {
      Toast.notify.warn(t('keyword_min_length_msg'));
      return;
    }
    // if string includes non alpha symbols
    const includeSpecialSymbols = /[^a-zA-Z ]/g.test(trimmedKeyword);
    if (includeSpecialSymbols) {
      Toast.notify.warn(t('keyword_special_symbols_msg'));
      return;
    }

    // check keywords to contain 3 or less words
    const splitedKeyword = trimmedKeyword.split(' ');

    if (splitedKeyword?.length > 3) {
      Toast.notify.warn(t('keyword_word_limit'));
      return;
    }

    // check duplicate
    if (keywords.includes(trimmedKeyword)) {
      return;
    }

    selectKeyword({ [slide.id]: [...keywords, trimmedKeyword] });
  }
};

const onKeywordDeSelect = ({ keywords, paragraphId, keyword, selectKeyword }) => {
  selectKeyword({ [paragraphId]: keywords.filter((kw) => kw !== keyword) });
};

const KeywordsCarousel = ({ index, setIndex, selectKeyword, paragraph, keywords, paragraphs }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { isMobile } = useWindowResize();

  const paragraphKeywords = keywords.length
    ? keywords.map((keyword, index) => (
        <Chips
          key={index}
          children={keyword}
          onDelete={() =>
            onKeywordDeSelect({
              keywords,
              paragraphId: paragraph?.id,
              keyword,
              selectKeyword,
            })
          }
        />
      ))
    : null;

  const prevButtonDisabled = index === 0;
  const nextButtonDisabled = index === paragraphs.length - 1;

  return (
    <div>
      <Title.H4 children={paragraph?.title} className='text-center' />
      <Swiper
        ref={ref}
        navigation={{ prevEl: '.previous', nextEl: '.next' }}
        initialSlide={index}
        speed={500}
        slidesPerView={1}
        allowTouchMove={false}
        autoHeight={true}
      >
        <div className='carousel-nav'>
          <span
            className='flex items-center cursor-pointer select-none'
            onClick={() => !prevButtonDisabled && setIndex(index - 1)}
          >
            <Button.Base className='previous' disabled={prevButtonDisabled}>
              <Icon.LeftArrow className='fill-primary' />
            </Button.Base>
            <Text.SM
              children={t('previous')}
              className={`md:hidden xs:flex ${
                prevButtonDisabled ? 'text-primary-light' : 'text-primary'
              } pl-5`}
            />
          </span>
          <span
            className='flex items-center cursor-pointer select-none'
            onClick={() => !nextButtonDisabled && setIndex(index + 1)}
          >
            <Text.SM
              children={t('next')}
              className={`md:hidden xs:flex ${
                nextButtonDisabled ? 'text-primary-light' : 'text-primary'
              } pr-5`}
            />
            <Button.Base className='next' disabled={nextButtonDisabled}>
              <Icon.RightArrow className='fill-primary' />
            </Button.Base>
          </span>
        </div>
        {paragraphs.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className='md:px-12 xs:px-0 py-4'>
              <Highlighter
                highlightClassName='text-primary rounded-lg px-1 bg-secondary'
                className='leading-7'
                searchWords={keywords}
                autoEscape={true}
                textToHighlight={slide.content}
                onMouseUp={() => onKeywordSelect({ slide, keywords, selectKeyword, t })}
                onContextMenu={(e) => {
                  e.preventDefault();
                  onKeywordSelect({ slide, keywords, selectKeyword, t });
                }}
                spellCheck={false}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='pt-3' />
      <div className='w-full h-1px bg-divider' />
      <div className='pt-5' />
      <div className='xs:sticky xs:pb-28 xs:py-2 md:py-0 md:pb-0 bottom-0 z-50 md:static xs:bg-white md:bg-transparent'>
        {isMobile ? (
          <BasicCarousel slides={paragraphKeywords || []} slidesPerView={4} />
        ) : (
          <div className='flex flex-wrap gap-2'>{paragraphKeywords}</div>
        )}
      </div>
    </div>
  );
};

export const BasicCarousel = ({ slides, ...props }) => {
  const [currentSlides, setCurrent] = useState(slides);

  useEffect(() => {
    setCurrent(slides);
  }, [slides]);

  return (
    <Swiper
      navigation={false}
      speed={500}
      shortSwipes={true}
      autoHeight={true}
      centeredSlidesBounds={true}
      {...props}
    >
      {currentSlides.map((slide, idx) => (
        <SwiperSlide key={idx} children={slide} />
      ))}
    </Swiper>
  );
};

export default KeywordsCarousel;
