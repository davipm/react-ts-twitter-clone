import React from "react";

import {
  Container,
  RetweetIcon,
  Body,
  Retweeted,
  Avatar,
  Content,
  Header,
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
            <span />
            <time>10 de dez</time>
          </Header>

          <div>Test</div>

          <span />

          <div>
            <div>
              <span />
              18
            </div>

            <div>
              <span />
              18
            </div>

            <div>
              <span />
              18
            </div>
          </div>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
