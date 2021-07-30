import React, { useEffect, useState } from "react";
import * as ROUTES from "../Constants/routes";
import { Navigation, Profile } from "../Components";
import { Container } from "@material-ui/core";
import coverImg from "../Assets/Images/profile-user/cover.jpg";
import { Avatar } from "@material-ui/core";
import CartProfileContainer from "./CartProfile";
import InforContainer from "./Infor";

export default function ProfileContainer({ props }) {
  const urlPage = props.match.url;
  const [className, setclassName] = useState(null);
  const [classNameCart, setclassNameCart] = useState(null);
  useEffect(() => {
    if (urlPage === ROUTES.PROFILE) {
      setclassNameCart("");
      setclassName("activedProfile");
    } else if (urlPage === ROUTES.CART) {
      setclassName("");
      setclassNameCart("activedCart");
    }
  }, [urlPage]);

  const renderContent = () => {
    if (urlPage === ROUTES.PROFILE) {
      return <InforContainer />;
    } else if (urlPage === ROUTES.CART) {
      return <CartProfileContainer props={props} />;
    }
    return null;
  };

  return (
    <>
      <Profile.Overlay>
        <Container fixed>
          <Navigation.Overlay>
            <Navigation.Header>
              <Navigation.Home to={ROUTES.HOME}>Trang chủ</Navigation.Home>
              <Navigation.NextPage to={ROUTES.SEARCH}>
                Thông tin tài khoản
              </Navigation.NextPage>
            </Navigation.Header>
          </Navigation.Overlay>
          <Profile.Header>
            <Profile.ImgCover
              bg={coverImg}
              alt="Cover picture"
            ></Profile.ImgCover>
          </Profile.Header>
          <Profile.Avatar>
            <Avatar src="https://images.unsplash.com/photo-1624841592352-d1fb436f90bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
            <Profile.UserName>SomeBody</Profile.UserName>
          </Profile.Avatar>
          <Profile.Nav>
            <Profile.Link className={className} to={ROUTES.PROFILE}>
              Thông tin tài khoản
            </Profile.Link>
            <Profile.Link className={classNameCart} to={ROUTES.CART}>
              Danh sách khoá học đăng kí
            </Profile.Link>
          </Profile.Nav>{" "}
          <>{renderContent()}</>
        </Container>
      </Profile.Overlay>
    </>
  );
}
