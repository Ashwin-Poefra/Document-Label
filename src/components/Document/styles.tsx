import styled from "styled-components";

export const DocumentContainer = styled.div<{
  selected: string;
  collapsed: string;
}>`
  border: 1px solid ${({ selected }) => (selected ? "white" : "black")};
  border-radius: 16px;
  padding-top: 8px;
  padding-bottom: 8px;

  cursor: pointer;

  background-color: ${({ selected }) =>
    selected ? "transparent" : "rgba(0, 0, 0, 0.5)"};

  display: flex;
  align-items: center;

  width: ${({ collapsed }) => (collapsed ? "48px" : "100%")};

  &:hover {
    background-color: transparent;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const DocumentNumber = styled.strong`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 48px;

  flex: 0 auto;

  color: white;

  font-size: 1.75rem;
`;

export const Title = styled.span`
  width: auto;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: white;

  font-size: 1.5rem;
`;
