import React from "react";
import { MenuMobile } from "../Components";
import Avatar from "@material-ui/core/Avatar";
import Zoom from "@material-ui/core/Zoom";
import { useDispatch, useSelector } from "react-redux";
import * as ROUTES from "../Constants/routes";
import SkeletonAnimation from "../Components/Skeleton/Skeleton";
import { LOG_OUT_ACTION } from "../Redux/constants/Login/ConstantsLogin";

export default function MenuMobileConatiner() {
  const dispatch = useDispatch();

  const { tenDangNhap } = useSelector((state) => state.LoginReducer);

  const { listCourses } = useSelector((state) => state.coursesReducer);

  const renderListCourses = () => {
    if (listCourses.length < 1) {
      return <SkeletonAnimation />;
    } else {
      return listCourses.map((courses, index) => (
        <MenuMobile.Item key={index}>
          <MenuMobile.Link to={`/courses/${courses.maDanhMuc}`}>
            {courses.tenDanhMuc}
          </MenuMobile.Link>
        </MenuMobile.Item>
      ));
    }
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => {
      prev = !prev;
      return null;
    });
  };

  return (
    <>
      {checked ? (
        <MenuMobile.Overlay
          display="block"
          onClick={() => {
            handleChange();
          }}
        >
          <MenuMobile.Content>
            <MenuMobile.Wrap>
              {tenDangNhap ? (
                <MenuMobile.Group
                  display="flex"
                  justify="space-around"
                  align="center"
                >
                  <MenuMobile.Avatar to={ROUTES.PROFILE}>
                    <Avatar
                      src="https://icdn.dantri.com.vn/thumb_w/640/2020/06/24/nhung-guong-mat-hot-girl-xinh-dep-noi-bat-trong-thang-6-docx-1593013907514.jpeg"
                      alt="User name here"
                    />
                  </MenuMobile.Avatar>

                  <MenuMobile.Group display="inline-block">
                    <MenuMobile.DescName>
                      Chào mừng bạn trở lại
                    </MenuMobile.DescName>
                    <MenuMobile.UserName>
                      {tenDangNhap}
                      <MenuMobile.LogOut
                        onClick={() => {
                          dispatch({
                            type: LOG_OUT_ACTION,
                            tenDangNhap: tenDangNhap,
                          });
                        }}
                      >
                        Đăng xuất
                      </MenuMobile.LogOut>
                    </MenuMobile.UserName>
                  </MenuMobile.Group>
                </MenuMobile.Group>
              ) : (
                <MenuMobile.Group>
                  <MenuMobile.Link to={ROUTES.SIGN_IN}>
                    Đăng nhập
                  </MenuMobile.Link>
                  <MenuMobile.Link to={ROUTES.SIGN_UP}>Đăng Ký</MenuMobile.Link>
                </MenuMobile.Group>
              )}
              <Zoom in={checked} timeout={500}>
                <MenuMobile.Close
                  onClick={() => {
                    handleChange();
                  }}
                >
                  <span className="material-icons">close</span>
                </MenuMobile.Close>
              </Zoom>
            </MenuMobile.Wrap>

            {tenDangNhap ? (
              <MenuMobile.Wrap>
                <MenuMobile.Title>Tiếp tục học</MenuMobile.Title>
                <MenuMobile.Link to="/">
                  Các khoá học bạn đang học
                </MenuMobile.Link>
              </MenuMobile.Wrap>
            ) : (
              <MenuMobile.Wrap>
                <MenuMobile.Title>
                  Đăng kí hoặc đăng nhập để nhận các thông tin khoá học mới nhất
                </MenuMobile.Title>
              </MenuMobile.Wrap>
            )}

            <MenuMobile.Wrap>
              <MenuMobile.Title>Khoá học</MenuMobile.Title>
              <MenuMobile.List>{renderListCourses()}</MenuMobile.List>
            </MenuMobile.Wrap>
          </MenuMobile.Content>
        </MenuMobile.Overlay>
      ) : null}
    </>
  );
}
