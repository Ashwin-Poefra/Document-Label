import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 16px;
  padding: 8px;
`;

export const Description = styled.span`
  padding-top: 16px;

  font-size: 1.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 8px;

  border: 2px solid black;
  border-radius: 8px;

  padding: 16px;
`;

export const LabelTagContainer = styled.div`
  display: inline-flex;
  column-gap: 8px;

  background-color: slategray;
  padding: 4px 12px;
  padding-right: 4px;

  border-radius: 8px;
  cursor: pointer;

  margin-bottom: 8px;
`;

export const LabelTagContent = styled.span`
  user-select: none;
`;

export const LabelTagRemoveCross = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  color: black;
  background-color: lightgray;

  &:hover {
    background-color: gray;
  }
`;

export const LabelInput = styled.input`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
`;
