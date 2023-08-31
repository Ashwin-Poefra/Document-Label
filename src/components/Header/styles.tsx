import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  justify-content: space-between;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
`;

export const WebsiteTitle = styled(Link)`
  font-size: 30px;
  line-height: 36px;

  font-weight: bold;
  color: black;

  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  background: radial-gradient(#272727, #1b1b1b);
  display: grid;
  grid-template-areas: "overlap";
  place-content: center;
  text-transform: uppercase;
  height: 140px;

  > div {
    background-clip: text;
    -webkit-background-clip: text;
    color: white;
    font-family: "Brush Script MT";
    font-weight: 900;
    font-size: clamp(3em, 18vw, 6rem);
    grid-area: overlap;
    letter-spacing: 40px;
    -webkit-text-stroke: 4px transparent;
  }
`;

export const LogoTitleFg = styled.div`
  background-image: repeating-linear-gradient(
    105deg,
    #ffb338 0%,
    #3e2904 5%,
    #ffb338 12%
  );
  color: transparent;
  filter: drop-shadow(5px 15px 15px black);
  transform: scaleY(1.05);
  transform-origin: top;
  font-style: italic;
`;

export const LogoTitleBg = styled.div`
  background-image: repeating-linear-gradient(
    5deg,
    #ffb338 0%,
    #77571d 23%,
    #ffb338 31%
  );
  color: #1e2127;
  transform: scale(1);
  font-style: italic;
`;
