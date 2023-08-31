import React from "react";
import { PATH } from "consts";
import { Menu } from "../../MenuItems";
import { NLPLogo } from "./styles";

interface BrandMenuSectionProps {
  isDarkMode?: boolean;
}

export const BrandMenuSection: React.FC<BrandMenuSectionProps> = ({
  isDarkMode,
}) => {
  return (
    <Menu.Root isdarkmode={isDarkMode ? "dark" : ""}>
      <Menu.List>
        <NLPLogo isdarkmode={isDarkMode ? "dark" : ""}></NLPLogo>
        <Menu.Link to={PATH.HOME}>
          <Menu.Item isdarkmode={isDarkMode ? "dark" : ""}>
            Toy Document Labeling
          </Menu.Item>
        </Menu.Link>
      </Menu.List>
    </Menu.Root>
  );
};
