import styled, { css } from "styled-components/macro";

import { Retweet as ICON, Chat, Favorite } from "../../styles/icons";

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

export const Retweet = styled(ICON)`
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

export const Header = styled.header`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 15px;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  margin: 0 10px;
  background-color: var(--gray);
`;

export const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));
  margin-top: 12px;
  background-color: var(--outline);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  :nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  :nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }

  :nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

export const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;
export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;
export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
