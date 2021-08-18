import React from 'react';
import Router from 'routers';
import { auth } from 'utils';
import { withRouter } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex items-start'>
      {/* <Sidebar onLogout={logout} /> */}
      <div className='mx-4 p-1 mt-6 w-full max-w-full '>
        <Router.Dashboard />
      </div>
    </div>
  );
};

export default withRouter(auth.isAuth(Dashboard));
