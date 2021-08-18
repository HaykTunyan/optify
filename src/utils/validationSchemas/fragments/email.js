import { validators } from 'utils';
import * as yup from 'yup';

const email = (t) =>
  yup
    .string()
    .trim(t('invalid_email_msg'))
    .strict(true)
    .email(t('invalid_email_msg'))
    .required(t('email_required_msg'))
    .matches(validators.email, t('invalid_email_msg'));

export default email;
