import React from "react";
import {
  Overlay,
  Header,
  ImgCover,
  Avatar,
  UserName,
  Title,
  Nav,
  Link,
} from "./styles/ProfileStyles";

export default function Profile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
}

Profile.Overlay = function ProfileOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Profile.ImgCover = function ProfileImgCover({ bg, children, ...restProps }) {
  return (
    <ImgCover bg={bg} {...restProps}>
      {children}
    </ImgCover>
  );
};

Profile.Avatar = function ProfileAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Profile.UserName = function ProfileUserName({ children, ...restProps }) {
  return <UserName {...restProps}>{children}</UserName>;
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.Nav = function ProfileNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Profile.Link = function ProfileLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
