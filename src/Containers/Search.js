import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Navigation, Search, AllCourses, CartProfile } from "../Components";
import * as ROUTES from "../Constants/routes";
import { useDispatch, useSelector } from "react-redux";
import PaginationContainer from "./Pagination";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import {
  REGISTER_COURSE_ACTION,
  SET_DETAIL,
} from "../Redux/constants/Courses/ConstantsCourses";

export default function SearchConatiner() {
  const { searchTerm, listFound, page } = useSelector(
    (state) => state.coursesReducer
  );

  const dispatch = useDispatch();

  const renderTitleSearch = () => {
    if (searchTerm) {
      return <Search.Title>Kết quả tìm kiếm cho: {searchTerm}</Search.Title>;
    } else
      return <Search.Title>Tìm kiếm khoá học bạn muốn đăng kí</Search.Title>;
  };

  const handleGetDetailCourse = (detailCourses) => {
    dispatch({
      type: SET_DETAIL,
      detailCourse: detailCourses,
    });
  };

  return (
    <>
      <Search.Overlay>
        <Container fixed>
          <Navigation.Overlay>
            <Navigation.Header>
              <Navigation.Home to={ROUTES.HOME}>Trang chủ</Navigation.Home>
              <Navigation.NextPage to={ROUTES.SEARCH}>
                Tìm kiếm
              </Navigation.NextPage>
            </Navigation.Header>
          </Navigation.Overlay>
          {renderTitleSearch()}

          <Search.Results>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                {listFound.map((item, index) => (
                  <CartProfile.Item key={index}>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                      <CartProfile.Link
                        onClick={() => handleGetDetailCourse(item)}
                        to={`${ROUTES.DETAIL}${item.maKhoaHoc}`}
                      >
                        <CartProfile.Img
                          src={item.hinhAnh}
                          alt="Tên khoá học"
                        />
                      </CartProfile.Link>
                    </Grid>
                    <Grid item lg={8} md={8} sm={7} xs={7}>
                      <CartProfile.Content>
                        <CartProfile.Name>{item.tenKhoaHoc}</CartProfile.Name>
                        <CartProfile.Author>
                          Giảng viên: <span>{item.nguoiTao.taiKhoan}</span>
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
                        <CartProfile.Action
                          onClick={() => {
                            dispatch({
                              type: REGISTER_COURSE_ACTION,
                              course: item,
                            });
                          }}
                        >
                          Đăng ký
                        </CartProfile.Action>
                        <CartProfile.Link
                          onClick={() => handleGetDetailCourse(item)}
                          to={`${ROUTES.DETAIL}${item.maKhoaHoc}`}
                        >
                          <CartProfile.Action>
                            Chi tiết khoá học
                          </CartProfile.Action>
                        </CartProfile.Link>
                      </CartProfile.Wrapper>
                    </Grid>
                  </CartProfile.Item>
                ))}
              </Grid>
            </Grid>
          </Search.Results>
          <Search.Warning>
            <span className="material-icons">info</span>
            Không chắc? Tất cả các khóa học đều có đảm bảo hoàn tiền trong 30
            ngày
          </Search.Warning>
          <Search.Title>Tất cả các khoá học</Search.Title>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {page.pageData?.items.map((item, index) => {
                return (
                  <AllCourses.GroupCourses key={index}>
                    <AllCourses.Image
                      to={`/detail/${item.maKhoaHoc}`}
                      onClick={() => handleGetDetailCourse(item)}
                    >
                      <img src={item.hinhAnh} alt="Courses1" />
                    </AllCourses.Image>
                    <AllCourses.Content>
                      <AllCourses.GroupName>
                        <AllCourses.Name>{item.tenKhoaHoc}</AllCourses.Name>
                        <AllCourses.Price>95.59$</AllCourses.Price>
                      </AllCourses.GroupName>
                      <AllCourses.Description>
                        {item.moTa}
                      </AllCourses.Description>
                      <AllCourses.Text>
                        Giảng viên: {item.nguoiTao.hoTen}
                      </AllCourses.Text>
                      <AllCourses.Rating>
                        4,8 <StarHalfIcon /> <StarIcon /> <StarIcon />
                        <StarIcon /> <StarIcon />
                      </AllCourses.Rating>
                      <AllCourses.Text>
                        Ngày tạo: {item.ngayTao}
                      </AllCourses.Text>
                      <AllCourses.Certificate>
                        Best Seller
                      </AllCourses.Certificate>
                    </AllCourses.Content>
                  </AllCourses.GroupCourses>
                );
              })}
            </Grid>
          </Grid>
          <PaginationContainer />
        </Container>
      </Search.Overlay>
    </>
  );
}
