import * as yup from 'yup';
import domain from './fragments/domain';
import psl from 'psl';
import { urlHelper } from 'utils';

const defaultRange = (t) =>
  yup
    .number()
    .required()
    .min(0, `${t('invalid_range_msg')} [0,100]`)
    .max(100, `${t('invalid_range_msg')} [0,100]`)
    .typeError(t('invalid_number_msg'));

const brokenLink = (t) =>
  yup.object().shape(
    {
      domainMetric: yup.string().required(),
      min: defaultRange(t),
      max: defaultRange(t),
      trafficMin: yup
        .number()
        .required()
        .min(0, `${t('greater_equal_than')} 0`)
        .typeError(t('invalid_number_msg')),
      trafficMax: yup
        .number()
        .required()
        .min(0, `${t('greater_equal_than')} 0`)
        .typeError(t('invalid_number_msg')),
      spamScoreMin: defaultRange(t),
      spamScoreMax: defaultRange(t),
      start: yup
        .date()
        .when('end', {
          is: (val) => {
            return val;
          },
          then: yup.date().nullable().max(yup.ref('end'), t('invalid_date_range_msg')),
        })
        .nullable()
        // .max(yup.ref('end'), t('invalid_date_range_msg'))
        .required(t('invalid_date_range_msg')),

      end: yup
        .date()
        .nullable()
        .when('start', {
          is: (val) => {
            return val;
          },
          then: yup.date().nullable().min(yup.ref('start'), t('invalid_date_range_msg')),
        })
        // .min(yup.ref('start'), t('invalid_date_range_msg'))
        .required(t('invalid_date_range_msg')),
      wordCountMin: yup
        .number()
        .required()
        .min(0, `${t('greater_equal_than')} 0`)
        .typeError(t('invalid_number_msg')),
      wordCountMax: yup
        .number()
        .required()
        .min(0, `${t('greater_equal_than')} 0`)
        .typeError(t('invalid_number_msg')),

      proffesions: yup.array().min(1, t('proffesion_required_msg')),
      websiteUrl: domain(t),
      competitorsUrl: yup.array().min(1, t('your_competitor_url_required_msg')),
      // .of(yup.object().shape(domain(t))),
      exchangeUrl: yup.string().when('exchangeType', {
        is: 'indirect',
        then: yup
          .string()
          .required(t('domain_required_msg'))
          .trim(t('invalid_domain_msg'))
          .test('isOneOfValid', t('invalid_domain_msg'), (val) => {
            const hasSlash = val.includes('/');
            const validSlashCount = val.split('/').length === 3;
            const hostName = psl.get(urlHelper.extractHostname(val));
            return hasSlash ? validSlashCount && !!hostName : !!hostName;
          }),
        otherwise: yup.string().notRequired(),
      }),
    },
    [['start', 'end']]
  );

export default brokenLink;
