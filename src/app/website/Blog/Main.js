import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card';
import Banner from 'assets/blog/banner.png';
import Avatar from 'assets/blog/avatar.png';

export const data = [
  {
    cover: Banner,
    title: 'The Best Marketing tools of 2021',
    date: new Date(),
    commentsCount: 22,
    author: {
      avatar: Avatar,
      fullName: 'Natalie Portman',
      position: 'Search Engine Optimizer',
    },
  },
  {
    cover: Banner,
    title: 'The Best Marketing tools of 2021',
    date: new Date(),
    commentsCount: 1,
    author: {
      avatar: Avatar,
      fullName: 'Natalie Portman',
      position: 'Search Engine Optimizer',
    },
  },
  {
    cover: Banner,
    title: 'The Best Marketing tools of 2021',
    date: new Date(),
    commentsCount: 0,
    author: {
      avatar: Avatar,
      fullName: 'Natalie Portman',
      position: 'Search Engine Optimizer',
    },
  },
];

const Main = () => {
  const { t } = useTranslation();
  const articles = [...data, ...data, ...data];
  return (
    <div>
      <div className='pt-8' />
      <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles.map((item, idx) => (
          <Card item={item} t={t} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default Main;
