import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withLazy } from 'hocs';

import { PATHS } from 'common';
const Email = withLazy(import('./Email'));
const View = withLazy(import('./View'));

const Body = () => {
  return (
    <Switch>
      <Route path={PATHS.MAIL_LIST} exact={true}>
        <View />
      </Route>
      <Route path={`${PATHS.MAIL_SINGLE}/:id`}>
        <Email />
      </Route>
    </Switch>
  );
};

export default Body;
