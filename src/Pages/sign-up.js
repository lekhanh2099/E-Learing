import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../Redux/actions/signUpAction";
import { Form } from "../Components";
import * as ROUTES from "../Constants/routes";
import HeaderContainer from "../Containers/Header";
import FooterContainer from "../Containers/Footer";
import NotiCourseContainer from "../Containers/NotiCourse";

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP03",
      maLoaiNguoiDung: "HV",
      email: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
      matKhau: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(8, "Mật khẩu tối thiểu 8 kí tự")
        .max(32, "Mật khẩu tối đa 32 kí tự"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      soDT: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9]+$/, "Số điện thoại phải là số")
        .test(
          "len",
          "Số diện thoại gồm 10 số (VD: 0123 123 123)",
          (val) => val?.length === 10
        ),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .matches(
          /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email chưa đúng định dạng (VD: email@gmail.com)"
        ),
    }),
    onSubmit: (values) => {
      const action = signUpAction(values);
      dispatch(action);
    },
  });

  const { dataNotification } = useSelector((state) => state.coursesReducer);
  return (
    <>
      <HeaderContainer />
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Form.Overlay>
        <Form.Container>
          <Form.Title>Đăng ký</Form.Title>
          <Form.Base onSubmit={formik.handleSubmit}>
            <Form.Input>
              <TextField
                name="taiKhoan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Tên tài khoản"
                placeholder="Tên tài khoản"
                variant="filled"
              />
              <span className="material-icons">person</span>
            </Form.Input>
            {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
              <Form.Error>{formik.errors.taiKhoan}</Form.Error>
            ) : (
              <Form.Error></Form.Error>
            )}
            <Form.Input>
              <TextField
                name="matKhau"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Mật khẩu"
                placeholder="Mật khẩu"
                variant="filled"
                type="password"
              />
              <span className="material-icons">lock</span>
            </Form.Input>
            {formik.touched.matKhau && formik.errors.matKhau ? (
              <Form.Error>{formik.errors.matKhau}</Form.Error>
            ) : (
              <Form.Error></Form.Error>
            )}
            <Form.Input>
              <TextField
                name="hoTen"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Họ và tên"
                placeholder="Họ và tên"
                variant="filled"
              />
              <span className="material-icons">person</span>
            </Form.Input>
            {formik.touched.hoTen && formik.errors.hoTen ? (
              <Form.Error>{formik.errors.hoTen}</Form.Error>
            ) : (
              <Form.Error></Form.Error>
            )}
            <Form.Input>
              <TextField
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Email"
                placeholder="Email"
                variant="filled"
              />
              <span className="material-icons">email</span>
            </Form.Input>
            {formik.touched.email && formik.errors.email ? (
              <Form.Error>{formik.errors.email}</Form.Error>
            ) : (
              <Form.Error></Form.Error>
            )}
            <Form.Input>
              <TextField
                name="soDT"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Số điện thoại"
                placeholder="Số điện thoại"
                variant="filled"
              />
              <span className="material-icons">phone</span>
            </Form.Input>
            {formik.touched.soDT && formik.errors.soDT ? (
              <Form.Error>{formik.errors.soDT}</Form.Error>
            ) : (
              <Form.Error></Form.Error>
            )}
            <Form.Submit>Đăng ký</Form.Submit>
          </Form.Base>
          <Form.TextSmall>
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <Form.Link to="/">Điều khoản Sử dụng</Form.Link> và{" "}
            <Form.Link to="/">Chính sách Bảo mật</Form.Link> của chúng tôi.
          </Form.TextSmall>
          <Form.Text>
            Bạn có tài khoản? &nbsp;
            <Form.Link to={ROUTES.SIGN_IN}>Đăng nhập</Form.Link>
          </Form.Text>
        </Form.Container>
      </Form.Overlay>
      <FooterContainer />
    </>
  );
}
