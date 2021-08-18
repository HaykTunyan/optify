import * as yup from 'yup';
import { validators, convert } from 'utils';

const emailBulk = (t) =>
  yup
    .string()
    .required(t('email_required_msg'))
    .test('isGroupValid', t('invalid_email_msg'), (str) => {
      try {
        if (!str.trim().length) {
          throw t('email_required_msg');
        }
        const emailsArray = convert.csvToArray({ csv: str });
        const isValid = emailsArray.every((em) => validators.email.test(em));
        if (isValid) {
          return true;
        } else {
          throw t('invalid_email_msg');
        }
      } catch (err) {
        return false;
      }
    });

export default emailBulk;
