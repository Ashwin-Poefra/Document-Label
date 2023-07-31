import { Document } from 'types';

export type GetDocumentsSuccessType = { documents: Document[] };

export type GetDocumentRequestType = { id: number; error?: () => void };

export type GetDocumentSuccessType = { document: Document };

export type SaveDocumentRequestType = {
  id: number;
  document: Document;
  next?: () => void;
  error?: () => void;
};

export type GetDocumentSuggesetedLabelsType = {
  next?: (labels: string[]) => void;
  error?: () => void;
};
