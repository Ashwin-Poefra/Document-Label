import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { PATH } from "consts";
import { Container, LogoWrapper, LogoTitleFg, LogoTitleBg } from "./styles";
import { BrandMenuSection } from "./BrandMenu";
import { MainMenuSection } from "./MainMenu";

export const HeaderComponent: React.FC = () => {
  const location = useLocation();

  const isDarkMode = useMemo(() => {
    return location.pathname === PATH.HOME ? true : false;
  }, [location.pathname]);

  return (
    <>
      <Container>
        <BrandMenuSection isDarkMode={isDarkMode} />
        <MainMenuSection isDarkMode={isDarkMode} />
      </Container>
      {!isDarkMode && (
        <LogoWrapper>
          <LogoTitleFg>NLP</LogoTitleFg>
          <LogoTitleBg>NLP</LogoTitleBg>
        </LogoWrapper>
      )}
    </>
  );
};
