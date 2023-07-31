import React, { useEffect } from 'react';
import { AppActions, useAppDispatch, useAppSelector } from 'store';
import { DocumentsListComponent } from 'components/common';

export const DocumentsListView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { documents } = useAppSelector(({ documents }) => documents);

  useEffect(() => {
    dispatch(AppActions.documents.getDocumentsRequest());
  }, []);

  return (
    <>
      <DocumentsListComponent documents={documents} />
    </>
  );
};
