import React from 'react';
import { Img, Text, Title } from 'style-guide';
import EasySelectionMetricVideo from 'assets/homepage/easy-selection-metrics.gif'; // change mp4 in gif
import ChooseKeywordVideo from 'assets/homepage/choose-your-keyword.gif';  // change mp4 in gif

const ChooseYourKeyword = ({ t }) => {
  return (
    <div>
      <div className='lg:flex'>
        <div className='flow-root lg:w-4/12 md:pr-3'>
          <div className='md:pt-3' />
          <Title.H3
            className='font-medium md:text-3xl xl:text-6xl'
            children={t('get_target_keyword_head')}
          />
          <div className='xs:pt-3 md:pt-5' />
          <Text.MD children={t('get_target_keyword_desc')} />
        </div>
        <div className='xs:pt-3 lg:pt-0' />
        <div className='lg:w-8/12'>
          <Img.Static className='w-full' src={ChooseKeywordVideo} alt="CHOOSE_YOUR_KEYWORD" />
        </div>
      </div>
      <div className='xs:pt-10 md:pt-20' />
      <div className='lg:flex justify-between'>
        <div className='flow-root lg:w-4/12 lg:order-2 md:pl-4'>
          <div className='md:pt-3' />
          <Title.H3
            className='text-2xl md:text-3xl xl:text-6xl font-medium'
            children={t('easy_selection_metrics_head')}
          />
          <div className='xs:pt-3 md:pt-5' />
          <Text.MD children={t('easy_selection_metrics_desc')} />
        </div>
        <div className='xs:pt-3 lg:pt-0' />
        <div className='flex lg:w-8/12 lg:order-1'>
          <Img.Static className='w-full' src={EasySelectionMetricVideo} alt="EASY_SELECTION_METRICS" />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourKeyword;
