import * as yup from 'yup';
import domainBulk from './fragments/domainBulk';

const emailFinderBulk = (t) =>
  yup.object().shape({
    domains: domainBulk(t),
    emailsPerDomain: yup
      .number()
      .required('')
      .min(1, `${t('invalid_range_msg')} [1,50]`)
      .max(50, `${t('invalid_range_msg')} [1,50]`)
      .typeError(t('invalid_number_msg')),
    proffesions: yup.array().min(1, t('proffesion_required_msg')),
  });

export default emailFinderBulk;
