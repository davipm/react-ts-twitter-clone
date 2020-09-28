import styled, { css } from "styled-components/macro";

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Twitter,
  FileList2,
  BookmarkStar,
} from "../../styles/icons";

export const Container = styled.aside`
  display: none;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--twitter);
    border-radius: 10px;
  }

  @media (min-width: 500px) {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9px 19px 20px;
    max-height: 100vh;
    top: 0;
    left: 0;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 30px;
  height: 30px;
  margin-left: 13px;
  margin-bottom: 20px;
  cursor: pointer;

  > path {
    fill: #fff;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 0;
  outline: 0;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.15s ease-in-out;

  :hover {
    background-color: var(--twitter-dark-hover);
  }

  :hover,
  :active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  > span {
    display: none;
  }

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  @media (min-width: 1280px) {
    padding-right: 15px;
    padding-left: 15px;

    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
  }
`;

export const Botside = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    :hover {
      > path {
        color: var(--like);
      }
    }
  }
`;

export const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const FileIcon = styled(FileList2)`
  ${iconCSS}
`;

export const BookmarksIcon = styled(BookmarkStar)`
  ${iconCSS}
`;
