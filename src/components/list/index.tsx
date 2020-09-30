import React, { ReactNode } from "react";

import { Container } from "./styles";

interface Props {
  title: string;
  elements: ReactNode[];
}

function List({ title, elements }: Props) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
      </div>

      {elements.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Container>
  );
}

export default List;
