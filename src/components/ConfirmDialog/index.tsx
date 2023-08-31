import React from 'react';
import {
  Root,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Cancel,
  Action,
  ActionButtonContainer,
} from './styles';
import { StyledButtonComponent } from '../StyledButton';

interface ConfirmDialogComponentProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialogComponent: React.FC<ConfirmDialogComponentProps> = ({
  onConfirm,
  onCancel,
}) => (
  <Root defaultOpen={true}>
    <Portal>
      <Overlay className="AlertDialogOverlay" />
      <Content className="AlertDialogContent">
        <Title className="AlertDialogTitle">Are you absolutely sure?</Title>
        <Description className="AlertDialogDescription">
          It seems that you didn't save your changes. Are you okay to discard
          the changes?
        </Description>
        <ActionButtonContainer>
          <Cancel asChild>
            <StyledButtonComponent actionType="mauve" onClick={onCancel}>
              Discard
            </StyledButtonComponent>
          </Cancel>
          <Action asChild>
            <StyledButtonComponent actionType="red" onClick={onConfirm}>
              Save
            </StyledButtonComponent>
          </Action>
        </ActionButtonContainer>
      </Content>
    </Portal>
  </Root>
);
