import { DEFAULT_DOCUMENTS, IDocument } from "consts";
import React, { createContext, useEffect, useState } from "react";

interface DocumentsContextProps {
  children: React.ReactNode;
}

interface DocumentsContextData {
  documents: IDocument[];
  setLabels: (documentId: number, labels: string[]) => void;
}

const defaultDocumentsContextData: DocumentsContextData = {
  documents: [],
  setLabels: () => {
    // set labels
  },
};

export const DocumentsContext = createContext(defaultDocumentsContextData);

export const DocumentsContextProvider: React.FC<DocumentsContextProps> = ({
  children,
}) => {
  const [documents, setDocuments] = useState<IDocument[]>([]);

  useEffect(() => {
    loadFromLS();

    return () => {
      saveToLS();
    };
  }, []);

  useEffect(() => {
    saveToLS();
  }, [documents]);

  const setLabels = (documentId: number, labels: string[]) => {
    documents.forEach((document) => {
      if (document.id === documentId) {
        document.labels = labels;
      }
    });

    setDocuments([...documents]);
  };

  const saveToLS = () => {
    localStorage.setItem("documents", JSON.stringify(documents));
  };

  const loadFromLS = () => {
    const rawDocumentsData = localStorage.getItem("documents");
    try {
      const documents = JSON.parse(rawDocumentsData ?? "");
      if (documents.length > 0) {
        setDocuments(documents);
      } else {
        setDocuments(DEFAULT_DOCUMENTS);
      }
    } catch (err) {
      setDocuments(DEFAULT_DOCUMENTS);
    }
  };

  return (
    <DocumentsContext.Provider
      value={{
        documents,
        setLabels,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};
