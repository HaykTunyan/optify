import { validators } from 'utils';
import * as yup from 'yup';

const paymentDetails = (t) =>
  yup.object().shape({
    cardPlaceholder: yup
      .string()
      .trim(t('invalid_full_name_msg'))
      .strict(true)
      .required(t('full_name_required_msg')),
    cardNumber: yup
      .string()
      .strict(true)
      .required(t('card_number_required_msg'))
      .trim(t('card_number_required_msg'))
      .max(16, t('invalid_card_number_msg'))
      .matches(/[\d ]{10,30}/, t('invalid_card_number_msg')),
    streetAddress: yup
      .string()
      .trim(t('streed_address_required_msg'))
      .strict(true)
      .required(t('streed_address_required_msg')),
    cvv: yup
      .string()
      .min(3, t('invalid_cvv_msg'))
      .max(4, t('invalid_cvv_msg'))
      .required(t('cvv_required_msg')),

    zip: yup
      .string()
      .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, t('invalid_zip_msg'))
      .required(t('zip_required_msg'))
      .typeError(t('invalid_zip_msg')),
    expirationDate: yup
      .date()
      .required(t('expiration_date_required_msg'))
      .required(t('expiration_date_required_msg'))
      .typeError(t('expiration_date_required_msg')),
    building: yup
      .string()
      .trim(t('building_required_msg'))
      .strict(true)
      .required(t('building_required_msg')),
    country: yup
      .string()
      .trim(t('country_required_msg'))
      .strict(true)
      .required(t('country_required_msg'))
      .matches(validators.name, t('invalid_country_msg')),

    city: yup
      .string()
      .trim(t('invalid_city_msg'))
      .strict(true)
      .required(t('city_required_msg'))
      .min(2, t('invalid_city_msg'))
      .max(25, t('invalid_city_msg'))
      .matches(validators.name, t('invalid_city_msg')),

    paymentsAgree: yup.bool().test('isChecked', t('you_must_agree'), (val) => val),
    savePayment: yup.bool().test('isChecked', t('you_must_agree'), (val) => val),
  });

export default paymentDetails;
