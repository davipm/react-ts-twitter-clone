import styled, { css } from "styled-components/macro";

import { LocationOn, Cake } from "../../styles/icons";
import Button from "../button";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; // firefox

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background-color: var(--twitter);
`;

export const Avatar = styled.span`
  position: absolute;
  left: 15px;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  bottom: max(-60px, -10vw);
  background-color: var(--gray);
  border: 3.75px solid var(--primary);
  border-radius: 50%;
`;

export const ProfileData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    margin-top: 10px;
    margin-bottom: 10px;
    list-style: none;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        margin-right: 5px;
        fill: var(--gray);
      }
    }
  }
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  padding: 4px 16px;
  top: 2px;
  right: 7px;
  font-size: 13px;

  @media (min-width: 320px) {
    padding: 10px 19px;
    top: 10px;
    font-size: 15px;
  }
`;

export const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;
