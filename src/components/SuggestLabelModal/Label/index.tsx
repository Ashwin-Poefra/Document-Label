import React from 'react';
import { LabelContainer, CheckMark, Content } from './styles';

interface LabelComponentProps {
  checked: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const LabelComponent: React.FC<LabelComponentProps> = ({
  checked,
  children,
  onClick,
}) => {
  return (
    <>
      <LabelContainer onClick={onClick} checked={checked ? 'checked' : ''}>
        <Content>{children}</Content>
        {checked && <CheckMark />}
      </LabelContainer>
    </>
  );
};
