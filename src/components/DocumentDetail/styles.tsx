import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  text-align: center;
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 80px;

  height: calc(100% - 150px);

  border: 1px solid black;
  border-radius: 24px;
  padding: 24px;

  background-color: rgba(0, 0, 0, 0.3);

  overflow: auto;

  color: white;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CountIndex = styled.div`
  font-size: 2rem;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

export const Description = styled.h3`
  padding: 0;
  margin: 0;

  text-align: left;
`;

export const GoToArticleButtonContainer = styled.div`
  text-align: center;
`;

export const GoToArticleButton = styled.a`
  text-decoration: none;

  background-color: gray;
  color: inherit;
  font-size: 1.25rem;
  font-weight: bold;

  border-radius: 16px;

  padding: 8px 16px;

  cursor: pointer;

  display: inline-block;

  &:hover {
    background-color: lightgray;
  }

  animation: bounding 1.5s infinite;

  @keyframes bounding {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const ControlContainer = styled.div`
  max-width: 1000px;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

export const NavigationContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ActionContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 20px;
  padding-right: 20px;

  font-size: 1.2rem;
  font-weight: bold;

  height: 40px;
  border: 1px solid black;

  cursor: pointer;

  color: white;

  user-select: none;
`;
