import React, {useEffect} from "react";
import DetailContainer from "../Containers/Detail";
import FooterContainer from "../Containers/Footer";
import HeaderContainer from "../Containers/Header";

export default function Detail() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <HeaderContainer />
      <DetailContainer />
      <FooterContainer />
    </>
  );
}
