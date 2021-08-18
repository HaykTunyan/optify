import React, { Fragment } from 'react';
import { Container, Title } from 'style-guide';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('blog')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='blog-container'>
        <div className='xs:pt-8 md:pt-10' />
        <Header />
        <Container.Base>
          <div className='text-center'>
            <div className='xs:pt-10 md:pt-16' />
            <Title.Base className='text-center xs:text-1xl md:text-3xl lg:text-5xl xl:text-6xl font-medium'>
              {t('find_article')}<br />{t('which_interests_most')}
            </Title.Base>
          </div>
          <Main />
          <Footer />
        </Container.Base>
      </div>
    </Fragment>
  );
};
export default Blog;
