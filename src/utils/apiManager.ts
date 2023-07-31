import { DEFAULT_DOCUMENTS } from 'consts';
import { Document } from 'types';

export const getDocuments = async (): Promise<Document[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEFAULT_DOCUMENTS);
    }, 1000);
  });
};
