import * as yup from 'yup';
import emailBulk from './fragments/emailBulk';

const emailVeriferBulk = (t) =>
  yup.object().shape({
    emails: emailBulk(t),
  });

export default emailVeriferBulk;
