import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import SignIn from "./Pages/Sign-in";
import SignUp from "./Pages/sign-up";
import * as ROUTES from "./Constants/routes";
import Courses from "./Pages/Courses";
import LoginTemplate from "./Templates/LoginTemplate";
import DashboardTemplate from "./Templates/DashboardTemplate";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import { IsUserRedirect, ProtectedRoute } from "./Helpers/router";
import Browse from "./Pages/Browse";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import Admin from "./Pages/Admin";
import UserManager from "./Pages/UserManager";
import CoursesManager from "./Pages/CoursesManager";
import CreateCourses from "./Pages/CreateCourses";
import CreateUser from "./Pages/CreateUser";
import DetailCourseManager from "./Pages/DetailCourseManager";
import EditCourses from "./Pages/EditCourses";

export const history = createBrowserHistory({ forceRefresh: true });

function App() {
  const { tenDangNhap } = useSelector((state) => state.LoginReducer);

  const { theme } = useSelector((state) => state.themeManager);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <Switch>
          <LoginTemplate path={ROUTES.ABOUT} exact component={About} />
          <LoginTemplate path={ROUTES.SEARCH} exact component={Search} />
          <IsUserRedirect
            path={`${ROUTES.DETAIL}:id`}
            exact
            component={Detail}
          />
          <IsUserRedirect
            user={tenDangNhap}
            path={ROUTES.SIGN_IN}
            exact
            component={SignIn}
          />

          <IsUserRedirect
            user={tenDangNhap}
            path={ROUTES.SIGN_UP}
            exact
            component={SignUp}
          />
          <IsUserRedirect
            path={`${ROUTES.COURSES}:id`}
            exact
            component={Courses}
          />

          <IsUserRedirect
            user={tenDangNhap}
            loggedInPath={ROUTES.BROWSER}
            path={ROUTES.HOME}
            exact
            component={Home}
          />
          <ProtectedRoute exact path={ROUTES.BROWSER} user={tenDangNhap}>
            <LoginTemplate exact component={Browse} />
          </ProtectedRoute>
          <ProtectedRoute exact path={ROUTES.CART} user={tenDangNhap}>
            <IsUserRedirect path={ROUTES.CART} exact component={Profile} />
          </ProtectedRoute>
          <ProtectedRoute exact path={ROUTES.PROFILE} user={tenDangNhap}>
            <IsUserRedirect path={ROUTES.PROFILE} exact component={Profile} />
          </ProtectedRoute>

          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={ROUTES.ADMIN}
            exact
          >
            <DashboardTemplate
              path={ROUTES.ADMIN}
              exact
              component={Admin}
            ></DashboardTemplate>
          </ProtectedRoute>
          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}`}
            exact
          >
            <DashboardTemplate
              path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}`}
              exact
              component={CoursesManager}
            ></DashboardTemplate>
          </ProtectedRoute>
          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.CREATECOURSES}`}
            exact
          >
            <DashboardTemplate
              path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.CREATECOURSES}`}
              exact
              component={CreateCourses}
            ></DashboardTemplate>
          </ProtectedRoute>
          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.EDITCOURSES}`}
            exact
          >
            <DashboardTemplate
              path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.EDITCOURSES}`}
              exact
              component={EditCourses}
            ></DashboardTemplate>
          </ProtectedRoute>
          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.DETAIL_COURSE_MANAGER}`}
            exact
          >
            <DashboardTemplate
              path={`${ROUTES.ADMIN}/${ROUTES.COURSESMANAGER}/${ROUTES.DETAIL_COURSE_MANAGER}`}
              exact
              component={DetailCourseManager}
            ></DashboardTemplate>
          </ProtectedRoute>

          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={`${ROUTES.ADMIN}/${ROUTES.USERMANAGER}`}
            exact
          >
            <DashboardTemplate
              path={`${ROUTES.ADMIN}/${ROUTES.USERMANAGER}`}
              exact
              component={UserManager}
            ></DashboardTemplate>
          </ProtectedRoute>
          <ProtectedRoute
            user={tenDangNhap}
            loggedInPath={ROUTES.SIGN_IN}
            path={`${ROUTES.ADMIN}/${ROUTES.USERMANAGER}/${ROUTES.CREATEUSER}`}
            exact
          >
            <DashboardTemplate
              path={`${ROUTES.ADMIN}/${ROUTES.USERMANAGER}/${ROUTES.CREATEUSER}`}
              exact
              component={CreateUser}
            ></DashboardTemplate>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
