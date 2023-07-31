import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Actions as AppActions } from 'store/slices';
import { Document } from 'types';
import { apiManager } from 'utils';

export function* getDocumentsSaga(): Generator {
  try {
    yield put(AppActions.loading.setLoading());

    const documents: Document[] = (yield call(
      apiManager.getDocuments
    )) as Document[];

    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.documents.getDocumentsSuccess({ documents }));
  } catch (error) {
    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.documents.getDocumentsFailure());
  }
}

export const documentsSaga = function* () {
  yield all([
    takeLatest(AppActions.documents.getDocumentsRequest.type, getDocumentsSaga),
  ]);
};
