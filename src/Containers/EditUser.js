/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { EditUserGroup, Form } from "../Components";
import { Container, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleUpdateUserAction } from "../Redux/actions/handleUpdateUserAction";

export default function EditUserContainer({ setOpenPopupEdituser }) {
  const dispatch = useDispatch();
  const { user, groupId } = useSelector((state) => state.UserManagerReducer);
  const [userValue, setUserValue] = useState(user);
  useEffect(() => {
    setUserValue(user);
    formik.setFieldValue("taiKhoan", userValue.taiKhoan);
    formik.setFieldValue("maLoaiNguoiDung", userValue.maLoaiNguoiDung);
    formik.setFieldValue("maNhom", groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => setUserValue(user);
  }, []);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      matKhau: Yup.string()
        .required("Bạn chưa nhập mật khẩu mới")
        .min(8, "Mật khẩu tối thiểu 8 kí tự")
        .max(32, "Mật khẩu tối đa 32 kí tự"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      soDt: Yup.string()
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
      const action = handleUpdateUserAction(values);
      dispatch(action);
    },
  });

  const handleChangeName = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
    formik.setFieldValue(event.target.name, event.target.value);
  };

  const handleChangeEmail = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
    formik.setFieldValue(event.target.name, event.target.value);
  };
  const handleChangeNumberPhone = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
    formik.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <EditUserGroup.Overlay>
      <EditUserGroup.Title>Chỉnh sửa thông tin người dùng</EditUserGroup.Title>
      <Container fixed>
        <Form.Base onSubmit={formik.handleSubmit}>
          <Form.Input>
            <TextField
              name="taiKhoan"
              onBlur={formik.handleBlur}
              label="Tên tài khoản"
              placeholder="Tên tài khoản"
              variant="filled"
              value={userValue.taiKhoan}
              disabled
            />
            <span className="material-icons">person</span>
          </Form.Input>
          <Form.Error></Form.Error>

          <Form.Input>
            <TextField
              name="matKhau"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Mật khẩu mới"
              placeholder="Mật khẩu mới"
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
              onChange={handleChangeName}
              onBlur={formik.handleBlur}
              label="Họ và tên"
              placeholder="Họ và tên"
              variant="filled"
              value={userValue.hoTen}
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
              onChange={handleChangeEmail}
              onBlur={formik.handleBlur}
              label="Email"
              placeholder="Email"
              variant="filled"
              value={userValue.email}
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
              name="soDt"
              onChange={handleChangeNumberPhone}
              label="Số điện thoại"
              placeholder="Số điện thoại"
              variant="filled"
              value={userValue.soDt}
            />
            <span className="material-icons">phone</span>
          </Form.Input>
          {formik.touched.soDt && formik.errors.soDt ? (
            <Form.Error>{formik.errors.soDt}</Form.Error>
          ) : (
            <Form.Error></Form.Error>
          )}
          <Form.Input>
            <Form.Wrapper display="flex" align="center" justify="space-between">
              <TextField
                name="maNhom"
                label="Mã nhóm hiện tại"
                placeholder="Mã nhóm hiện tại"
                variant="filled"
                disabled
                value={groupId}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                name="maLoaiNguoiDung"
                onChange={handleChangeNumberPhone}
                label="Loại người dùng"
                placeholder="Loại người dùng"
                variant="filled"
                value={userValue.maLoaiNguoiDung}
                disabled
              />
            </Form.Wrapper>
            <Form.Error>
              Mã nhóm và loại người dùng không được thay đổi!
            </Form.Error>
          </Form.Input>
          <Form.Submit type="submit">Cập nhật</Form.Submit>
        </Form.Base>
      </Container>
    </EditUserGroup.Overlay>
  );
}
