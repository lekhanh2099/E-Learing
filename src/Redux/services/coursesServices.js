import axios from "axios";
import { ACCESSTOKEN } from "../../Constants/setting";
import {
  GET_ALL_COURSES_URL,
  GET_LIST_COURSES_URL,
  REGISTER_COURSE_URL,
  REMOVE_COURSE_URL,
} from "../constants/Courses/ConstantsCourses";

export class CoursesServices {
  // constructor() {}
  getApiListCourses() {
    return axios({
      url: GET_LIST_COURSES_URL,
      method: "GET",
    });
  }
  getAllListCourses() {
    return axios({
      url: GET_ALL_COURSES_URL,
      method: "GET",
    });
  }
  getDetailCourses(idCourses) {
    return axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${idCourses}`,
      method: "GET",
    });
  }
  getDataPage(pageNumber = 1) {
    return axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pageNumber}&pageSize=4&MaNhom=GP03`,
      method: "GET",
    });
  }
  registerCourse(course) {
    const state = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: course.nguoiTao.taiKhoan,
    };
    return axios({
      url: REGISTER_COURSE_URL,
      method: "POST",
      data: state,
      headers: { Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) },
    });
  }
  removeCourse(course) {
    const state = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: course.nguoiTao.taiKhoan,
    };
    return axios({
      url: REMOVE_COURSE_URL,
      method: "POST",
      data: state,
      headers: { Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) },
    });
  }
}

// Khởi tạo 1 đối tượng tù lớp đối tượng coursesServices
export const getApiListCourses = new CoursesServices();
export const getAllListCourses = new CoursesServices();
export const getDetailCourses = new CoursesServices();
export const getDataPage = new CoursesServices();
export const registerCourse = new CoursesServices();
export const removeCourse = new CoursesServices();
