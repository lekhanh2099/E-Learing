import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { CREATE_COURSE_URL } from "../constants/CourseManager/CoursesManagerConstants";

export const createCourseAction = (values) => {
  let formData = new FormData();
  for (let key in values) {
    if (key !== "hinhAnh") {
      formData.append(key, values[key]);
    } else {
      formData.append("File", values.hinhAnh, values.hinhAnh.name);
    }
  }
  return async (dispatch) => {
    try {
      await axios({
        url: CREATE_COURSE_URL,
        method: "POST",
        data: formData,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Tạo khoá học thành công!",
          theme: "success",
        },
      });
    } catch (error) {
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          error: "Tạo kháo học thất  bại",
          noti: error.response.data,
          theme: "danger",
        },
      });
    }
  };
};
