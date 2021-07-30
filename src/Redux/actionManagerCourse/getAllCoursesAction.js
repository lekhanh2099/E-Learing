import axios from "axios";
import { SHOW_NOTIF_TYPE } from "../../Constants/setting";
import {
  GET_ALL_URL,
  GET_LIST_COURSES,
} from "../constants/CourseManager/CoursesManagerConstants";

export const getAllListCoursesAction = (groupCourse = "GP01") => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${GET_ALL_URL}${groupCourse}`,
        method: "GET",
      });
      dispatch({
        type: GET_LIST_COURSES,
        listCourses: result.data,
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: `Danh sách khoá học hiện tại là ${groupCourse}`,
          theme: "success",
        },
      });
    } catch (error) {
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          error: error.response.data,
          noti: `Không có kết quả phù hợp cho nhóm ${groupCourse} hoặc nhóm này chưa có khoá học được tạo!`,
          theme: "danger",
        },
      });
    }
  };
};
