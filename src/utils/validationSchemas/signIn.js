import * as yup from 'yup';
import email from './fragments/email';
import password from './fragments/password';

const signIn = (t) =>
  yup.object().shape({
    email: email(t),
    password: password(t),
  });

export default signIn;
