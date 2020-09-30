import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  outline: 0;

  :hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
