import { UI } from 'store/actionTypes';
export const initialState = { type: null, payload: null };

const modal = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.OPEN_MODAL].includes(type):
      return payload;
    case [UI.CLOSE_MODAL].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default modal;
