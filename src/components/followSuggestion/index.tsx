import React from "react";

import { Avatar, Container, FollowButton, Info } from './styles';

interface Props {
  name: string
  nickname: string
}

function FollowSuggestion({ name, nickname }: Props) {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton>Follow</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;
