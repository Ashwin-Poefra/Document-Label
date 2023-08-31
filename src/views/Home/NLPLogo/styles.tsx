import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: url('images/bg/main-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  font-weight: 700;
`;

export const OpacityContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  max-width: 800px;
  margin-left: 120px;
  margin-right: 120px;

  text-align: center;
  z-index: 50;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
`;

export const Description = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const BottomShadow = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 51;

  width: 100%;
  height: 200px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000 92%);
`;
