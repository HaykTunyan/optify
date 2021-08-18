import { all, fork } from 'redux-saga/effects';
import * as auth from './auth';
import * as email from './email';
// import * as ui from './ui';

const combineSagas = {
  ...auth,
  ...email,
  // ...ui,
};

export default function* rootSaga() {
  yield all(Object.values(combineSagas).map((saga) => fork(saga)));
}
