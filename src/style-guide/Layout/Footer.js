import React from 'react';
import { Link, Container, Text } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { SOCIALS } from 'common';
import { generalRoutes } from 'routers/website';

const getFooterLinks = () => {
  const links = generalRoutes.filter((r) => r.isFooterItem);
  const firstCol = links.filter((r, idx) => idx < 3);
  const secondCol = links.filter((r, idx) => idx >= 3);
  return { firstCol, secondCol };
};

const Footer = () => {
  const { t } = useTranslation();
  const { firstCol, secondCol } = getFooterLinks();

  return (
    <footer className='shadow-layout pt-5 pb-4 xs:mt-10 md:mt-0'>
      <Container.Base>
        <div className='flex'>
          <Link.Brand t={t} />
        </div>
        <div className='flex flex-wrap'>
          <div className='lg:w-5/12 md:w-4/12 lg:pr-32 md:pr-8 xs:w-full'>
            {/* <p className='my-3'>
              <Text.XS children={t('footer_long_text')} />
            </p> */}
          </div>
          <div className='lg:w-2/12 md:w-3/12 xs:w-6/12'>
            <ul className='flex flex-col'>
              {firstCol.map((item) => (
                <li className='text-dark md:mt-3 xs:mt-5' key={item.t_key}>
                  <Link.Internal to={item.path}>
                    <Text.SM children={t(item.t_key)} />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:w-2/12 md:w-3/12 xs:w-6/12'>
            <ul className='flex flex-col'>
              {secondCol.map((item) => (
                <li className='text-dark md:mt-3 xs:mt-5' key={item.t_key}>
                  <Link.Internal to={item.path}>
                    <Text.SM children={t(item.t_key)} />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:w-2/12 md:w-2/12 xs:w-6/12'>
            <ul className='flex flex-col'>
              <li className='text-dark md:mt-3 xs:mt-8'>
                <Text.SM children={t('follow_us')} />
              </li>
              <li className='flex flex-row mt-3'>
                {SOCIALS.map((item) => (
                  <Link.External path={item.path} className='mr-4' key={item.path}>
                    <item.icon className=' fill-primary text-primary hover:opacity-75' />
                  </Link.External>
                ))}
              </li>
            </ul>
          </div>
          <div className='md:w-full xs:w-6/12 xs:flex xs:items-end'>
            <p className=''>
              <Text.XS children={t('copyright')} />
            </p>
          </div>
        </div>
      </Container.Base>
    </footer>
  );
};

export default Footer;
