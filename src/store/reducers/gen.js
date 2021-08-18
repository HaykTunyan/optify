export const initialState = { data: null, loaded: false, failed: false };

export const generateReducer = ({ state = initialState, actionType, action }) => {
  const { LOAD, FAIL, SUCCESS } = actionType;
  const { type, response } = action;
  switch (true) {
    case [LOAD].includes(type):
      return { ...state, loaded: false };
    case [FAIL].includes(type):
      return { ...state, failed: true, loaded: true };
    case [SUCCESS].includes(type):
      return { ...state, data: { rows: response.data, meta: response.meta }, loaded: true };
    default:
      return state;
  }
};
