import { DEFAULT_LABELS, PATHS } from 'consts';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppActions, useAppDispatch, useAppSelector } from 'store';
import {
  ButtonComponent,
  LabelsInputComponent,
  Modal,
} from 'components/common';

export const DocumentDetailView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { document } = useAppSelector(({ documents }) => documents);

  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    if (Number.isNaN(id)) {
      navigate(PATHS.DOCUMENTS_LIST);
    } else {
      dispatch(
        AppActions.documents.getDocumentRequest({
          id: Number(id),
        })
      );
    }
  }, [id]);

  const onSuggestLabels = () => {
    setLabels(DEFAULT_LABELS);
  };

  const onSave = () => {
    navigate(PATHS.DOCUMENTS_LIST);
  };

  const onCancel = () => {
    navigate(PATHS.DOCUMENTS_LIST);
  };

  return (
    <Modal.Component>
      <Modal.Header onClose={onCancel}>
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Document View
        </h3>
      </Modal.Header>
      <Modal.Content>
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {document?.title}
        </h5>
        <div className="mb-2 text-xl text-gray-700 dark:text-gray-400">
          {document?.body}
        </div>
        <div className="mb-2 text-blue-700 dark:text-gray-400">
          <a
            href={document?.url}
            className="underline underline-offset-2"
            target="_blank"
          >
            See more...
          </a>
        </div>
        <div className="flex gap-2 text-sm">
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Labels:&nbsp;</strong>
            <ButtonComponent onClick={onSuggestLabels}>Suggest</ButtonComponent>
          </div>
          <LabelsInputComponent labels={labels} onChange={setLabels} />
        </div>
      </Modal.Content>
      <Modal.Footer>
        <ButtonComponent onClick={onSave}>Save</ButtonComponent>
        <ButtonComponent onClick={onCancel} isCancel>
          Cancel
        </ButtonComponent>
      </Modal.Footer>
    </Modal.Component>
  );
};
