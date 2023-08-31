import styled from 'styled-components';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/red.css';
import '@radix-ui/colors/violet.css';

export const Root = styled(AlertDialog.Root)``;

export const Portal = styled(AlertDialog.Portal)``;

export const Overlay = styled(AlertDialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const Title = styled(AlertDialog.Title)`
  margin: 0;
  color: var(--mauve-12);
  font-size: 17px;
  font-weight: 500;
`;

export const Description = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: var(--mauve-11);
  font-size: 15px;
  line-height: 1.5;
`;

export const Cancel = styled(AlertDialog.Cancel)``;

export const Action = styled(AlertDialog.Action)``;

export const ActionButtonContainer = styled.div`
  display: flex;
  margin-top: 25;
  justify-content: flex-end;
  column-gap: 16px;
`;
