import { DEFAULT_DOCUMENTS } from 'consts';
import { Document } from 'types';

export const getDocuments = async (): Promise<Document[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEFAULT_DOCUMENTS);
    }, 1000);
  });
};

export const getDocument = async (data: {
  id: number;
}): Promise<Document | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const [document] = DEFAULT_DOCUMENTS.filter(
        (document) => document.id === data.id
      );

      if (document) {
        resolve(document);
      } else {
        reject(null);
      }
    }, 1000);
  });
};
