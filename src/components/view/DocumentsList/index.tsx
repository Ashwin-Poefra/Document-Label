import React from 'react';
import { useAppSelector } from 'store';
import { DocumentsListComponent } from 'components/common';

export const DocumentsListView: React.FC = () => {
  const { documents } = useAppSelector(({ documents }) => documents);

  return (
    <>
      <DocumentsListComponent documents={documents} />
    </>
  );
};
