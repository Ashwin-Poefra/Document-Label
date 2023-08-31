import React, { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
  ActionButtonContainer,
  RoundedCrossCloseButton,
  LabelsContainer,
} from "./styles";
import { StyledButtonComponent } from "../StyledButton";
import { DEFAULT_LABELS } from "consts";
import { LabelComponent } from "./Label";

interface SuggestLabelModalComponentProps {
  children: React.ReactNode;
  onSave: (labels: string[]) => void;
}

export const SuggestLabelModalComponent: React.FC<
  SuggestLabelModalComponentProps
> = ({ children, onSave }) => {
  const [checkedStatus, setCheckedStatus] = useState<boolean[]>(
    DEFAULT_LABELS.map(() => true)
  );

  const onLabelClick = (index: number) => {
    checkedStatus[index] = !checkedStatus[index];
    setCheckedStatus([...checkedStatus]);
  };

  const onSaveLabels = () => {
    onSave(DEFAULT_LABELS.filter((_label, index) => checkedStatus[index]));
  };

  return (
    <Root>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Suggested Labels</Title>
          <Description>Labels generated from the AI</Description>
          <LabelsContainer>
            {DEFAULT_LABELS.map((label, index) => (
              <LabelComponent
                key={index}
                onClick={() => onLabelClick(index)}
                checked={checkedStatus[index]}
              >
                {label}
              </LabelComponent>
            ))}
          </LabelsContainer>
          <ActionButtonContainer>
            <Close asChild>
              <StyledButtonComponent
                onClick={() => {
                  // Do nothing to close dialog
                }}
                actionType="mauve"
              >
                Cancel
              </StyledButtonComponent>
            </Close>
            <Close asChild>
              <StyledButtonComponent onClick={onSaveLabels} actionType="red">
                Save
              </StyledButtonComponent>
            </Close>
          </ActionButtonContainer>
          <Close asChild>
            <RoundedCrossCloseButton>
              <Cross2Icon />
            </RoundedCrossCloseButton>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
