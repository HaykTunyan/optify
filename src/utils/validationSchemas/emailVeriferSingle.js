import * as yup from 'yup';
import email from './fragments/email';

const emailVeriferSingle = (t) =>
  yup.object().shape({
    email: email(t),
  });

export default emailVeriferSingle;
