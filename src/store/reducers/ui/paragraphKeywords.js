import { UI } from 'store/actionTypes';
export const initialState = {
  1: [
    'metus',
    'Nullam',
    'risus',
    'Vivamus',
    'magnis',
    'natoque',
    'neque',
    'Vestibulum',
    'Donec',
    'pede',
    'semper',
  ],

  2: ['justo', 'cubilia', 'Nulla', 'nonummy', 'velit', 'pellentesque'],
  3: ['Aenean', 'Phasellus', 'vestibulum'],
};

const paragraphKeywords = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.SELECT_PARAGRAPH_KEYWORD].includes(type):
      return {
        ...state,
        ...payload,
      };
    case [UI.DESELECT_PARAGRAPH_KEYWORD].includes(type):
      return state.filter((k) => k !== payload.keyword);
    default:
      return state;
  }
};

export default paragraphKeywords;
