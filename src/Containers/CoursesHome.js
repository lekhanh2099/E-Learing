import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container } from "@material-ui/core";
import CoursesHome from "../Components/CoursesHome";
import CardCoursesContainer from "./CardCourses";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_CATEGORY_ACTION } from "../Redux/constants/Courses/ConstantsCourses";
import NotiCourseContainer from "./NotiCourse";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "relative",
    "& .MuiTabs-root": {
      height: "60px",
      marginBottom: "40px",
    },
    "& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-5": {
      width: "100%",
      margin: "0",
    },

    "& span.MuiTab-wrapper": {
      color: "#EBA83A",
      fontSize: "2.2rem",
      textTransform: "capitalize",
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#ff9800",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
    },
    "& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall": {
      fontSize: "2.2rem",
      color: "#ff9800",
    },
    "& span.MuiTouchRipple-root": {
      color: "#ff9800",
    },
    "& button#scrollable-auto-tab-1": {
      margin: "0 40px",
      borderRadius: "30px",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <CardCoursesContainer props={props} />}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function CoursesHomeContainer(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // Hàm lấy list courses từ reducer
  const { listCourses } = useSelector((state) => state.coursesReducer);

  const renderCategory = () => {
    return listCourses.map((courses, index) => {
      return (
        <Tab
          onClick={() => {
            dispatch({
              type: SAVE_CATEGORY_ACTION,
              category: courses,
            });
          }}
          key={index}
          label={courses.tenDanhMuc}
          {...a11yProps({ index })}
        />
      );
    });
  };
  const renderCategoryId = () => {
    return listCourses.map((courses, index) => {
      return (
        <TabPanel
          className={classes.root}
          value={value}
          index={index}
          dir={theme.direction}
          key={index}
          props={props}
        >
          {courses.maDanhMuc}
        </TabPanel>
      );
    });
  };

  const { dataNotification } = useSelector((state) => state.coursesReducer);
  return (
    <CoursesHome.Overlay>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Container fixed>
        <CoursesHome.Title>Danh sách các khoá học</CoursesHome.Title>
        <CoursesHome.Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          doloremque incidunt quas provident, molestias inventore, adipisci,
          mollitia architecto tempore facilis quibusdam iste vel deserunt harum
          explicabo? Aut veritatis natus expedita.
        </CoursesHome.Desc>
        <div className={classes.root}>
          <div className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {renderCategory()}
            </Tabs>
          </div>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {renderCategoryId()}
          </SwipeableViews>
        </div>
      </Container>
    </CoursesHome.Overlay>
  );
}
