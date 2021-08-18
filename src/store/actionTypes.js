const generate = (actionName) => ({
  WATCH: `${actionName}__WATCH`,
  LOAD: `${actionName}__LOAD`,
  FAIL: `${actionName}__FAIL`,
  SUCCESS: `${actionName}__SUCCESS`,
  RESET: `${actionName}__RESET`,
});

export const generateCrud = ({ actionName }) => ({
  FIND: generate(`FIND__${actionName}`),
  FIND_ONE: generate(`FIND_ONE__${actionName}`),
  CREATE: generate(`CREATE__${actionName}`),
  UPDATE: generate(`UPDATE__${actionName}`),
  REMOVE: generate(`REMOVE__${actionName}`),
});

export const AUTH = {
  SIGN_IN: generate('SIGN_IN'),
  SIGN_OUT: generate('SIGN_OUT'),
  SIGN_UP: generate('SIGN_UP'),
  FORGOT_PASSWORD: generate('FORGOT_PASSWORD'),
  RESET_PASSWORD: generate('RESET_PASSWORD'),
  VERIFY_EMAIL: generate('VERIFY_EMAIL'),
};

export const EMAIL = {
  VERIFY: generate('EMAIL_VERIFY'),
  FIND_SINGLE: generate('FIND_SINGLE'),
  FIND_BULK: generate('FIND_BULK'),
};

export const UI = {
  // modals
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  // sidebar
  OPEN_SIDEBAR: 'OPEN_MOBILE_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_MOBILE_SIDEBAR',
  // mailing
  SELECT_EMAIL: 'SELECT_EMAIL',
  DESELECT_EMAIL: 'DESELECT_EMAIL',
  DESELECT_ALL_EMAILS: 'DESELECT_ALL_EMAILS',
  // template
  SELECT_TEMPLATE: 'SELECT_TEMPLATE',
  DESELECT_TEMPLATE: 'DESELECT_TEMPLATE',
  ADD_CUSTOM_TEMPLATE_DATA: 'ADD_CUSTOM_TEMPLATE_DATA',
  REMOVE_CUSTOM_TEMPLATE_DATA: 'REMOVE_CUSTOM_TEMPLATE_DATA',
  //
  ADD_KEYWORD: 'ADD_KEYWORD',
  //
  SELECT_PARAGRAPH_KEYWORD: 'SELECT_PARAGRAPH_KEYWORD',
  DESELECT_PARAGRAPH_KEYWORD: 'DESELECT_PARAGRAPH_KEYWORD',
};

export const MAILING = {
  LABEL: {
    ADD: 'ADD_LABEL',
    REMOVE: 'REMOVE_LABEL',
    UPDATE: 'UPDATE_LABEL',
  },
  EMAIL: {
    REMOVE: 'REMOVE_EMAIL',
    UPDATE: 'UPDATE_EMAIL',
  },
  CAMPAIGN: 'CAMPAIGN',
};
