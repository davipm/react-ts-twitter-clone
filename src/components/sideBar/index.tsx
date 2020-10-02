import React from "react";
import StickBox from "react-sticky-box";

import List from "../list";
import News from "../news";
import FollowSuggestion from "../followSuggestion";

import {
  Container,
  Body,
  SearchInput,
  SearchIcon,
  SearchWrapper,
} from "./styles";

const followSuggestion = [
  <FollowSuggestion name="Test" nickname="test" />,
  <FollowSuggestion name="Test" nickname="test" />,
  <FollowSuggestion name="Test" nickname="test" />,
];

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
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search in twitter" />
        <SearchIcon />
      </SearchWrapper>

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
