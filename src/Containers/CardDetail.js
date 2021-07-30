import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardDetail } from "../Components";
import { REGISTER_COURSE_ACTION } from "../Redux/constants/Courses/ConstantsCourses";
import * as CONSTANTS from "../Constants/setting";
import * as ROUTES from "../Constants/routes";
import NotiCourseContainer from "./NotiCourse";

export default function CardDetailContainer() {
  const dispatch = useDispatch();

  const { detailCourse, listCart } = useSelector(
    (state) => state.coursesReducer
  );

  const { tenDangNhap } = useSelector((state) => state.LoginReducer);

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

  const [itemTranslate, setItemTranslate] = useState();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [itemTranslate]);

  const handleScroll = (event) => {
    let scrollY = window.scrollY;
    if (scrollY > 1000) {
      setItemTranslate("bottom");
    } else {
      setItemTranslate("");
    }
  };
  const { dataNotification } = useSelector((state) => state.coursesReducer);
  return (
    <CardDetail.Overlay className={itemTranslate}>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <CardDetail.Image src={detailCourse.hinhAnh} alt="Chi tiết kháo học" />
      <CardDetail.Content>
        <CardDetail.Price>
          124.000 VNĐ <span>150.000 VNĐ</span>
        </CardDetail.Price>
        <CardDetail.TextSub>
          <span className="material-icons">history</span>
          Thời gian ưu đãi còn 1 ngày
        </CardDetail.TextSub>
        {tenDangNhap ? (
          <CardDetail.Button onClick={() => handleAddCourse(detailCourse)}>
            Đăng kí ngay
          </CardDetail.Button>
        ) : (
          <CardDetail.Link to={ROUTES.SIGN_UP}>
            Đăng kí tài khoản để ghi danh
          </CardDetail.Link>
        )}
        <CardDetail.TextSub>
          <span className="material-icons">task_alt</span>
          Đảm bảo hoàn tiền trong 30 ngày
        </CardDetail.TextSub>
        <CardDetail.Text>
          <span className="material-icons">tv</span>
          Thời lượng: 03 Giờ: 48 Phút
        </CardDetail.Text>
        <CardDetail.Text>
          <span className="material-icons">description</span>
          Giáo trình: 48 Bài giảng
        </CardDetail.Text>
        <CardDetail.Text>
          <span className="material-icons">all_inclusive</span>
          Sở hữu kháo học trọn đời
        </CardDetail.Text>
        <CardDetail.Text>
          <span className="material-icons">content_paste</span>
          Chứng chỉ khi hoàn tất
        </CardDetail.Text>
      </CardDetail.Content>
    </CardDetail.Overlay>
  );
}
