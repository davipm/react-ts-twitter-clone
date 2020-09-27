import React from "react";

import Feed from "../feed";

function ProfilePage() {
  return (
    <div>
      <div>
        <p>Avatar</p>
      </div>

      <div>
        <button>Edit Profile</button>

        <h1>Davi Pereira</h1>
        <h3>@davi_pereira</h3>

        <p></p>
      </div>

      <Feed />
    </div>
  );
}

export default ProfilePage;
