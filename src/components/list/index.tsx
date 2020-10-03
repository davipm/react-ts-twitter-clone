import React, { ReactNode } from "react";

import { Container, Item, Title } from "./styles";

interface Props {
  title: string;
  elements: ReactNode[];
}

function List({ title, elements }: Props) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </Container>
  );
}

export default List;
