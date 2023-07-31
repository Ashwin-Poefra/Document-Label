import { DEFAULT_DOCUMENTS, DEFAULT_LABELS } from 'consts';
import { Document } from 'types';

export const getDocuments = async (): Promise<Document[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rawDocuments = sessionStorage.getItem('documents');

      try {
        if (!rawDocuments) {
          throw new Error('No data on session!');
        }

        const documents: Document[] = JSON.parse(rawDocuments ?? '');
        resolve(documents);
      } catch (err) {
        saveDocuments(DEFAULT_DOCUMENTS)
          .then(() => {
            resolve(DEFAULT_DOCUMENTS);
          })
          .catch(() => {
            reject(null);
          });
      }
    }, 1000);
  });
};

export const getDocument = async (data: {
  id: number;
}): Promise<Document | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rawDocuments = sessionStorage.getItem('documents');

      try {
        const documents: Document[] = JSON.parse(rawDocuments ?? '');
        const [document] = documents.filter(
          (document) => document.id === data.id
        );

        if (document) {
          resolve(document);
        } else {
          reject(null);
        }
      } catch (err) {
        saveDocuments(DEFAULT_DOCUMENTS)
          .then(() => {
            reject(null);
          })
          .catch(() => {
            reject(null);
          });
      }
    }, 1000);
  });
};

export const saveDocuments = async (documents: Document[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      sessionStorage.setItem('documents', JSON.stringify(documents));
      resolve(null);
    }, 1000);
  });
};

export const getDocumentSuggesetedLabels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEFAULT_LABELS);
    }, 1000);
  });
};
