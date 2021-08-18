import { EMAIL } from 'store/actionTypes';

const email = {
  verify: (payload) => ({ type: EMAIL.VERIFY.WATCH, payload }),
  findSingle: (payload) => ({ type: EMAIL.FIND_BULK.WATCH, payload }),
  findBulk: (payload) => ({ type: EMAIL.FIND_BULK.WATCH, payload }),
  resetData: () => ({ type: EMAIL.VERIFY.RESET }),
};

export default email;
