import React from "react";

import ProfilePage from "../profilePage";

import {
  Container,
  BackIcon,
  BottomMenu,
  Header,
  ProfileInfo,
  BellIcon,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from "./styles";

function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Davi Pereira</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;
