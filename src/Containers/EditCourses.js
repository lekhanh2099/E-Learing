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
import NotiCourseContainer from "./NotiCourse";
import { GROUP_ID } from "../groupIdManager";
import {
  updateCourseAction,
  uploadImageAction,
} from "../Redux/actionManagerCourse/updateCourseAction";

export default function EditCoursesContainer() {
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  let name = userLogin.taiKhoan;
  const dispatch = useDispatch();
  const [userCreate, setUserCreate] = useState(name);
  const { listCourses } = useSelector((state) => state.coursesReducer);
  const { courseClick } = useSelector((state) => state.UserManagerReducer);
  const [course, setCourse] = useState(courseClick);
  useEffect(() => {
    formik.setFieldValue("maDanhMucKhoaHoc", "BackEnd");
    formik.setFieldValue("maNhom", course.maNhom);
    formik.setFieldValue("maKhoaHoc", course.maKhoaHoc);
    formik.setFieldValue("biDanh", course.biDanh);
    formik.setFieldValue("tenKhoaHoc", course.tenKhoaHoc);
    formik.setFieldValue("moTa", course.moTa);
    formik.setFieldValue("ngayTao", course.ngayTao);
    setCourse(courseClick);
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
    formik.setFieldValue("hinhAnh", e.target.files[0].name);

    const frm = new FormData();
    frm.append("File", e.target.files[0], e.target.files[0].name);
    frm.append("tenKhoaHoc", formik.values.tenKhoaHoc);
    const action = uploadImageAction(frm);
    dispatch(action);
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
      maNhom: "",
      biDanh: "",
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      hinhAnh: "",
      taiKhoanNguoiTao: userCreate,
      ngayTao: "",
      luotXem: 0,
      danhGia: 0,
    },
    validationSchema: Yup.object().shape({
      // maDanhMucKhoaHoc: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // biDanh: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // maKhoaHoc: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // tenKhoaHoc: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // moTa: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // taiKhoanNguoiTao: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // maNhom: Yup.string().required("M?? nh??m!"),
      // ngayTao: Yup.string().required("Tr?????ng b???t bu???c ph???i nh???p !"),
      // hinhAnh: Yup.mixed().required("B???n ph???i ch???n h??nh ???nh cho kh??o h???c"),
    }),
    onSubmit: (values) => {
      // Handle value to formData with image file
      const action = updateCourseAction(values);
      dispatch(action);

      const frm = new FormData();
      frm.append("File", selectedFile, selectedFile.name);
      frm.append("tenKhoaHoc", formik.values.tenKhoaHoc);
      const action2 = uploadImageAction(frm);
      dispatch(action2);
    },
  });
  const { dataNotification } = useSelector((state) => state.coursesReducer);

  return (
    <Manager.Container>
      {dataNotification.status ? <NotiCourseContainer /> : null}
      <Manager.Title className="create">
        ??i???u ch???nh ho???c c???p nh???t th??ng tin kho?? h???c
      </Manager.Title>
      <Form.FormBox onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Form.Input>
                  <FormControl variant="filled" className="selected-input">
                    <InputLabel>Danh m???c kho?? h???c</InputLabel>
                    <Select
                      name="maDanhMucKhoaHoc"
                      defaultValue={formik.values.maDanhMucKhoaHoc}
                      onChange={handleChange}
                    >
                      {listCourses.map((course, index) => {
                        return (
                          <Form.ItemValueSelected key={index} value={course}>
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
                    <InputLabel>M?? nh??m</InputLabel>
                    <Select
                      name="maNhom"
                      defaultValue={formik.values.maNhom}
                      onChange={handleChangeIdCourse}
                    >
                      {GROUP_ID?.map((id, index) => {
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
              </Grid>
            </Grid>
            <Form.Input>
              <TextField
                name="maKhoaHoc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="M?? kho?? h???c"
                placeholder="M?? kho?? h???c"
                value={formik.values.maKhoaHoc}
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
                label="B?? danh"
                placeholder="Nh???p b?? danh"
                value={formik.values.biDanh}
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
                label="T??n kho?? h???c"
                placeholder="Nh???p t??n kho?? h???c"
                value={formik.values.tenKhoaHoc}
              />
            </Form.Input>
            {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc ? (
              <Form.Error>{formik.errors.tenKhoaHoc}</Form.Error>
            ) : null}
            <Form.Input>
              <TextField
                className="detaiCourse"
                name="moTa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="M?? t???"
                disabled
                InputProps={{
                  startAdornment: (
                    <TextareaAutosize
                      name="moTa"
                      value={formik.values.moTa}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      variant="filled"
                      label="M?? t???"
                      placeholder="Chi ti???t kho?? h???c"
                    />
                  ),
                }}
              />
            </Form.Input>
            {formik.touched.moTa && formik.errors.moTa ? (
              <Form.Error>{formik.errors.moTa}</Form.Error>
            ) : null}

            <Form.Input>
              <TextField
                name="ngayTao"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                label="Ng??y t???o"
                placeholder="Ng??y t???o"
                defaultValue={course.ngayTao}
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
                label="Ng?????i t???o"
                placeholder="Ng?????i t???o"
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
                      <label for="picker-image">Ch???n ???nh</label>
                    </Form.PickerFile>
                  ),
                }}
              />
            </Form.Input>
            {formik.touched.hinhAnh && formik.errors.hinhAnh ? (
              <Form.Error>{formik.errors.hinhAnh}</Form.Error>
            ) : null}

            <Form.TitlePreview>H??nh ???nh m???i c???a kho?? h???c</Form.TitlePreview>
            <Form.Preview>
              {preview ? (
                <Form.ImgaePreview src={preview} alt="H??nh ???nh kho?? h???c" />
              ) : (
                <Form.SubTitlePreview for="picker-image">
                  B???n ch??a ch???n ???nh
                </Form.SubTitlePreview>
              )}
            </Form.Preview>
            <Form.TitlePreview>H??nh ???nh c??</Form.TitlePreview>
            <Form.Preview>
              <Form.ImgaePreview src={course.hinhAnh} alt="H??nh ???nh kho?? h???c" />
            </Form.Preview>
          </Grid>
        </Grid>
        <Form.Submit className="add" type="submit">
          Th??m kho?? h???c
        </Form.Submit>
      </Form.FormBox>
    </Manager.Container>
  );
}
