import React, { Fragment } from "react";
import SideBarAdminContainer from "../Containers/SideBarAdmin";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import { Route } from "react-router";
import HeaderContainer from "../Containers/Header";

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: "2",
  },
  appBar: {
    zIndex: "1111",
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: "90px",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    height: "auto",
  },
}));

const DashboardTemplate = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <div className={classes.root}>
                <HeaderContainer />
                <Drawer
                  className={classes.drawer}
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <SideBarAdminContainer />
                </Drawer>
                <main className={classes.content}>
                  <props.component {...propsRoute} />
                </main>
              </div>
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
};

export default DashboardTemplate;
