import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { CardHome } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { getCourseOfCategoryAction } from "../Redux/actions/coursesOfCategoryAction";
import {
  REGISTER_COURSE_ACTION,
  SET_DETAIL,
} from "../Redux/constants/Courses/ConstantsCourses";
import * as CONSTANTS from "../Constants/setting";
import * as ROUTES from "../Constants/routes";

export default function CardCoursesContainer() {
  const dispatch = useDispatch();
  const { coursesOfCategory, category } = useSelector(
    (state) => state.categoryReducer
  );
  const { tenDangNhap } = useSelector((state) => state.LoginReducer);

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategory = () => {
    const action = getCourseOfCategoryAction(category);
    dispatch(action);
  };

  const { listCart } = useSelector((state) => state.coursesReducer);

  const handleAddCourse = (course) => {
    let index = listCart.findIndex((item) => item.biDanh === course.biDanh);
    if (index === -1) {
      dispatch({
        type: REGISTER_COURSE_ACTION,
        course: course,
      });
      dispatch({
        type: CONSTANTS.SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Ghi danh thành công!",
          theme: "success",
        },
      });
    } else {
      dispatch({
        type: CONSTANTS.SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Khoá học này đã được ghi danh!",
          theme: "warning",
        },
      });
    }
  };

  const handleGetDetailCourse = (detailCourses) => {
    dispatch({
      type: SET_DETAIL,
      detailCourse: detailCourses,
    });
  };

  const renderCard = () => {
    return coursesOfCategory.map((courses, index) => {
      return (
        <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
          <CardHome.Content>
            <CardHome.Image src={courses.hinhAnh} />
            <CardHome.Name>{courses.tenKhoaHoc}</CardHome.Name>
            <CardHome.Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quae dolores sed deleniti, ipsum dolor veniam ducimus consequuntur
              ab fugiat suscipit dolore unde, reiciendis sapiente asperiores
              nostrum, distinctio temporibus ipsa.
            </CardHome.Desc>
            <CardHome.Text>
              <span>Lượt xem:&nbsp;</span>
              {courses.luotXem} &nbsp;
              <span className="material-icons">visibility</span>
            </CardHome.Text>
            {tenDangNhap ? (
              <CardHome.Button onClick={() => handleAddCourse(courses)}>
                Đăng kí
              </CardHome.Button>
            ) : (
              <CardHome.ButtonLink to={ROUTES.SIGN_UP}>
                Đăng kí
              </CardHome.ButtonLink>
            )}
            <CardHome.ButtonMore
              onClick={() => handleGetDetailCourse(courses)}
              to={`${ROUTES.DETAIL}${courses.maKhoaHoc}`}
            >
              Xem chi tiết
              <span className="material-icons">info</span>
            </CardHome.ButtonMore>
          </CardHome.Content>
        </Grid>
      );
    });
  };

  return (
    <>
      <Container fixed>
        <Grid container spacing={2} style={{ width: "100%", margin: "0" }}>
          {renderCard()}
        </Grid>
      </Container>
    </>
  );
}
