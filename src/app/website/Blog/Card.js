import React from 'react';
import { Icon, Img, Text, Title, Link } from 'style-guide';
import { PATHS } from 'common';
import moment from 'moment';

const Card = ({ item }) => {
  const hasComments = !!item.commentsCount;
  return (
    <div className='shadow-layout rounded-3xl rounded-br-none'>
      <div className='relative'>
        <Img.Static className='w-full h-52 object-cover rounded-bl-22' src={item.cover} />
        {hasComments ? (
          <div className='absolute bottom-0 right-0 bg-white p-2 rounded-tl-15'>
            <div className='bg-comment bg-no-repeat bg-contain bg-center w-7 h-5 flex justify-center items-center box-border'>
              <Text.SM children={item.commentsCount} className='font-medium text-dark' />
            </div>
          </div>
        ) : null}
      </div>
      <div className='xs:py-5 xs:px-4'>
        <Link.Internal to={PATHS.ARTICLE}>
          <Title.Base className='xs:text-1xl font-medium hover:underline' children={item.title} />
        </Link.Internal>
        <div className='pt-3' />
        <div className='xl:flex xl:justify-between items-center'>
          <div className='flex items-center'>
            <Img.Static className='w-10 h-10' src={item.author.avatar} />
            <div className='flex flex-col pl-4'>
              <Link.Internal to='/author'>
                <Text.SM className='text-black hover:underline' children={item.author.fullName} />
              </Link.Internal>
              <Text.XS className='text-dark-alpha' children={item.author.position} />
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
                children={moment(item.date).format('DD/MM/YY')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
