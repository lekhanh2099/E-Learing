import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { CartProfile, PaginationPage } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import {
  REGISTER_COURSE_ACTION,
  GET_PAGE_ACTION,
  SET_DETAIL,
} from "../Redux/constants/Courses/ConstantsCourses";
import { Grid } from "@material-ui/core";
import * as ROUTES from "../Constants/routes";
import * as CONSTANTS from "../Constants/setting";

export default function PaginationContainer() {
  const { page } = useSelector((state) => state.coursesReducer);

  const [_page, setPage] = React.useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_PAGE_ACTION,
      pageNumber: currentPage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({
      type: GET_PAGE_ACTION,
      pageNumber: currentPage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (e, value) => {
    setCurrentPage(e.target.innerText);
    setPage(value);
  };

  const handleGetDetailCourse = (detailCourses) => {
    dispatch({
      type: SET_DETAIL,
      detailCourse: detailCourses,
    });
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
        type: CONSTANTS.SHOW_WARNING,
      });
    } else {
      dispatch({
        type: CONSTANTS.SHOW_WARNING,
      });
    }
  };

  const renderListCourses = () => {
    const list = page.items;
    if (!list) return;
    if (list.length > 1) {
      return list.map((item, index) => (
        <CartProfile.Item key={index}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <CartProfile.Link
              onClick={() => handleGetDetailCourse(item)}
              to={`${ROUTES.DETAIL}${item.maKhoaHoc}`}
            >
              <CartProfile.Img src={item.hinhAnh} alt="Tên khoá học" />
            </CartProfile.Link>
          </Grid>
          <Grid item lg={8} md={8} sm={7} xs={7}>
            <CartProfile.Content>
              <CartProfile.Name>{item.tenKhoaHoc}</CartProfile.Name>
              <CartProfile.Author>
                Giảng viên: <span>{}</span>
              </CartProfile.Author>
              <CartProfile.Date>
                Ngày tạo: <span>{item.ngayTao}</span>
              </CartProfile.Date>
              <CartProfile.Date>
                Ngày đăng kí: <span>12/12/2121</span>
              </CartProfile.Date>
            </CartProfile.Content>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={2}>
            <CartProfile.Wrapper display="flex">
              <CartProfile.Action onClick={() => handleAddCourse(item)}>
                Đăng ký
              </CartProfile.Action>
              <CartProfile.Link
                onClick={() => handleGetDetailCourse(item)}
                to={`${ROUTES.DETAIL}${item.maKhoaHoc}`}
              >
                <CartProfile.Action>Chi tiết khoá học</CartProfile.Action>
              </CartProfile.Link>
            </CartProfile.Wrapper>
          </Grid>
        </CartProfile.Item>
      ));
    }
  };

  return (
    <PaginationPage.Overlay>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderListCourses()}
        </Grid>
      </Grid>
      <Pagination count={4} page={_page} onChange={handlePageChange} />
    </PaginationPage.Overlay>
  );
}
