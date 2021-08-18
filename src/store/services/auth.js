import client from 'store/client';
import endpoints from 'store/endpoints';

const auth = {
  signIn: (payload) => client().post(endpoints.signIn, payload),
  signUp: (payload) => client().post(endpoints.signUp, payload),
  forgotPassword: (payload) => client().post(endpoints.forgotPassword, payload),
  resetPassword: (payload) => client().post(endpoints.resetPassword, payload),
  verifyEmail: (payload) => client().post(endpoints.verifyEmail, payload),
};

export default auth;
