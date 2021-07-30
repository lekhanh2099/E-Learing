import axios from "axios";
import { GET_CATEGORY_ACTION} from "../constants/Courses/ConstantsCourses";

export const getCourseOfCategoryAction = (idCategory) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${idCategory}&MaNhom=GP03`,
        method: "GET",
      });
      dispatch({
        type: GET_CATEGORY_ACTION,
        coursesOfCategory: result.data,
      });
    } catch (errors) {
      console.error("errors");
    }
  };
};

