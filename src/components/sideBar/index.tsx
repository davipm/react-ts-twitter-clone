import React from "react";
import StickBox from "react-sticky-box";

import List from "../list";
import News from "../news";
import FollowSuggestion from "../followSuggestion";

import { Container, Body, SearchInput } from "./styles";

const followSuggestion = [<FollowSuggestion />, <FollowSuggestion />];

const news = [
  <News />,
  <News />,
  <News />,
  <News />,
  <News />,
  <News />,
  <News />,
  <News />,
];

function SideBar() {
  return (
    <Container>
      <div>
        <SearchInput type="text" placeholder="Search in twitter" />
        <span />
      </div>

      <StickBox>
        <Body>
          <List title="Test" elements={followSuggestion} />
          <List title="Test" elements={news} />
        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;
