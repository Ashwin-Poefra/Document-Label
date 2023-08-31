import React from "react";
import { IDocument } from "consts";
import { DocumentComponent } from "components";
import { Container } from "./styles";

interface DocumentsListProps {
  documents: IDocument[];
  collapsed: boolean;
  currentDocumentIndex: number;
  onSelect: (documentIndex: number) => void;
}

export const DocumentsList: React.FC<DocumentsListProps> = ({
  documents,
  collapsed,
  currentDocumentIndex,
  onSelect,
}) => {
  return (
    <Container collapsed={collapsed ? "collapsed" : ""}>
      {documents.map((document, index) => (
        <DocumentComponent
          key={document.id}
          collapsed={collapsed}
          document={document}
          onClick={() => onSelect(index)}
          selected={currentDocumentIndex === index}
        />
      ))}
    </Container>
  );
};
