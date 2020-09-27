import styled from "styled-components/macro";

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  color: ${({ outlined }) => (outlined ? "var(--twitter)" : "var(--white)")};
  background-color: ${({ outlined }) =>
    outlined ? "transparent" : "var(--twitter)"};
  border: ${({ outlined }) => (outlined ? "1px solid var(--twitter)" : "none")};
  border-radius: 25px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  outline: 0;

  :hover {
    background-color: ${({ outlined }) =>
      outlined ? "var(--twitter-dark-hover)" : "var(--twitter-light-hover)"};
  }
`;
