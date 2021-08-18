import { UI } from 'store/actionTypes';
export const initialState = { selectedIds: [] };

const mailing = (state = initialState, { type, payload }) => {
  switch (true) {
    case [UI.SELECT_EMAIL].includes(type):
      return { ...state, selectedIds: [...state.selectedIds, ...payload.ids] };
    case [UI.DESELECT_EMAIL].includes(type):
      return { ...state, selectedIds: state.selectedIds.filter((id) => !payload.ids.includes(id)) };
    case [UI.DESELECT_ALL_EMAILS].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default mailing;
