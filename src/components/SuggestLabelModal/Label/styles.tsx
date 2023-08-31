import styled from 'styled-components';
import { CheckIcon } from '@radix-ui/react-icons';

export const LabelContainer = styled.div<{ checked: string }>`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  width: calc(50% - 16px);
  margin-right: 16px;
  margin-bottom: 16px;

  border: 1px solid black;

  background-color: rgba(0, 0, 0, 0.3);
  background-color: ${({ checked }) => (checked ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.6)')};
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Content = styled.span`
  font-size: 1.125rem;
`;

export const CheckMark = styled(CheckIcon)`
  position: absolute;
  top: 5px;
  right: 0px;

  width: 15px;
  right: 15px;
`;
