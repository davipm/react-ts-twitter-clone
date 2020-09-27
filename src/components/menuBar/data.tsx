import React from "react";

import {
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  HomeIcon,
  ProfileIcon,
} from "./styles";

export default [
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
