import React from "react";
import { IDocument } from "consts";
import { DocumentContainer, DocumentNumber, Title } from "./styles";

interface DocumentComponentProps {
  document: IDocument;
  collapsed: boolean;
  selected: boolean;
  onClick: () => void;
}

export const DocumentComponent: React.FC<DocumentComponentProps> = ({
  document,
  collapsed,
  selected,
  onClick,
}) => {
  return (
    <DocumentContainer
      onClick={onClick}
      collapsed={collapsed ? "collapsed" : ""}
      selected={selected ? "selected" : ""}
      key={document.id}
    >
      <DocumentNumber>{document.id + 1}</DocumentNumber>
      {!collapsed && <Title>{document.title}</Title>}
    </DocumentContainer>
  );
};
