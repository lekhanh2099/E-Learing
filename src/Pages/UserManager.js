import React from "react";
import UserManagerContainer from "../Containers/UserManager";
import { memo } from "react";
function UserManager() {
  return (
    <>
      <UserManagerContainer />
    </>
  );
}

export default memo(UserManager);
