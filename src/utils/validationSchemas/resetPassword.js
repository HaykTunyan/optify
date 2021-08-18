import * as yup from 'yup';
import password from './fragments/password';

const resetPassword = (t) =>
  yup.object().shape({
    password: password(t),
    confirmPassword: yup
      .string()
      .required()
      .trim(t('invalid_password_msg'))
      .strict(true)
      .required(t('c_password_required_msg'))
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    tacAgreed: yup.bool().test('isChecked', t('you_must_agree'), (val) => val),
  });

export default resetPassword;
