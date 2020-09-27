import styled, { css } from "styled-components/macro";
import {
  ArrowLeft,
  Home,
  Notifications,
  Email,
  Search,
} from "../../styles/icons";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  align-items: center;
  top: 0;
  padding: 8px 0 9px 13px;
  text-align: left;
  background-color: var(--primary);
  border-bottom: 1px solid var(--outline);
  z-index: 2;

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    :hover {
      background-color: var(--twitter-dark-hover);
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  border-top: 1px solid var(--outline);
  z-index: 2;

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  transition: all 0.15s ease-in-out;

  :hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
