import React from "react";

import menus from "./data";
import Button from "../button";

import {
  Container,
  MenuButton,
  Topside,
  Logo,
  Avatar,
  Botside,
  ExitIcon,
  ProfileData,
} from "./styles";

function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        {menus.map((menu) => (
          <MenuButton key={menu.title} className={menu.active ? "active" : ""}>
            {menu.icon}
            <span>{menu.title}</span>
          </MenuButton>
        ))}

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Davi Pereira</strong>
          <span>@davi_pereira</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;
