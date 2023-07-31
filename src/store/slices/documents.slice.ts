/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_DOCUMENTS } from 'consts';
import { DocumentsAction } from 'store/types';
import { Document } from 'types';

type DocumentsState = {
  documents: Document[];
  document?: Document;
};

const initialState: DocumentsState = {
  documents: DEFAULT_DOCUMENTS,
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState: initialState,
  reducers: {
    getDocumentsRequest() {
      // Get documents request action
    },
    getDocumentsSuccess(
      state: DocumentsState,
      action: PayloadAction<DocumentsAction.GetDocumentsSuccessType>
    ) {
      state.documents = action.payload.documents;
    },
    getDocumentsFailure() {
      // Get documents failure action
    },

    getDocumentRequest(
      _,
      _action: PayloadAction<DocumentsAction.GetDocumentRequestType>
    ) {
      // Get documents request action
    },
    getDocumentSuccess(
      state: DocumentsState,
      action: PayloadAction<DocumentsAction.GetDocumentSuccessType>
    ) {
      state.document = action.payload.document;
    },
    getDocumentFailure() {
      // Get documents failure action
    },

    saveDocumentRequest() {
      // Save document request action
    },
    saveDocumentSuccess() {
      // Save document success action
    },
    saveDocumentFailure() {
      // Save document failure action
    },

    getDocumentSuggesetedLabelsRequest() {
      // Get suggested document labels request action
    },
  },
});

export const documentsActions = documentsSlice.actions;

export default documentsSlice;
