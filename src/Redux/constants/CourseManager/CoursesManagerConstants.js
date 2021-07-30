/**
 * Get courses
 */
export const GET_LIST_COURSES_URL =
  "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=";
export const GET_LIST_COURSES = "GET_LIST_COURSES";

/**
 * Create course
 */
export const CREATE_COURSE_URL =
  "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh";

/**
 * Delete courses
 */
export const DELETE_COURSE_URL =
  "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=";

/**
 * Get all course
 */
export const GET_ALL_URL =
  "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=";

/**
 * Get info course manager
 */
export const GET_INFO_URL = {
  LIST_STUDENTS:
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
  LIST_UNREGISTERED:
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
  LIST_WAITING:
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
};

export const GET_INFO_COURSES = "GET_INFO_COURSES";
