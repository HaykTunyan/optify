import React from 'react';
import { Container as div, Text, Dropdown, Button, Link } from 'style-guide';
import { generalRoutes } from 'routers/website';
import { PATHS } from 'common';
import { useLocation } from 'react-router-dom';
import {
  ActiveItemBorder,
  NotActiveItemBorder,
  isActiveMenuItem,
  activeDropdownItem,
} from 'style-guide/Layout/Header';
import { useSelector } from 'react-redux';
import selectors from 'store/selectors';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';

const MobileSidebar = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector(selectors.ui);
  const { data } = useSelector(selectors.user);
  const { pathname } = useLocation();

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-white shadow-layout transition-all duration-200 overflow-hidden h-screen z-toast ${
        sidebar.opened ? 'w-9/12' : 'w-0'
      }`}
    >
      <div className='border-2 h-full '>
        <div className='block '>
          <div className='pt-4 px-2 flex justify-between'>
            <Link.BrandSidebar t={t} />
            {data ? <Dropdown.LoggedUser t={t} /> : null}
          </div>
          <div>
            <div className='py-3' />
            <div className='py-3' />
            <div className='py-2' />
          </div>

          <nav className='sidebar-nav-h overflow-y-auto '>
            <ul className='grid gap-y-2'>
              {generalRoutes.map((item) =>
                item.isMenuItem ? (
                  <li className='text-dark block whitespace-no-wrap pl-4' key={item.t_key}>
                    {item.isDropdown ? (
                      <Dropdown.Menu
                        text={
                          isActiveMenuItem({ item, pathname })
                            ? activeDropdownItem({ item, pathname, t })
                            : t(item.t_key)
                        }
                        options={item.options}
                        t={t}
                        afterText={
                          isActiveMenuItem({ item, pathname })
                            ? ActiveItemBorder
                            : NotActiveItemBorder
                        }
                      />
                    ) : (
                      <Link.Internal to={item.path} className='block py-2'>
                        <Text.Menu
                          children={t(item.t_key)}
                          className={`select-none hover:opacity-75 block`}
                        />
                        {isActiveMenuItem({ item, pathname })
                          ? ActiveItemBorder
                          : NotActiveItemBorder}
                      </Link.Internal>
                    )}
                  </li>
                ) : null
              )}
            </ul>
          </nav>
        </div>
        <div className='flex flex-col justify-center w-full'>
          {data ? (
            <Fragment>
              <Link.Internal to={PATHS.SIGN_OUT} className='text-center'>
                <Button.SignIn children={t('sign_out')} />
              </Link.Internal>
            </Fragment>
          ) : (
            <Fragment>
              <Link.Internal to={PATHS.SIGN_IN} className='text-center'>
                <Button.SignIn children={t('sign_in')} />
              </Link.Internal>
              <div className='py-3' />
              <Link.Internal to={PATHS.SIGN_UP} className='text-center'>
                <Button.SignUp children={t('sign_up')} />
              </Link.Internal>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
