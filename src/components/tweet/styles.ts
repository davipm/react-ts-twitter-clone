import styled, { css } from "styled-components/macro";

import { Retweet, Chat, Favorite } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const RetweetIcon = styled(Retweet)`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  margin-top: 3px;
`;

export const Avatar = styled.span`
  position: absolute;
  flex-shrink: 0;
  left: 0;
  top: 0;
  width: 49px;
  height: 49px;
  background-color: var(--gray);
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.header``;
