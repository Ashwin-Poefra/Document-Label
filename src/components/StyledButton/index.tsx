import React from 'react';
import { ActionButton, ActionButtonType } from './styles';

interface StyledButtonComponentProps {
  children: React.ReactNode;
  actionType: ActionButtonType;
  onClick: () => void;
}

export const StyledButtonComponent: React.FC<StyledButtonComponentProps> = ({
  actionType,
  children,
  onClick,
}) => {
  return (
    <ActionButton actiontype={actionType} onClick={onClick}>
      {children}
    </ActionButton>
  );
};
