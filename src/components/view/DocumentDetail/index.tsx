import { PATHS } from 'consts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'components/common';

export const DocumentDetailView: React.FC = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate(PATHS.DOCUMENTS_LIST);
  };

  return (
    <Modal.Component>
      <Modal.Header onClose={onCancel}>Header</Modal.Header>
      <Modal.Content>Content</Modal.Content>
      <Modal.Footer>Footer</Modal.Footer>
    </Modal.Component>
  );
};
