import * as yup from 'yup';

const createNewKeyword = (t) =>
  yup.object().shape({
    keyword: yup
      .string()
      .trim(t('keyword_required_msg'))
      .required(t('keyword_required_msg'))
      .min(1, t('invalid_keyword_msg'))
      .max(50, t('invalid_keyword_msg')),
  });

export default createNewKeyword;
