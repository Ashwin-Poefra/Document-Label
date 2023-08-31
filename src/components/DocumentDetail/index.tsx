import React, { useState, useEffect, useContext } from "react";
import { IDocument } from "consts";
import { DocumentsContext } from "contexts";
import {
  Container,
  ContentContainer,
  Title,
  Description,
  GoToArticleButton,
  ControlContainer,
  NavigationContainer,
  ActionContainer,
  ActionButton,
  CountIndex,
  GoToArticleButtonContainer,
} from "./styles";
import { LabelInputComponent } from "../LabelInput";
import { SuggestLabelModalComponent } from "components/SuggestLabelModal";
import { ConfirmDialogComponent } from "components/ConfirmDialog";

interface DocumentDetailComponentProps {
  document: IDocument;
  onFirst: () => void;
  onLast: () => void;
  onPrev: () => void;
  onNext: () => void;
  count: number;
  index: number;
}

type ConfirmDialogOpenStatus = {
  status: boolean;
  type: "first" | "last" | "prev" | "next";
};

export const DocumentDetailComponent: React.FC<
  DocumentDetailComponentProps
> = ({ document, onFirst, onLast, onPrev, onNext, count, index }) => {
  const { setLabels: saveDocument } = useContext(DocumentsContext);

  const [labels, setLabels] = useState<string[]>(document.labels ?? []);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<ConfirmDialogOpenStatus>({
      status: false,
      type: "prev",
    });

  useEffect(() => {
    setLabels(document.labels ?? []);
  }, [document]);

  const onSave = () => {
    saveDocument(document.id, labels);

    onNext();
  };

  const onReset = () => {
    setLabels(document.labels ?? []);
  };

  const onSuggestLabel = (newLabels: string[]) => {
    setLabels(newLabels);
  };

  const onLabelChange = (newLabels: string[]) => {
    setLabels(newLabels);
  };

  const onFirstClick = () => {
    if ((document.labels ?? []).toString() !== labels.toString()) {
      setIsConfirmDialogOpen({
        status: true,
        type: "first",
      });
    } else {
      onFirst();
    }
  };

  const onLastClick = () => {
    if ((document.labels ?? []).toString() !== labels.toString()) {
      setIsConfirmDialogOpen({
        status: true,
        type: "last",
      });
    } else {
      onLast();
    }
  };

  const onPrevClick = () => {
    if ((document.labels ?? []).toString() !== labels.toString()) {
      setIsConfirmDialogOpen({
        status: true,
        type: "prev",
      });
    } else {
      onPrev();
    }
  };

  const onNextClick = () => {
    if ((document.labels ?? []).toString() !== labels.toString()) {
      setIsConfirmDialogOpen({
        status: true,
        type: "next",
      });
    } else {
      onNext();
    }
  };

  const onConfirm = () => {
    saveDocument(document.id, labels);

    switch (isConfirmDialogOpen.type) {
      case "first":
        onFirst();
        break;
      case "last":
        onLast();
        break;
      case "prev":
        onPrev();
        break;
      case "next":
        onNext();
        break;
    }

    setIsConfirmDialogOpen({
      status: false,
      type: "prev",
    });
  };

  const onCancel = () => {
    setIsConfirmDialogOpen({
      status: false,
      type: "prev",
    });
  };

  return (
    <Container>
      <ContentContainer>
        <CountIndex>
          {index + 1} / {count} documents
        </CountIndex>
        <Title>{document.title}</Title>
        <Description>{document.body}</Description>
        <GoToArticleButtonContainer>
          <GoToArticleButton href={document.url} target="#blank">
            Go to Article...
          </GoToArticleButton>
        </GoToArticleButtonContainer>
        <LabelInputComponent labels={labels} onChange={onLabelChange} />
      </ContentContainer>
      <ControlContainer>
        <NavigationContainer>
          <ActionButton onClick={onFirstClick}>First</ActionButton>
          <ActionButton onClick={onPrevClick}>Prev</ActionButton>
          <ActionButton onClick={onNextClick}>Next</ActionButton>
          <ActionButton onClick={onLastClick}>Last</ActionButton>
        </NavigationContainer>
        <ActionContainer>
          <ActionButton onClick={onSave}>Save</ActionButton>
          <ActionButton onClick={onReset}>Reset</ActionButton>
          <SuggestLabelModalComponent onSave={onSuggestLabel}>
            <ActionButton>Suggest Label</ActionButton>
          </SuggestLabelModalComponent>
        </ActionContainer>
      </ControlContainer>

      {isConfirmDialogOpen.status && (
        <ConfirmDialogComponent onConfirm={onConfirm} onCancel={onCancel} />
      )}
    </Container>
  );
};
