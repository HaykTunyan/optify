import React from 'react';
import { Icon, Img, Text, Title } from 'style-guide';
import Banner from 'assets/blog/banner.png';
import Avatar from 'assets/blog/avatar.png';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className='xs:px-0 md:px-10 lg:px-12 xl:w-918 xs:mx-auto'>
      <div className='shadow-layout rounded-3xl rounded-br-none'>
        <Img.Static src={Banner} />
        <div className='xs:py-5 xs:px-4'>
          <Title.Base className='text-1xl font-medium' children={t('blog_marketing')} />
          <div className='pt-3' />
          <div className='md:flex md:justify-between'>
            <div className='flex'>
              <Img.Static className='w-10 h-10' src={Avatar} />
              <div className='flex flex-col pl-4 flex-wrap'>
                <Text.SM className='text-black' children={t('blog_user')} />
                <Text.XS className='text-dark-alpha' children={t('blog_position')} />
              </div>
            </div>
            <div className='flex-col'>
              <div className='invisible'>
                <Text.SM className='text-black hover:underline' children='space' />
              </div>
              <div className='flex items-center'>
                <Icon.Calendar className='fill-primary' />
                <div
                  className='pl-2 text-base font-medium'
                  children={moment(new Date()).format('DD/MM/YY')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
