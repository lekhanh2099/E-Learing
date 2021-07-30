import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { Card } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { getCourseOfCategoryAction } from "../Redux/actions/coursesOfCategoryAction";
import {
  REGISTER_COURSE_ACTION,
  SET_DETAIL,
} from "../Redux/constants/Courses/ConstantsCourses";

export default function CardContainer() {
  const dispatch = useDispatch();
  const { coursesOfCategory, category } = useSelector(
    (state) => state.categoryReducer
  );

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategory = () => {
    const action = getCourseOfCategoryAction(category);
    dispatch(action);
  };

  const handleAddCourse = (course) => {
    dispatch({
      type: REGISTER_COURSE_ACTION,
      course: course,
    });
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
          <Card>
            <Card.Image>
              <img src={courses.hinhAnh} alt="courses" />
            </Card.Image>
            <Card.Content>
              <img src="/images/logo.svg" alt="logo" />
              <Card.Meta>{courses.tenKhoaHoc}</Card.Meta>
              <Card.GroupMeta>
                <Card.Description>
                  Que vous travailliez dans le machine learning ou dans la
                  finance.....
                </Card.Description>
                <Card.Rating>
                  <span>4</span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>(372)</span>
                </Card.Rating>
                <Card.Button onClick={() => handleAddCourse(courses)}>
                  Đăng ký
                </Card.Button>
                <Card.ButtonMore
                  onClick={() => handleGetDetailCourse(courses)}
                  to={`/detail/${courses.maKhoaHoc}`}
                >
                  Xem chi tiết <span className="material-icons">info</span>
                </Card.ButtonMore>
              </Card.GroupMeta>
            </Card.Content>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Container fixed>
      <Grid container spacing={4} style={{ width: "100%", margin: "0" }}>
        {renderCard()}
      </Grid>
    </Container>
  );
}
