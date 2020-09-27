import React from "react";

import Button from "../button";

import {
  Container,
  MenuButton,
  EmailIcon,
  Topside,
  Logo,
  HomeIcon,
  BellIcon,
  FavoriteIcon,
  ProfileIcon,
  Avatar,
  Botside,
  ExitIcon,
  ProfileData,
} from "./styles";

function MenuBar() {
  const menus = [
    {
      active: false,
      title: "test 1",
      icon: <HomeIcon />,
    },
    {
      active: false,
      title: "test 2",
      icon: <BellIcon />,
    },
    {
      active: false,
      title: "test 3",
      icon: <EmailIcon />,
    },
    {
      active: false,
      title: "test 4",
      icon: <FavoriteIcon />,
    },
    {
      active: true,
      title: "test 5",
      icon: <ProfileIcon />,
    },
  ];

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
