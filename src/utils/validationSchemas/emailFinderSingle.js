import * as yup from 'yup';
import domain from './fragments/domain';

const emailFinderSingle = (t) =>
  yup.object().shape({
    domain: domain(t),
  });

export default emailFinderSingle;
