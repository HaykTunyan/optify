import { EMAIL } from 'store/actionTypes';
const { VERIFY } = EMAIL;

export const initialState = { data: null, loaded: false, loading: false, failed: false };

const email = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [VERIFY.LOAD].includes(type):
      return { data: null, loaded: false, failed: false, loading: true };
    case [VERIFY.SUCCESS].includes(type):
      return { loaded: true, failed: false, data: response?.result, loading: false };
    case [VERIFY.FAIL].includes(type):
      return { failed: true, loaded: true, data: null, loading: false };
    case [VERIFY.RESET].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default email;
