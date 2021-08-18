import { MAILING } from 'store/actionTypes';
const { LABEL } = MAILING;
// mock data

export const initialState = {
  data: [
    { id: 1, name: 'Inbox', key: 'inbox', index: 1 },
    { id: 2, name: 'Sent', key: 'sent', index: 2 },
    { id: 3, name: 'Oba', key: 'oha', index: 3 },
    { id: 4, name: 'Kwilith', key: 'kwilith', index: 4 },
    { id: 5, name: 'Reallinks', key: 'reallinks', index: 5 },
    { id: 6, name: 'Jazzy', key: 'jazzy', index: 6 },
    { id: 7, name: 'Mynte', key: 'mynte', index: 7 },
    { id: 8, name: 'Browsebug', key: 'browsebug', index: 8 },
    { id: 9, name: 'Kanoodle', key: 'kanoodle', index: 9 },
    { id: 10, name: 'Gigaclub', key: 'gigaclub', index: 10 },
  ],
  loaded: false,
  loading: false,
  failed: false,
};

const labels = (state = initialState, action) => {
  const { payload, type } = action;
  switch (true) {
    case [LABEL.ADD].includes(type):
      return {
        ...state,
        data: [
          ...state.data,
          { ...payload, id: state.data.length + 1, index: state.data.length + 1 },
        ],
      };
    case [LABEL.REMOVE].includes(type):
      return { ...state, data: state.data.filter((item) => item.id !== payload.id) };
    case [LABEL.UPDATE].includes(type):
      return state;
    default:
      return state;
  }
};

export default labels;
