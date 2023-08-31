import styled from "styled-components";
import { CaretRightIcon } from "@radix-ui/react-icons";

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  height: 100%;
`;

export const SeparatorButton = styled(CaretRightIcon)`
  width: 32px;
  height: 48px;

  background: #666;
  color: white;
  font-size: 2rem;

  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  text-align: left;

  cursor: pointer;

  z-index: 50;

  &:hover {
    transform: scale(1.1);
  }
`;
