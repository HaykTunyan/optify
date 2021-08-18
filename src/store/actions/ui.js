import { UI } from 'store/actionTypes';

const ui = {
  // modal actions
  openModal: (payload) => ({ type: UI.OPEN_MODAL, payload }),
  closeModal: () => ({ type: UI.CLOSE_MODAL }),
  // sidebar actions
  openSidebar: () => ({ type: UI.OPEN_SIDEBAR }),
  closeSidebar: () => ({ type: UI.CLOSE_SIDEBAR }),
  // mailing ui actions
  selectEmail: (payload) => ({ type: UI.SELECT_EMAIL, payload }),
  deSelectEmail: (payload) => ({ type: UI.DESELECT_EMAIL, payload }),
  deSelectAllEmails: (payload) => ({ type: UI.DESELECT_ALL_EMAILS, payload }),
  //custom template actions
  addCustomTemplateData: (payload) => ({ type: UI.ADD_CUSTOM_TEMPLATE_DATA, payload }),
  removeCustomTemplateData: () => ({ type: UI.REMOVE_CUSTOM_TEMPLATE_DATA }),
  //template actions
  selectTemplate: (payload) => ({ type: UI.SELECT_TEMPLATE, payload }),
  deselectTemplate: () => ({ type: UI.DESELECT_TEMPLATE }),
  //
  addKeyword: (payload) => ({ type: UI.ADD_KEYWORD, payload }),
  //
  newCampaign: (payload) => ({ type: UI.CAMPAIGN, payload }),
  //
  selectParagraphKeyword: (payload) => ({ type: UI.SELECT_PARAGRAPH_KEYWORD, payload }),
  deSelectParagraphKeyword: (payload) => ({ type: UI.DESELECT_PARAGRAPH_KEYWORD, payload }),
};

export default ui;
