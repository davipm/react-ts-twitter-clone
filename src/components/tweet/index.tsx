import React from "react";

import { Container } from "./styles";

function Tweet() {
  return (
    <Container>
      <div>
        <span />
        Você retweetou
      </div>

      <div>
        <span />

        <div>
          <div>
            <strong>Davi Pereira</strong>
            <span>@davi_pereira</span>
            <span />
            <time>10 de dez</time>
          </div>

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
        </div>
      </div>
    </Container>
  );
}

export default Tweet;
