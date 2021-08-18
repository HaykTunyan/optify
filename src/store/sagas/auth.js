import { AUTH } from '../actionTypes';
import { generateWatcher } from './_generate';
import services from 'store/services';

export const signIn = generateWatcher({
  actionType: AUTH.SIGN_IN,
  service: services.auth.signIn,
});

export const signOut = generateWatcher({
  actionType: AUTH.SIGN_OUT,
  service: null,
});

export const signUp = generateWatcher({
  actionType: AUTH.SIGN_UP,
  service: services.auth.signUp,
});

export const verifyEmail = generateWatcher({
  actionType: AUTH.VERIFY_EMAIL,
  service: services.auth.verifyEmail,
});

export const forgotPassword = generateWatcher({
  actionType: AUTH.FORGOT_PASSWORD,
  service: services.auth.forgotPassword,
});

export const resetPassword = generateWatcher({
  actionType: AUTH.RESET_PASSWORD,
  service: services.auth.resetPassword,
});
