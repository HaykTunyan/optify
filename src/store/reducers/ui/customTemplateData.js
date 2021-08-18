import { UI } from 'store/actionTypes';
export const initialState = null;

const customTemplateData = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.ADD_CUSTOM_TEMPLATE_DATA].includes(type):
      return payload;
    case [UI.REMOVE_CUSTOM_TEMPLATE_DATA].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default customTemplateData;
