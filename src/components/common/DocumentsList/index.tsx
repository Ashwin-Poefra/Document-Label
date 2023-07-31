import React from 'react';
import { Document } from 'types';
import { DocumentComponent } from '../Document';

interface DocumentsListProps {
  documents: Document[];
}

export const DocumentsListComponent: React.FC<DocumentsListProps> = ({
  documents,
}) => {
  return (
    <div className="m-8 grid gap-4">
      {documents.map((document, index) => (
        <DocumentComponent
          key={document.id}
          index={index + 1}
          document={document}
          isOdd={!!(index % 2)}
        />
      ))}
    </div>
  );
};
