import axios from 'axios';
import { store } from 'store/config';
import selectors from 'store/selectors';
import { Toast } from 'style-guide';
import actions from './actions';
const { REACT_APP_LOCAL_API } = process.env;

const client = () => {
  const state = store.getState();
  const signOut = actions.auth.signOut;
  const { token } = selectors.user(state);

  const service = axios.create({
    baseURL: REACT_APP_LOCAL_API,
    headers: { 'X-Access-Token': token ? token : null },
  });
  service.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const response = error.response.data;
      if (error.response.status === 401 && token) {
        // todo fix toast visibility issue on force logout
        Toast.notify.warn('Session expired', { autoClose: 6000 });
        store.dispatch(signOut());
      }
      return Promise.reject(response);
    }
  );
  return service;
};

export default client;
