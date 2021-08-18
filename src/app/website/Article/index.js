import React, { Fragment } from 'react';
import Comments from './Comments';
import Content from './Content';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const SinglBlog = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('blog_article')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='singlblog-container'>
        <Header />
        <Content />
        <Comments />
      </div>
    </Fragment>
  );
};

export default SinglBlog;
