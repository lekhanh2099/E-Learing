import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartProfile } from "../Components";
import { REMOVE_COURSE_ACTION } from "../Redux/constants/Courses/ConstantsCourses";

export default function CartProfileContainer({ props }) {
  const { listCart } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();

  const renderTitle = () => {
    if (listCart.length < 1)
      return (
        <CartProfile.Title>Bạn chưa đăng kí khoá học nào</CartProfile.Title>
      );
    return (
      <CartProfile.Title>
        Bạn đã đăng kí {listCart.length} khoá học
      </CartProfile.Title>
    );
  };

  const renderCartProfile = () => {
    return listCart.map((item, index) => {
      return (
        <CartProfile.Item key={index}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <CartProfile.Img src={item.hinhAnh} alt="Tên khoá học" />
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={7}>
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
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <CartProfile.Wrapper display="flex">
              <CartProfile.Action
                onClick={() => {
                  dispatch({
                    type: REMOVE_COURSE_ACTION,
                    course: item,
                  });
                }}
              >
                Huỷ đăng ký
              </CartProfile.Action>
              <CartProfile.Action>Chia sẽ khoá học</CartProfile.Action>
            </CartProfile.Wrapper>
          </Grid>
        </CartProfile.Item>
      );
    });
  };

  return (
    <>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {renderTitle()}
            {renderCartProfile()}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
