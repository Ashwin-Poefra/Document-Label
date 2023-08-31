import React, { KeyboardEvent } from "react";
import {
  Container,
  ContentContainer,
  Description,
  LabelInput,
  LabelTagContainer,
  LabelTagContent,
  LabelTagRemoveCross,
} from "./styles";

interface LabelInputComponentProps {
  labels: string[];
  onChange: (labels: string[]) => void;
}

export const LabelInputComponent: React.FC<LabelInputComponentProps> = ({
  labels,
  onChange,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    const value = event.currentTarget.value;
    if (!value.trim()) {
      return;
    }

    onChange([...labels, value]);
    event.currentTarget.value = "";
  };

  function removeTag(index: number) {
    onChange(labels.filter((_label, i) => i !== index));
  }

  return (
    <Container>
      <Description>Labels:</Description>
      <ContentContainer>
        {labels.map((label, index) => (
          <LabelTagContainer onClick={() => removeTag(index)} key={index}>
            <LabelTagContent>{label}</LabelTagContent>
            <LabelTagRemoveCross onClick={() => removeTag(index)}>
              &times;
            </LabelTagRemoveCross>
          </LabelTagContainer>
        ))}
        <LabelInput
          onKeyDown={handleKeyDown}
          type="text"
          className=" flex-grow py-2 px-0 border-none outline-none"
          placeholder="Type new label..."
        />
      </ContentContainer>
    </Container>
  );
};
