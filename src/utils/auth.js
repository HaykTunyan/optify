import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import selectors from 'store/selectors';
const locationHelper = locationHelperBuilder({});

const isAuth = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: '/login',
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: (state) => !!selectors.admin(state).data,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated',
});

const isNotAuth = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/dashboard',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // If selector is true, wrapper will not redirect
  // So if there is no user data, then we show the page
  authenticatedSelector: (state) => !selectors.admin(state).data,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated',
});

const AuthHelper = {
  isAuth,
  isNotAuth,
};

export default AuthHelper;
