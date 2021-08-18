import * as yup from 'yup';

const createNewTemplate = (t) =>
  yup.object().shape({
    name: yup
      .string()
      .trim(t('template_name_required_msg'))
      .required(t('template_name_required_msg'))
      .min(1, t('invalid_template_name_msg'))
      .max(50, t('invalid_template_name_msg')),
    mainTextItems: yup.array().notRequired().nullable(),
    mainText: yup
      .string()
      .trim(t('main_text_required_msg'))
      .required(t('main_text_required_msg'))
      .min(1, t('invalid_main_text_msg'))
      .max(200, t('invalid_main_text_msg')),
  });

export default createNewTemplate;
