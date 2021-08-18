import * as yup from 'yup';
import email from './fragments/email';

const forgotPassword = (t) =>
  yup.object().shape({
    email: email(t),
  });

export default forgotPassword;
