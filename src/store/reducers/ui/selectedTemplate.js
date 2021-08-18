import { UI } from 'store/actionTypes';
export const initialState = null;

const customTemplateData = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.SELECT_TEMPLATE].includes(type):
      return payload;
    case [UI.DESELECT_TEMPLATE].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default customTemplateData;
