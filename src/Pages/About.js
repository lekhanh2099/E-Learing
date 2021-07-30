import React, { useEffect } from "react";
import AboutBannerContainer from "../Containers/AboutBanner";
import AboutGridContainer from "../Containers/AboutGrid";
import GlobalReachContainer from "../Containers/GlobalReach";
import HeaderContainer from "../Containers/Header";
import JoinTeamContainer from "../Containers/JoinTeam";

export default function About(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer />
      <AboutBannerContainer />
      <GlobalReachContainer />
      <AboutGridContainer />
      <JoinTeamContainer />
    </>
  );
}
