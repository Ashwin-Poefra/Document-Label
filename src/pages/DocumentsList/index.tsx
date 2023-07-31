import { PATHS } from 'consts';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DocumentsListView, DocumentDetailView } from 'components';
import { WithLayout } from 'components/common';

const DocumentsList: React.FC = () => {
  return (
    <>
      <DocumentsListView />

      <Routes>
        <Route path={PATHS.DOCUMENT_VIEW} element={<DocumentDetailView />} />
      </Routes>
    </>
  );
};

export const DocumentsListPage = WithLayout(DocumentsList);
