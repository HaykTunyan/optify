import * as yup from 'yup';
import { common } from 'utils';
const { checkPassword } = common;

const password = (t) =>
  yup
    .string()
    .trim(t('invalid_password_msg'))
    .strict(true)
    .required(t('password_required_msg'))
    .min(8, t('password_min_length_msg'))
    .test('isValid', t('invalid_password_msg'), (val) => checkPassword(val).isValid);

export default password;
