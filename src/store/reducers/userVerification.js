import { AUTH } from 'store/actionTypes';
const { VERIFY_EMAIL } = AUTH;

export const initialState = { isVerified: false, loaded: false, failed: false };

const userVerification = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [VERIFY_EMAIL.LOAD].includes(type):
      return { ...state, loaded: false, failed: false };
    case [VERIFY_EMAIL.SUCCESS].includes(type):
      return { ...state, loaded: true, failed: false, isVerified: response.success };
    case [VERIFY_EMAIL.FAIL].includes(type):
      return { ...state, failed: true, loaded: true, isVerified: false };
    default:
      return state;
  }
};

export default userVerification;
