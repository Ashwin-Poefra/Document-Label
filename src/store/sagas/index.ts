import { all } from 'redux-saga/effects';
import { documentSaga } from './document.saga';
import { documentsSaga } from './documents.saga';

export function* rootSaga() {
  yield all([documentSaga(), documentsSaga()]);
}
