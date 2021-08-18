import { validators } from 'utils';
import * as yup from 'yup';
import email from './fragments/email';
import password from './fragments/password';

const signUp = (t) =>
  yup.object().shape({
    email: email(t),

    firstName: yup
      .string()
      .trim(t('invalid_first_name_msg'))
      .strict(true)
      .required(t('first_name_required_msg'))
      .min(2, t('invalid_first_name_msg'))
      .max(20, t('invalid_first_name_msg'))
      .matches(validators.name, t('invalid_first_name_msg')),

    lastName: yup
      .string()
      .trim(t('invalid_last_name_msg'))
      .strict(true)
      .required(t('last_name_required_msg'))
      .min(2, t('invalid_last_name_msg'))
      .max(25, t('invalid_last_name_msg'))
      .matches(validators.name, t('invalid_last_name_msg')),

    country: yup
      .string()
      .trim(t('country_required_msg'))
      .strict(true)
      .required(t('country_required_msg'))
      .matches(validators.name, t('invalid_country_msg')),

    city: yup
      .string()
      .trim(t('city_required_msg'))
      .strict(true)
      .required(t('country_required_msg'))
      .min(2, t('invalid_city_msg'))
      .max(25, t('invalid_city_msg'))
      .matches(validators.name, t('invalid_city_msg')),

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

export default signUp;
