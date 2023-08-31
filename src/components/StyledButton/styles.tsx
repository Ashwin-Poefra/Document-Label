import styled from 'styled-components';

export type ActionButtonType = 'green' | 'violet' | 'mauve' | 'red';

export const ActionButton = styled.button<{ actiontype: ActionButtonType }>`
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;

  cursor: pointer;

  ${({ actiontype }) =>
    actiontype === 'green' &&
    `
      background-color: var(--green-4);
      color: var(--green-11);
 
      &:hover {
        background-color: var(--green-5);
      }
      &:focus {
        box-shadow: 0 0 0 2px var(--green-7);
      }
  `}

  ${({ actiontype }) =>
    actiontype === 'violet' &&
    `
      background-color: white;
      color: var(--violet-11);
      box-shadow: 0 2px 10px var(--black-a7);
 
      &:hover {
        background-color: var(--mauve-3);
      }
      &:focus {
        box-shadow: 0 0 0 2px black;
      }
  `}

  ${({ actiontype }) =>
    actiontype === 'mauve' &&
    `
      background-color: var(--mauve-4);
      color: var(--mauve-11);
 
      &:hover {
        background-color: var(--mauve-5);
      }
      &:focus {
        box-shadow: 0 0 0 2px black;
      }
  `}

  ${({ actiontype }) =>
    actiontype === 'red' &&
    `
      background-color: var(--red-4);
      color: var(--red-11);
 
      &:hover {
        background-color: var(--red-5);
      }
      &:focus {
        box-shadow: 0 0 0 2px var(--mauve-7);
      }
  `}
`;
