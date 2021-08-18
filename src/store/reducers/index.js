import { combineReducers } from 'redux';
// data reducers
import user from './user';
import email from './email';
import userVerification from './userVerification';
// ui reducers
import modal from './ui/modal';
import sidebar from './ui/sidebar';
import mailing from './ui/mailing';
import customTemplateData from './ui/customTemplateData';
import selectedTemplate from './ui/selectedTemplate';
import keywords from './ui/keywords';
import paragraphs from './ui/paragraphs';
import paragraphKeywords from './ui/paragraphKeywords';
import pricing from './pricing';

//
import emails from './mailing/emails';
import labels from './mailing/labels';

const ui = combineReducers({
  sidebar,
  modal,
  mailing,
  customTemplateData,
  selectedTemplate,
  keywords,
  paragraphs,
  paragraphKeywords,
});
const mailingR = combineReducers({ emails, labels });

const reducers = combineReducers({ ui, user, userVerification, email, mailingR, pricing });

export default reducers;
