import { UI } from 'store/actionTypes';
export const initialState = ['Guest Post', 'Link Building', 'Broken Link'];

const campaign = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.CAMPAIGN].includes(type):
      return [...state, payload.campaign];
    default:
      return state;
  }
};

export default campaign;
