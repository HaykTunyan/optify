import { AUTH } from 'store/actionTypes';

const auth = {
  signIn: (payload) => ({ type: AUTH.SIGN_IN.WATCH, payload }),
  signOut: (payload) => ({ type: AUTH.SIGN_OUT.WATCH, payload }),
  signUp: (payload) => ({ type: AUTH.SIGN_UP.WATCH, payload }),
  verifyEmail: (payload) => ({ type: AUTH.VERIFY_EMAIL.WATCH, payload }),
  resetPassword: (payload) => ({ type: AUTH.RESET_PASSWORD.WATCH, payload }),
  forgotPassword: (payload) => ({ type: AUTH.FORGOT_PASSWORD.WATCH, payload }),
};

export default auth;
