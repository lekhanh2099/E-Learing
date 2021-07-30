import React from "react";
import { Badge, IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import {
  AboutUsLink,
  CoursesItem,
  CoursesItemLink,
  Courses,
  CoursesList,
  LogoLink,
  Overlay,
  Search,
  SearchInput,
  SearchLink,
  CartLink,
  SignInLink,
  SignUpLink,
  HeaderNav,
  DarkMode,
  Group,
  DarkModeIcon,
  UserLogined,
  LogOut,
  NameUser,
  SearchMobile,
  SearchInputMobile,
  Mask,
} from "./styles/HeaderStyle";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME } from "../../Constants/setting";
import Logo from "../../Assets/Images/logo.svg";

const ToogleTheme = createContext();

export default function Header({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

//! Overlay header

Header.HeaderNav = function HeaderHeaderNav({ children, ...restProps }) {
  return <HeaderNav {...restProps}>{children}</HeaderNav>;
};

Header.Overlay = function HeaderOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

//! Logo
Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <LogoLink to={to} {...restProps}>
      <img src={Logo} alt="Udemy" />
    </LogoLink>
  );
};

//! Courses
Header.Courses = function HeaderCourses({ children, ...restProps }) {
  return <Courses {...restProps}>{children}</Courses>;
};

Header.CoursesList = function HeaderCoursesList({ children, ...restProps }) {
  return <CoursesList {...restProps}>{children}</CoursesList>;
};

Header.CoursesItem = function HeaderCoursesiItem({
  to,
  children,
  ...restProps
}) {
  return (
    <CoursesItem>
      <CoursesItemLink to={to} {...restProps}>
        {children}
      </CoursesItemLink>
    </CoursesItem>
  );
};

//! Search pc and mobile

Header.Search = function HeaderSearch({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>;
};

Header.SearchLink = function HeaderSearchLink({ to, children, ...restProps }) {
  return (
    <SearchLink to={to} {...restProps}>
      {children}
    </SearchLink>
  );
};

Header.SearchInput = function HeaderSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} />;
};

Header.Mask = function HeaderMask({ children, ...restProps }) {
  return <Mask {...restProps}>{children}</Mask>;
};

Header.SearchMobile = function HeaderSearchMobile({ children, ...restProps }) {
  return <SearchMobile {...restProps}>{children}</SearchMobile>;
};

Header.SearchInputMobile = function HeaderSearchInputMobile({
  children,
  ...restProps
}) {
  return <SearchInputMobile {...restProps}>{children}</SearchInputMobile>;
};

//! About us
Header.AboutUs = function HeaderAboutUs({ to, children, ...restProps }) {
  return (
    <AboutUsLink to={to} {...restProps}>
      {children}
    </AboutUsLink>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return (
    <Group display="block" justify="center" align="center" {...restProps}>
      {children}
    </Group>
  );
};

//! Cart
Header.Cart = function HeaderCart({ to, children, ...restProps }) {
  const { listCart } = useSelector((state) => state.coursesReducer);

  return (
    <CartLink to={to} {...restProps}>
      <IconButton>
        <Badge badgeContent={listCart.length} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      {children}
    </CartLink>
  );
};

Header.DarkMode = function HeaderDarkMode({ children, ...restProps }) {
  let light = true;
  const [darkTheme, setDarkTheme] = useState(light);

  return (
    <ToogleTheme.Provider value={{ darkTheme, setDarkTheme }}>
      <DarkMode {...restProps}>{children}</DarkMode>
    </ToogleTheme.Provider>
  );
};

const useStyles = makeStyles((theme) => ({}));

Header.DarkModeIcon = function HeaderDarkModeIcon(children, ...restProps) {
  const dispatch = useDispatch();

  const { darkTheme, setDarkTheme } = useContext(ToogleTheme);

  const classes = useStyles();

  return (
    <DarkModeIcon
      className={classes}
      {...restProps}
      onClick={() => {
        setDarkTheme((darkTheme) => !darkTheme);
        dispatch({
          type: CHANGE_THEME,
          theme: darkTheme,
        });
      }}
    >
      <Tooltip
        title={
          <h1
            style={{
              color: "white",
              padding: "4px",
              fontSize: "16px",
              margin: "0",
            }}
          >
            Đổi giao diện
          </h1>
        }
        arrow
      >
        <IconButton>
          {darkTheme ? (
            <span className="material-icons">brightness_high</span>
          ) : (
            <span className="material-icons">nightlight</span>
          )}
        </IconButton>
      </Tooltip>
    </DarkModeIcon>
  );
};

//! Sign In
Header.SignIn = function HeaderSignIn({ to, children, ...restProps }) {
  return (
    <SignInLink to={to} {...restProps}>
      {children}
    </SignInLink>
  );
};

//! Sign Up
Header.SignUp = function HeaderSignUp({ to, children, ...restProps }) {
  return (
    <SignUpLink to={to} {...restProps}>
      {children}
    </SignUpLink>
  );
};

Header.UserLogined = function HeaderUserLogined({
  to,
  children,
  ...restProps
}) {
  return (
    <UserLogined to={to} {...restProps}>
      {children}
    </UserLogined>
  );
};

Header.NameUser = function HeaderNameUser({ children, ...restProps }) {
  return <NameUser {...restProps}>{children}</NameUser>;
};

Header.LogOut = function HeaderLogOut({ children, ...restProps }) {
  return <LogOut {...restProps}>{children}</LogOut>;
};
