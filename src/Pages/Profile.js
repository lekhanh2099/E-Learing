import React, { useEffect } from "react";
import ProfileContainer from "../Containers/Profile";
import FooterContainer from "../Containers/Footer";
import HeaderContainer from "../Containers/Header";

export default function Profile(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer />
      <ProfileContainer props={props} />
      <FooterContainer />
    </>
  );
}
