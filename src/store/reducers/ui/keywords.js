import { UI } from 'store/actionTypes';
export const initialState = ['sport', 'science', 'nature', 'network'];

const keywords = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.ADD_KEYWORD].includes(type):
      return [...state, payload.keyword];
    default:
      return state;
  }
};

export default keywords;
