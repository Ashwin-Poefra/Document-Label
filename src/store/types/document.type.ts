import { Document } from 'types';

export type GetDocumentsSuccessType = { documents: Document[] };

export type GetDocumentRequestType = { id: number };

export type GetDocumentSuccessType = { document: Document };

export type GetDocumentSuggesetedLabelsType = {
  next?: (labels: string[]) => void;
  error?: () => void;
};
