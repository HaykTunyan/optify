import React, { Fragment, useEffect } from 'react';
import { Container, Icon, Link } from 'style-guide';
import { useSelector } from 'react-redux';
import selectors from 'store/selectors';

const disableScroll = () => (document.body.style.overflowY = 'hidden');
const enableScroll = () => (document.body.style.overflowY = 'auto');

const Mobile = ({ t, pathname, openSidebar, closeSidebar }) => {
  const { sidebar } = useSelector(selectors.ui);

  // enable/disable scroll on collapse toggle
  const sidebarOpened = sidebar.opened;
  useEffect(() => {
    if (sidebarOpened) disableScroll();
    else enableScroll();
  }, [sidebarOpened]);

  // close menu on path change
  useEffect(() => {
    sidebarOpened && closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, closeSidebar]);

  const IconToShow = sidebarOpened ? Icon.Close : Icon.Hamburger;

  return (
    <Fragment>
      <Container.Base>
        <div className='flex justify-between'>
          <Link.BrandSidebar t={t} />
          <IconToShow
            onClick={sidebarOpened ? closeSidebar : openSidebar}
            className='cursor-pointer fill-primary text-7xl'
          />
        </div>
      </Container.Base>
    </Fragment>
  );
};

export default Mobile;
