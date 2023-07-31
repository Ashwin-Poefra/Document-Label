import React from 'react';
import { DocumentsListView } from 'components';
import { WithLayout } from 'components/common';

const DocumentsList: React.FC = () => {
  return <DocumentsListView />;
};

export const DocumentsListPage = WithLayout(DocumentsList);
