import React from "react";

import Main from "../main";
import MenuBar from "../menuBar";
import SideBar from "../sideBar";

import { Container, Wrapper } from "./styles";

function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
