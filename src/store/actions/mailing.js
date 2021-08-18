import { MAILING } from 'store/actionTypes';
const { LABEL, EMAIL, CAMPAIGN } = MAILING;

const mailing = {
  // label actions
  addLabel: (payload) => ({ type: LABEL.ADD, payload }),
  removeLabel: (payload) => ({ type: LABEL.REMOVE, payload }),
  updateLabel: (payload) => ({ type: LABEL.UPDATE, payload }),
  // email actions
  removeEmail: (payload) => ({ type: EMAIL.REMOVE, payload }),
  updateEmail: (payload) => ({ type: EMAIL.UPDATE, payload }),
  // campaign action
  newCampaign: (payload) => ({ type: CAMPAIGN, payload })
};

export default mailing;
