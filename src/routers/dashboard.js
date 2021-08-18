import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import withLazy from 'hocs/withLazy';
import { baseUrl } from './root';

// import dashboard views
const Users = withLazy(import('app/dashboard/users'));
const Page2 = withLazy(import('app/dashboard/page_2'));
const Page3 = withLazy(import('app/dashboard/page_3'));
const Page404 = withLazy(import('components/_404'));

// declare routes
export const dashboardRoutes = [
  { path: `${baseUrl}/users`, exact: true, component: Users, isMenuItem: true, t_key: 'users' },
  { path: `${baseUrl}/page_2`, exact: true, component: Page2, isMenuItem: true, t_key: 'serials' },
  {
    path: `${baseUrl}/page_3`,
    exact: true,
    component: Page3,
    isMenuItem: true,
    t_key: 'contact_us',
  },
  {
    path: `#`,
    exact: true,
    component: null,
    isMenuItem: true,
    t_key: 'logout',
    props: { logout: true },
  },
  {
    path: `${baseUrl}/404`,
    exact: true,
    component: Page404,
    props: { admin: true },
  },
];

// draw routes
const DashboardRouter = () => (
  <Switch>
    {dashboardRoutes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        render={() => <route.component {...route.props} />}
      />
    ))}
    <Redirect to={`${baseUrl}/users`} />
    <Redirect to={`${baseUrl}/404`} />
  </Switch>
);

export default DashboardRouter;
