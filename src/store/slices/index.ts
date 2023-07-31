import documentsSlice, { documentsActions } from './documents.slice';
import loadingSlice, { loadingActions } from './loading.slice';

export const Slices = {
  documents: documentsSlice.reducer,
  loading: loadingSlice.reducer,
};

export const Actions = {
  documents: documentsActions,
  loading: loadingActions,
};
