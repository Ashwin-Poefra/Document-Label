import React from "react";
import { MAIN_MENU } from "consts";
import { Menu } from "../../MenuItems";

interface MainMenuSectionProps {
  isDarkMode?: boolean;
}

export const MainMenuSection: React.FC<MainMenuSectionProps> = ({
  isDarkMode,
}) => {
  return (
    <Menu.Root isdarkmode={isDarkMode ? "dark" : ""}>
      <Menu.List>
        {MAIN_MENU.map((menu, index) => (
          <Menu.Link key={index} to={menu.path}>
            <Menu.Item isdarkmode={isDarkMode ? "dark" : ""}>
              {menu.label}
            </Menu.Item>
          </Menu.Link>
        ))}
      </Menu.List>
    </Menu.Root>
  );
};
