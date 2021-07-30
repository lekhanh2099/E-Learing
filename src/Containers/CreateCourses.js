import React, { useEffect, useState } from "react";
import { Form, Manager } from "../Components";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormControl, TextareaAutosize } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { USER_LOGIN } from "../Constants/setting";
import { useDispatch, useSelector } from "react-redux";
import { GET_LIST_COURSES_ACTION } from "../Redux/constants/Courses/ConstantsCourses";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { createCourseAction } from "../Redux/actionManagerCourse/createCourseAction";
import NotiCourseContainer from "./NotiCourse";
import { GROUP_ID } from "../groupIdManager";

export default function CreateCoursesContainer() {
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  let name = userLogin.taiKhoan;
  const dispatch = useDispatch();
  const [userCreate, setUserCreate] = useState(name);
  const { listCourses } = useSelector((state) => state.coursesReducer);
  useEffect(() => {
    setUserCreate(name);
    dispatch({
      type: GET_LIST_COURSES_ACTION,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  // Get image file
  const handleChangeFile = (e) => {
    setSelectedFile(e.target.files[0]);
    formik.setFieldValue(e.target.name, e.target.files[0]);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChangeDate = (date, valueDate, name) => {
    formik.setFieldValue(name, valueDate);
  };

  const handleChange = (event) => {
    formik.setFieldValue(event.target.name, event.target.value.maDanhMuc);
  };

  const handleChangeIdCourse = (event) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const formik = useFormik({
    initialValues: {
      maDanhMucKhoaHoc: "",
      biDanh: "",
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      taiKhoanNguoiTao: userCreate,
      hinhAnh: {},
      maNhom: "",
      ngayTao: "",
      luotXem: 0,
      danhGia: 0,
    },
    validationSchema: Yup.object().shape({
      maDanhMucKhoaHoc: Yup.string().required("Trường bắt buộc phải nhập !"),
      biDanh: Yup.string().required("Trường bắt buộc phải nhập !"),
      maKhoaHoc: Yup.string().required("Trường bắt buộc phải nhập !"),
      tenKhoaHoc: Yup.string().required("Trường bắt buộc phải nhập !"),
      moTa: Yup.string().required("Trường bắt buộc phải nhập !"),
      taiKhoanNguoiTao: Yup.string().required("Trường bắt buộc phải nhập !"),
      maNhom: Yup.string().required("Mã nhóm!"),
      ngayTao: Yup.string().required("Trường bắt buộc phải nhập !"),
    }),
    onSubmit: (values) => {
      // Handle value to formData with image file

      const action = createCourseAction(values);
      dispatch(action);
    },
  });
  const { dataNotification } = useSelector((state) => state.coursesReducer);

  return (
    <Manager.Container>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Manager.Title className="create">Thêm khóa học</Manager.Title>
      <Form.FormBox onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Form.Input>
                  <FormControl variant="filled" className="selected-input">
                    <InputLabel>Danh mục khoá học</InputLabel>
                    <Select name="maDanhMucKhoaHoc" onChange={handleChange}>
                      {listCourses.map((course, index) => {
                        return (
                          <Form.ItemValueSelected
                            name="maDanhMucKhoaHoc"
                            key={index}
                            value={course}
                          >
                            {course.tenDanhMuc}
                          </Form.ItemValueSelected>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Form.Input>
                {formik.touched.maDanhMucKhoaHoc &&
                formik.errors.maDanhMucKhoaHoc ? (
                  <Form.Error>{formik.errors.maDanhMucKhoaHoc}</Form.Error>
                ) : null}
              </Grid>
              <Grid item lg={2} md={12} sm={2} xs={12}>
                <Form.Input>
                  <FormControl variant="filled" className="selected-input">
                    <InputLabel>Mã nhóm</InputLabel>
                    <Select name="maNhom" onChange={handleChangeIdCourse}>
                      {GROUP_ID?.map((id, index) => {
                        return (
                          <Form.ItemValueSelected
                            key={index}
                            value={id}
                            name="maNhom"
                          >
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
              </Grid>
            </Grid>
            <Form.Input>
              <TextField
                name="maKhoaHoc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="Mã khoá học"
                placeholder="Mã khoá học"
              />
            </Form.Input>
            {formik.touched.maKhoaHoc && formik.errors.maKhoaHoc ? (
              <Form.Error>{formik.errors.maKhoaHoc}</Form.Error>
            ) : null}
            <Form.Input>
              <TextField
                name="biDanh"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="Bí danh"
                placeholder="Nhập bí danh"
              />
            </Form.Input>
            {formik.touched.biDanh && formik.errors.biDanh ? (
              <Form.Error>{formik.errors.biDanh}</Form.Error>
            ) : null}
            <Form.Input>
              <TextField
                name="tenKhoaHoc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="Tên khoá học"
                placeholder="Nhập tên khoá học"
              />
            </Form.Input>
            {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc ? (
              <Form.Error>{formik.errors.tenKhoaHoc}</Form.Error>
            ) : null}
            <Form.Input>
              <TextField
                className="input-file"
                name="hinhAnh"
                variant="filled"
                onChange={handleChangeFile}
                id="picker-image"
                type="file"
                accept="image/*"
                InputProps={{
                  endAdornment: (
                    <Form.PickerFile>
                      <label for="picker-image">Chọn ảnh</label>
                    </Form.PickerFile>
                  ),
                }}
              />
            </Form.Input>
            {formik.touched.hinhAnh && formik.errors.hinhAnh ? (
              <Form.Error>{formik.errors.hinhAnh}</Form.Error>
            ) : null}
            <Form.Input>
              <KeyboardDatePicker
                autoOk
                name="ngayTao"
                variant="inline"
                inputVariant="filled"
                label="Ngày tạo"
                value={selectedDate}
                format="dd/MM/yyyy"
                InputAdornmentProps={{ position: "end", color: "white" }}
                onChange={(date, valueDate, name = "ngayTao") => {
                  setSelectedDate(date);
                  return handleChangeDate(date, valueDate, name);
                }}
              />
            </Form.Input>
            {formik.touched.ngayTao && formik.errors.ngayTao ? (
              <Form.Error>{formik.errors.ngayTao}</Form.Error>
            ) : null}
            <Form.Input>
              <TextField
                name="taiKhoanNguoiTao"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="Người tạo"
                placeholder="Người tạo"
                value={userCreate}
              />
            </Form.Input>
            {formik.touched.taiKhoanNguoiTao &&
            formik.errors.taiKhoanNguoiTao ? (
              <Form.Error>{formik.errors.taiKhoanNguoiTao}</Form.Error>
            ) : null}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Form.Input>
              <TextField
                className="detaiCourse"
                name="moTa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="Mô tả"
                disabled
                InputProps={{
                  startAdornment: (
                    <TextareaAutosize
                      name="moTa"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      variant="filled"
                      label="Mô tả"
                      placeholder="Chi tiết khoá học"
                    />
                  ),
                }}
              />
            </Form.Input>
            {formik.touched.moTa && formik.errors.moTa ? (
              <Form.Error>{formik.errors.moTa}</Form.Error>
            ) : null}

            <Form.TitlePreview>Hình ảnh của khoá học</Form.TitlePreview>
            <Form.Preview>
              {preview ? (
                <Form.ImgaePreview src={preview} alt="Hình ảnh khoá học" />
              ) : (
                <Form.SubTitlePreview for="picker-image">
                  Bạn chưa chọn ảnh
                </Form.SubTitlePreview>
              )}
            </Form.Preview>
          </Grid>
        </Grid>
        <Form.Submit className="add" type="submit">
          Thêm khoá học
        </Form.Submit>
      </Form.FormBox>
    </Manager.Container>
  );
}
