import { urlHelper } from 'utils';
import * as yup from 'yup';
import psl from 'psl';

const domain = (t) =>
  yup
    .string()
    .required(t('domain_required_msg'))
    .trim(t('invalid_domain_msg'))
    .test('isOneOfValid', t('invalid_domain_msg'), (val) => {
      const hasSlash = val.includes('/');
      const validSlashCount = val.split('/').length === 3;
      const hostName = psl.get(urlHelper.extractHostname(val));
      return hasSlash ? validSlashCount && !!hostName : !!hostName;
    });

export default domain;
