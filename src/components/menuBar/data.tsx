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
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    active: false,
    title: "Explore",
    icon: <BellIcon />,
  },
  {
    active: false,
    title: "Notifications",
    icon: <EmailIcon />,
  },
  {
    active: false,
    title: "Messagens",
    icon: <FavoriteIcon />,
  },
  {
    active: false,
    title: "Bookmarks",
    icon: <FavoriteIcon />,
  },
  {
    active: true,
    title: "Profile",
    icon: <ProfileIcon />,
  },
  {
    active: false,
    title: "More",
    icon: <FavoriteIcon />,
  },
];
