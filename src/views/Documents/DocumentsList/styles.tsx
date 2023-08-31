import styled from "styled-components";

export const Container = styled.div<{ collapsed: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow: auto;

  width: ${({ collapsed }) => (collapsed ? "85px" : "100%")};

  flex: 0 0 auto;

  padding: 16px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 20px;
  }
`;
