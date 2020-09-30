import React from "react";

import Tweet from "../tweet";
import { Container, Tab, Tweets } from "./styles";

function Feed() {
  const tweets = Array(11).fill(null);

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        {tweets.map((_, i) => (
          <Tweet key={i} />
        ))}
      </Tweets>
    </Container>
  );
}

export default Feed;
