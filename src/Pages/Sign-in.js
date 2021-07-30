import { makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux/actions/loginAction";
import { Form } from "../Components";
import fb from "../Assets/Images/apps/fb.png";
import google from "../Assets/Images/apps/google.png";
import apple from "../Assets/Images/apps/apple.png";
import * as ROUTES from "../Constants/routes";
import HeaderContainer from "../Containers/Header";
import FooterContainer from "../Containers/Footer";
import NotificationLogFailContainer from "../Containers/NotificationLogFail";

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "transparent",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "#ff9800",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
    "& input.MuiInputBase-input.MuiOutlinedInput-input": {
      fontSize: "1.6rem",
    },
    "& label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-outlined":
      {
        fontSize: "1.6rem",
        color: "#ff9800",
      },
  },
}));

export default function SignIn({ props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { logInFailure } = useSelector((state) => state.LoginReducer);

  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống"),
    }),
    onSubmit: (values) => {
      const action = loginAction(values);
      dispatch(action);
    },
  });

  return (
    <>
      {logInFailure ? <NotificationLogFailContainer /> : null}
      <HeaderContainer />
      <Form.Overlay>
        <Form.Container>
          <Form.Title>Đăng nhập</Form.Title>
          <Form.LoginWith>
            <Form.Link to="/">
              <Form.ImgIcon src={fb} alt="Facebook" />
              <Form.Text>Tiếp tục với Facebook</Form.Text>
            </Form.Link>
          </Form.LoginWith>
          <Form.LoginWith>
            <Form.Link to="/">
              <Form.ImgIcon src={google} alt="Google" />
              <Form.Text>Tiếp tục với Google</Form.Text>
            </Form.Link>
          </Form.LoginWith>
          <Form.LoginWith>
            <Form.Link to="/">
              <Form.ImgIcon src={apple} alt="Apple" />
              <Form.Text>Tiếp tục với Apple</Form.Text>
            </Form.Link>
          </Form.LoginWith>
          <Form.Text>Hoặc</Form.Text>
          <Form.Base onSubmit={formik.handleSubmit}>
            <Form.Input>
              <TextField
                name="taiKhoan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={classes.root}
                label="Tài khoản hoặc email"
                placeholder="Tài khoản hoặc email"
                variant="filled"
              />
              <span className="material-icons">mail</span>
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
                required
                className={classes.root}
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
            <Form.Submit>Đăng nhập</Form.Submit>
          </Form.Base>
          <Form.Text>
            hoặc &nbsp;
            <Form.Link to="/">Quên mật khẩu</Form.Link>
          </Form.Text>
          <Form.Text>
            Bạn chưa có tài khoản? &nbsp;
            <Form.Link to={ROUTES.SIGN_UP}>Đăng kí</Form.Link>
          </Form.Text>
        </Form.Container>
      </Form.Overlay>
      <FooterContainer />
    </>
  );
}
