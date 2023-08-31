import React from 'react';
import {
  Container,
  Content,
  Title,
  Description,
  OpacityContainer,
  BottomShadow,
} from './styles';

export const NLPLogo: React.FC = () => {
  return (
    <Container>
      <OpacityContainer></OpacityContainer>
      <Content>
        <Title>Toy Document Labeling App</Title>
        <Description>
          Tool that enables humans to create training sets for NLP-based machine
          learning models
        </Description>
      </Content>
      <BottomShadow></BottomShadow>
    </Container>
  );
};
