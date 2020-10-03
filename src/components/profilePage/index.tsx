import React from "react";

import Feed from "../feed";
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styles";

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Davi Pereira</h1>
        <h2>@davi_pereira</h2>

        <p>
          Developer by <a href="!#">Davi Pereira</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            08 Dez
          </li>
        </ul>

        <Followage>
          <span>
            follow <strong>100</strong>
          </span>
          <span>
            following <strong>100</strong>
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
