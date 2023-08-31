import React from "react";

import { SeparatorButton, SeparatorContainer } from "./styles";

interface SeparatorProps {
  onClick: () => void;
}

export const Separator: React.FC<SeparatorProps> = ({ onClick }) => {
  return (
    <SeparatorContainer>
      <SeparatorButton onClick={onClick} />
    </SeparatorContainer>
  );
};
