import { all } from 'redux-saga/effects';
import { documentsSaga } from './documents.saga';

export function* rootSaga() {
  yield all([documentsSaga()]);
}
