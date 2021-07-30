import React, { memo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components";
import * as ROUTES from "../Constants/routes";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import SkeletonAnimation from "../Components/Skeleton/Skeleton";
import {
  GET_ALL_LIST_ACTION,
  GET_LIST_COURSES_ACTION,
} from "../Redux/constants/Courses/ConstantsCourses";
import { Avatar, Container, Grid, Hidden, Tooltip } from "@material-ui/core";
import { LOG_OUT_ACTION } from "../Redux/constants/Login/ConstantsLogin";
import MenuMobileConatiner from "./MenuMobile";
import CartContainer from "./Cart";
import { AVATAR_FAKER } from "../fakeDataUser";
import { SHOW_NOTIF_TYPE, USER_LOGIN } from "../Constants/setting";
import NotiCourseContainer from "./NotiCourse";
import SearchHomeContainer from "./SearchHome";

function HeaderContainer() {
  const dispatch = useDispatch();
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const { listCourses, dataNotification } = useSelector(
    (state) => state.coursesReducer
  );
  // Get values courses from redux store

  const { isSkeleton } = useSelector((state) => state.skeletonReducer);

  const { tenDangNhap } = useSelector((state) => state.LoginReducer);
  const getListCourses = () => {
    dispatch({
      type: GET_LIST_COURSES_ACTION,
    });
  };

  const renderManager = () => {
    if (!userLogin) return;
    if (userLogin.maLoaiNguoiDung === "GV") {
      return <Header.AboutUs to={ROUTES.ADMIN}>Quản lý trang</Header.AboutUs>;
    }
    return null;
  };
  useEffect(() => {
    getListCourses();
    dispatch({
      type: GET_ALL_LIST_ACTION,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderListCourses = () => {
    return listCourses.map((courses, index) => (
      <Header.CoursesItem
        to={`${ROUTES.COURSES}${courses.maDanhMuc}`}
        key={index}
      >
        {courses.tenDanhMuc}
      </Header.CoursesItem>
    ));
  };

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const renderMenuMobile = () => {
    if (checked) {
      return <MenuMobileConatiner />;
    }
    return null;
  };

  return (
    <Header.Overlay>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Hidden only={["sm", "xs"]}>
        <Header.HeaderNav>
          <Header.Logo to={ROUTES.HOME} />
          <Header.Courses>
            Khoá học
            <Header.CoursesList>
              {isSkeleton ? <SkeletonAnimation /> : renderListCourses()}
            </Header.CoursesList>
          </Header.Courses>
          <Header.Search>
            <SearchHomeContainer />
          </Header.Search>
          <Header.AboutUs to={ROUTES.ABOUT}>Về chúng tôi</Header.AboutUs>
          {renderManager()}
          <Header.Group display="flex" justify="center" align="center">
            <Header.Cart to={ROUTES.CART}>
              <CartContainer />
            </Header.Cart>
            <Header.DarkMode>
              <Header.DarkModeIcon />
            </Header.DarkMode>
          </Header.Group>

          {tenDangNhap ? (
            <Header.Group display="flex" justify="center" align="center">
              <Header.UserLogined to={ROUTES.PROFILE}>
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
                      Trang cá nhân
                    </h1>
                  }
                  arrow
                >
                  <Avatar src={AVATAR_FAKER} />
                </Tooltip>
              </Header.UserLogined>
              <Header.NameUser>
                {tenDangNhap}

                <Header.LogOut
                  onClick={() => {
                    dispatch({
                      type: LOG_OUT_ACTION,
                      tenDangNhap: tenDangNhap,
                    });
                    dispatch({
                      type: SHOW_NOTIF_TYPE,
                      data: {
                        status: true,
                        noti: "Đăng xuất thành công!",
                        theme: "success",
                      },
                    });
                  }}
                >
                  Đăng xuất
                </Header.LogOut>
              </Header.NameUser>
            </Header.Group>
          ) : (
            <Header.Group display="block">
              <Header.SignIn to={ROUTES.SIGN_IN}>Đăng nhập</Header.SignIn>
              <Header.SignUp to={ROUTES.SIGN_UP}>Đăng ký</Header.SignUp>
            </Header.Group>
          )}
        </Header.HeaderNav>
      </Hidden>
      <Hidden only={["xl", "lg", "md"]}>
        <Header.HeaderNav>
          <Container fixed>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={4}>
                <Header.Group>
                  <Header.SearchMobile
                    onClick={() => {
                      handleChange();
                    }}
                  >
                    <MenuIcon />
                  </Header.SearchMobile>
                  {renderMenuMobile()}
                </Header.Group>
              </Grid>
              <Grid item sm={4} xs={4}>
                <Header.Logo to={ROUTES.HOME} />
              </Grid>
              <Grid item sm={4} xs={4}>
                <Header.Group display="flex" justify="center" align="center">
                  <Header.Cart to="/cart">
                    <CartContainer />
                  </Header.Cart>
                  <Header.SearchMobile>
                    <SearchIcon />
                    <Header.SearchInputMobile>
                      <SearchHomeContainer />
                    </Header.SearchInputMobile>
                  </Header.SearchMobile>
                </Header.Group>
              </Grid>
            </Grid>
          </Container>
        </Header.HeaderNav>
      </Hidden>
    </Header.Overlay>
  );
}

export default memo(HeaderContainer);
