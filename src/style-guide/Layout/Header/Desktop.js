import React from 'react';
import { Container, Button, Text, Dropdown, Link } from 'style-guide';
import { ActiveItemBorder, NotActiveItemBorder } from './index';

const Desktop = ({
  menuItems = [],
  t,
  isActiveMenuItem,
  activeDropdownItem,
  openSignInModal,
  openSignUpModal,
  user,
}) => {
  return (
    <Container.Base>
      <div className='flex items-center justify-between'>
        <div>
          <Link.Brand t={t} />
        </div>
        <div className='flex'>
          <nav className='flex'>
            <ul className='flex items-center'>
              {menuItems.map((item) =>
                item.isMenuItem ? (
                  <li className='text-dark md:mr-3 lg:mr-6 xl:mr-8 select-none' key={item.t_key}>
                    {item.isDropdown ? (
                      <Dropdown.Menu
                        text={isActiveMenuItem(item) ? activeDropdownItem(item) : t(item.t_key)}
                        options={item.options}
                        t={t}
                        afterText={isActiveMenuItem(item) ? ActiveItemBorder : NotActiveItemBorder}
                      />
                    ) : (
                      <Link.Internal to={item.path}>
                        <Text.Menu
                          children={t(item.t_key)}
                          className={`select-none hover:opacity-75`}
                        />
                        {isActiveMenuItem(item) ? ActiveItemBorder : NotActiveItemBorder}
                      </Link.Internal>
                    )}
                  </li>
                ) : null
              )}
            </ul>
          </nav>
          {user ? (
            <Dropdown.LoggedUser t={t} user={user} />
          ) : (
            <div className='flex ml-4'>
              <Button.SignIn children='Log in' onClick={openSignInModal} />
              <div className='xl:px-2 md:px-1' />
              <Button.SignUp children='Sign up' onClick={openSignUpModal} />
            </div>
          )}
        </div>
      </div>
    </Container.Base>
  );
};

export default Desktop;
