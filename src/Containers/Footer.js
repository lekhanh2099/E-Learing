import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Footer } from "../Components";
import InstagramIcon from "@material-ui/icons/Instagram";
import chPlay from "../Assets/Images/apps/chplay.png";
import appGallery from "../Assets/Images/apps/appgallery.png";
import appStore from "../Assets/Images/apps/appstore.png";

export default function FooterContainer() {
  return (
    <Footer.Overlay>
      <Container fixed component="div">
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Footer.Title>Về chúng tôi</Footer.Title>
            <Footer.SubTitleLink to="/">Chính sách bảo mật</Footer.SubTitleLink>
            <Footer.SubTitleLink to="/">Điều khoản sử dụng</Footer.SubTitleLink>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Footer.Title>Liên hệ với chúng tôi</Footer.Title>
            <Footer.SubTitleLink to="/">
              Trụ sở: 112 Cao Thắng, Quận 3
            </Footer.SubTitleLink>
            <Footer.SubTitleLink to="/">
              Hotline: 096.105.1014 – 077.886.1911
            </Footer.SubTitleLink>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Footer.Title>Theo dỗi chúng tôi</Footer.Title>
            <Footer.SubTitleLink to="https://www.facebook.com/">
              <span className="material-icons">facebook</span>
              <Footer.SubTitle>Facebook</Footer.SubTitle>
            </Footer.SubTitleLink>
            <Footer.SubTitleLink to="https://www.instagram.com/">
              <InstagramIcon />
              <Footer.SubTitle>Instagram</Footer.SubTitle>
            </Footer.SubTitleLink>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Footer.Title> Tải ứng dụng Udemy ngay thôi</Footer.Title>
            <Footer.SubTitleLink to="/">
              <Footer.Image src={chPlay} />
            </Footer.SubTitleLink>
            <Footer.SubTitleLink to="/">
              <Footer.Image src={appStore} />
            </Footer.SubTitleLink>
            <Footer.SubTitleLink to="/">
              <Footer.Image src={appGallery} />
            </Footer.SubTitleLink>
          </Grid>
        </Grid>
      </Container>
    </Footer.Overlay>
  );
}
