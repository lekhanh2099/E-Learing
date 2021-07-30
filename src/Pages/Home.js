import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import BillboardContainer from "../Containers/Billboard";
import CompanyContainer from "../Containers/Company";
import CoursesHomeContainer from "../Containers/CoursesHome";
import FooterContainer from "../Containers/Footer";
import HeaderContainer from "../Containers/Header";
import TrendingContainer from "../Containers/Trending";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fixed>
        <HeaderContainer />
      </Container>
      <BillboardContainer />
      <TrendingContainer />
      <CoursesHomeContainer props={props} />
      <CompanyContainer />
      <FooterContainer />
    </>
  );
}
