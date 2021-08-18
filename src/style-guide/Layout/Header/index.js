import React, { useCallback } from 'react';
import actions from 'store/actions';
import { useWindowResize } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { generalRoutes } from 'routers/website';
import { useLocation } from 'react-router-dom';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';
import { MODALS } from 'common';
import selectors from 'store/selectors';

export const ActiveItemBorder = <div className='bg-selectedItem w-8 h-1 rounded-sm' />;
export const NotActiveItemBorder = <div className='bg-transparent w-8 h-1' />;

export const isActiveMenuItem = ({ item, pathname }) =>
  pathname === item.path || (item.isDropdown && item.options.find((opt) => opt.path === pathname));

export const activeDropdownItem = ({ item, pathname, t }) => {
  const activeItem = item.options.find((opt) => opt.path === pathname);
  const activeItemTkey = activeItem?.t_key;
  return t(activeItemTkey);
};

const Header = () => {
  // hooks
  const dispatch = useDispatch();
  const { isMobile } = useWindowResize();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { data } = useSelector(selectors.user);
  // actions
  const openSignInModal = () => dispatch(actions.ui.openModal({ type: MODALS.SIGN_IN }));
  const openSignUpModal = () => dispatch(actions.ui.openModal({ type: MODALS.SIGN_UP }));
  const openSidebar = () => dispatch(actions.ui.openSidebar());
  const closeSidebar = useCallback(() => dispatch(actions.ui.closeSidebar()), [dispatch]);

  const menuItems = data
    ? generalRoutes
    : generalRoutes.filter((m) => m.isMenuItem && !m.isPrivate);

  const childProps = {
    t,
    openSidebar,
    closeSidebar,
    menuItems,
    pathname,
    isActiveMenuItem: (item) => isActiveMenuItem({ item, pathname }),
    activeDropdownItem: (item) => activeDropdownItem({ item, pathname, t }),
    openSignInModal,
    openSignUpModal,
    user: data,
  };

  return (
    <header className='py-4 shadow-layout rounded-br-22 bg-white rounded-bl-22 sticky top-0 z-header'>
      {isMobile ? <MobileHeader {...childProps} /> : <DesktopHeader {...childProps} />}
    </header>
  );
};

export default Header;
