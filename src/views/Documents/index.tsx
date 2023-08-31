import React, { useState, useContext } from "react";
import { DocumentsContext } from "contexts";
import { DocumentsList } from "./DocumentsList";
import { Separator } from "./Separator";
import { Container } from "./styles";
import { DocumentDetailComponent } from "components";

export const DocumentsView: React.FC = () => {
  const { documents } = useContext(DocumentsContext);

  const [isListCollapsed, setIsListCollapsed] = useState<boolean>(false);
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState<number>(-1);

  const onCollapse = () => {
    setIsListCollapsed(false);
  };

  const onSelectDocument = (documentIndex: number) => {
    setCurrentDocumentIndex(documentIndex);
    setIsListCollapsed(true);
  };

  const onFirstDocument = () => {
    setCurrentDocumentIndex(0);
  };

  const onLastDocument = () => {
    setCurrentDocumentIndex(documents.length - 1);
  };

  const onPrevDocument = () => {
    setCurrentDocumentIndex(Math.max(currentDocumentIndex - 1, 0));
  };

  const onNextDocument = () => {
    setCurrentDocumentIndex(
      Math.min(currentDocumentIndex + 1, documents.length - 1)
    );
  };

  return (
    <Container>
      <DocumentsList
        documents={documents}
        collapsed={isListCollapsed}
        currentDocumentIndex={currentDocumentIndex}
        onSelect={onSelectDocument}
      />
      {isListCollapsed && (
        <>
          <Separator onClick={onCollapse} />
          {currentDocumentIndex !== -1 && (
            <DocumentDetailComponent
              count={documents.length}
              index={currentDocumentIndex}
              document={documents[currentDocumentIndex]}
              onFirst={onFirstDocument}
              onLast={onLastDocument}
              onPrev={onPrevDocument}
              onNext={onNextDocument}
            />
          )}
        </>
      )}
    </Container>
  );
};
