import styled from 'styled-components';

export const NLPLogo = styled.span<{ isdarkmode?: string }>`
  width: 36px;
  height: 36px;

  background-image: ${({ isdarkmode }) =>
    `url('images/bg/nlp-logo-${isdarkmode ? 'dark' : 'light'}.png')`};
  background-size: cover;
  background-position: center;
`;
