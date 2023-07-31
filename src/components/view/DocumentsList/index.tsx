import { DEFAULT_DOCUMENTS } from 'consts';
import React from 'react';
import { DocumentsListComponent } from 'components/common';

export const DocumentsListView: React.FC = () => {
  return (
    <>
      <DocumentsListComponent documents={DEFAULT_DOCUMENTS} />
    </>
  );
};
