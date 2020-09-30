import React from "react";

import {
  Container,
  RetweetIcon,
  Body,
  Retweeted,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  LikeIcon,
  CommentIcon,
} from "./styles";

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Davi Pereira</strong>
            <span>@davi_pereira</span>
            <Dot />
            <time>10 de dez</time>
          </Header>

          <Description>Test</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              18
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
