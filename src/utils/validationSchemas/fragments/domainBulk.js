import * as yup from 'yup';
import { validators, convert } from 'utils';

const domainBulk = (t) =>
  yup
    .string()
    .required(t('domain_required_msg'))
    .test('isGroupValid', t('invalid_domain_msg'), (str) => {
      try {
        if (!str.trim().length) {
          throw t('domain_required_msg');
        }
        const domainsArray = convert.csvToArray({ csv: str });
        const isValid = domainsArray.every((em) => validators.url.test(em));
        if (isValid) {
          return true;
        } else {
          throw t('invalid_domain_msg');
        }
      } catch (err) {
        return false;
      }
    });

export default domainBulk;
