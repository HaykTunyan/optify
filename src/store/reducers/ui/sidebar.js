import { UI } from 'store/actionTypes';
export const initialState = { opened: false };

const sidebar = (state = initialState, action) => {
  const { type } = action;
  switch (true) {
    case [UI.OPEN_SIDEBAR].includes(type):
      return { ...state, opened: true };
    case [UI.CLOSE_SIDEBAR].includes(type):
      return { ...state, opened: false };
    default:
      return state;
  }
};

export default sidebar;
