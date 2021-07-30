import React from "react";
import { Form, Manager } from "../Components";
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../Redux/actions/createUserAction";
import { Container } from "@material-ui/core";
import NotiCourseContainer from "./NotiCourse";

const listIdCourse = [
  "GP01",
  "GP02",
  "GP03",
  "GP04",
  "GP05",
  "GP06",
  "GP07",
  "GP08",
  "GP09",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GP14",
];

export default function CreateUserContainer() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      maLoaiNguoiDung: "HV",
      email: "",
    },
    validationSchema: Yup.object().shape({
      maNhom: Yup.string().required("Vui lòng chọn mã nhóm"),
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
      const action = createUserAction(values);
      dispatch(action);
    },
  });

  const handleChangeIdCourse = (event) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };
  const { dataNotification } = useSelector((state) => state.coursesReducer);

  return (
    <Manager.Container>
      <Container fixed>
        {dataNotification.status ? <NotiCourseContainer /> : null}
        <Manager.Header>Thêm giảng viên </Manager.Header>
        <Form.Base className="form-create-user" onSubmit={formik.handleSubmit}>
          <Form.Input>
            <FormControl variant="filled" className="selected-input">
              <InputLabel>Mã nhóm</InputLabel>
              <Select name="maNhom" onChange={handleChangeIdCourse}>
                {listIdCourse.map((id, index) => {
                  return (
                    <Form.ItemValueSelected key={index} value={id}>
                      {id}
                    </Form.ItemValueSelected>
                  );
                })}
              </Select>
            </FormControl>
          </Form.Input>
          {formik.touched.maNhom && formik.errors.maNhom ? (
            <Form.Error>{formik.errors.maNhom}</Form.Error>
          ) : null}
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
          <Form.Submit>Thêm giảng viên</Form.Submit>
        </Form.Base>
      </Container>
    </Manager.Container>
  );
}
