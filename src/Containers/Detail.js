import React, { memo, useEffect } from "react";
import { CardDetail, Detail, Navigation } from "../Components";
import { Container, Grid } from "@material-ui/core";
import * as ROUTES from "../Constants/routes";
import { useDispatch, useSelector } from "react-redux";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ShareIcon from "@material-ui/icons/Share";
import {
  REGISTER_COURSE_ACTION,
  GET_DETAIL_ACTION,
} from "../Redux/constants/Courses/ConstantsCourses";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import faker from "faker";
import CardDetailContainer from "./CardDetail";
import { Hidden } from "@material-ui/core";
import * as CONSTANTS from "../Constants/setting";
import NotiCourseContainer from "./NotiCourse";

function DetailContainer() {
  const dispatch = useDispatch();
  const { detailCourse, listCart } = useSelector(
    (state) => state.coursesReducer
  );
  const { tenDangNhap } = useSelector((state) => state.LoginReducer);

  useEffect(
    () =>
      dispatch({
        type: GET_DETAIL_ACTION,
        course: detailCourse,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
  const { dataNotification } = useSelector((state) => state.coursesReducer);
  return (
    <>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Detail.Overlay>
        <Container fixed>
          <Navigation.Overlay>
            <Navigation.Header>
              <Navigation.Home to={ROUTES.HOME}>Trang chủ</Navigation.Home>
              <Navigation.NextPage to={ROUTES.DETAIL}>
                Chi tiết khoá học
              </Navigation.NextPage>
            </Navigation.Header>
          </Navigation.Overlay>

          <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Detail.Content>
                <Hidden only={["lg", "xl", "md", "sm"]}>
                  <Detail.Wrapper className="mark">
                    <Detail.Image
                      src={detailCourse.hinhAnh}
                      alt="Chi tiết khoá học"
                    />
                    {/* <Detail.Mark></Detail.Mark> */}
                  </Detail.Wrapper>
                </Hidden>
                <Detail.Name>{detailCourse.tenKhoaHoc}</Detail.Name>
                <Detail.Desc>{detailCourse.moTa}</Detail.Desc>
                <Detail.Wrapper display="flex" align="center">
                  <Detail.Rating>
                    4<span className="material-icons">star_rate</span>
                    <span className="material-icons">star_rate</span>
                    <span className="material-icons">star_rate</span>
                    <span className="material-icons">star_rate</span>
                  </Detail.Rating>
                  <Detail.Rating>
                    Số lượng học viên: {detailCourse.soLuongHocVien}
                  </Detail.Rating>
                </Detail.Wrapper>
                <Detail.Text>
                  Giảng viên:
                  <Detail.Author to="/">
                    {detailCourse.nguoiTao.hoTen}
                  </Detail.Author>
                </Detail.Text>
                <Detail.Wrapper display="flex" align="center">
                  <Detail.Text>
                    <span className="material-icons">new_releases</span> Cập
                    nhật lần cuối: {detailCourse.ngayTao}
                  </Detail.Text>
                  <Detail.Text>
                    Nhóm khoá học: &nbsp;
                    {detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  </Detail.Text>
                </Detail.Wrapper>
                <Hidden only={["lg", "xl"]}>
                  {tenDangNhap ? (
                    <CardDetail.Button
                      onClick={() => handleAddCourse(detailCourse)}
                    >
                      Đăng kí ngay
                    </CardDetail.Button>
                  ) : (
                    <CardDetail.Link to={ROUTES.SIGN_UP}>
                      Đăng nhập để đăng kí khoá học
                    </CardDetail.Link>
                  )}
                </Hidden>
                <Detail.Wrapper display="flex" align="center">
                  <Detail.Button>
                    Chia sẽ khoá học
                    <ShareIcon />
                  </Detail.Button>
                  <Detail.Button>
                    Tặng khoá học cho bạn bè
                    <CardGiftcardIcon />
                  </Detail.Button>
                </Detail.Wrapper>
              </Detail.Content>
            </Grid>
            <Hidden only={["xs", "sm", "md"]}>
              <Grid item lg={4}>
                <CardDetailContainer />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
        <Detail.Section>
          <Container fixed>
            <Grid container spacing={2}>
              <Grid item lg={8} md={12}>
                <Detail.Box>
                  <Detail.Title>Bạn sẽ học được gì từ khoá học</Detail.Title>
                  <Detail.SubTitle>
                    <ArrowForwardIosIcon />
                    Khóa học hướng dẫn bạn một cách chi tiết cách thiết kế
                    Website trong tích tắc.
                  </Detail.SubTitle>
                  <Detail.SubTitle>
                    <ArrowForwardIosIcon />
                    Tối ưu hóa Website để đưa từ khóa lên Top 1 Google với chi
                    phí thấp có thể.
                  </Detail.SubTitle>
                  <Detail.SubTitle>
                    <ArrowForwardIosIcon />
                    Kết thúc khóa học bạn sẽ có nhiều mẹo thu hút khách hàng
                    truy cập vào website của mình.
                  </Detail.SubTitle>
                  <Detail.SubTitle>
                    <ArrowForwardIosIcon />
                    Tùy chỉnh giao diện Website theo ý muốn, thêm bớt tính năng
                    chỉ với một cú bấm chuột.
                  </Detail.SubTitle>
                  <Detail.SubTitle>
                    <ArrowForwardIosIcon />
                    Biết cách xây dựng nội dung bán hàng hiệu quả và thông minh.
                  </Detail.SubTitle>
                </Detail.Box>
                <Detail.Box>
                  <Detail.SubTitle>
                    <Detail.Wrapper display="flex" align="center">
                      <span className="material-icons mr-2">favorite</span>
                      Khoá học tốt nhất được học sinh bình chọn
                    </Detail.Wrapper>
                  </Detail.SubTitle>
                </Detail.Box>
                <Detail.Box>
                  <Detail.Title>Tổng quan về khoá học</Detail.Title>
                  <Detail.Text>{faker.lorem.paragraphs()}</Detail.Text>
                  <Detail.List>
                    <Detail.Item>
                      <span className="material-icons">
                        fiber_manual_record
                      </span>
                      Giá thiết kế website quá đắt, từ 2 – 10 triệu cho một
                      website thương mại với tính năng cơ bản.
                    </Detail.Item>
                    <Detail.Item>
                      <span className="material-icons">
                        fiber_manual_record
                      </span>
                      Website bị lỗi không biết nhờ ai sửa chữa, bạn sẽ mất
                      doanh thu bán hàng nếu không khắc phục sớm.
                    </Detail.Item>
                    <Detail.Item>
                      <span className="material-icons">
                        fiber_manual_record
                      </span>
                      Muốn thay đổi một chút giao diện, tính năng website phải
                      nhờ kỹ thuật và cũng phải chờ vài tuần.
                    </Detail.Item>
                    <Detail.Item>
                      <span className="material-icons">
                        fiber_manual_record
                      </span>
                      Chỗ nào giá rẻ thì ít hỗ trợ tính năng bán hàng,
                      Marketing.
                    </Detail.Item>
                  </Detail.List>
                  <Detail.Text>{faker.lorem.paragraphs()}</Detail.Text>
                </Detail.Box>
              </Grid>
            </Grid>
          </Container>
        </Detail.Section>
      </Detail.Overlay>
    </>
  );
}

export default memo(DetailContainer);
