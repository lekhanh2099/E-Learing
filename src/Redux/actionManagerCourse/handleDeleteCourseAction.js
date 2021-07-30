import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { DELETE_COURSE_URL } from "../constants/CourseManager/CoursesManagerConstants";
import { getAllListCoursesAction } from "./getAllCoursesAction";

export const handleDeleteCourseAction = (courseId, groupId) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `${DELETE_COURSE_URL}${courseId}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: response.data,
          theme: "success",
        },
      });

      const _action = getAllListCoursesAction(groupId);
      dispatch(_action);
    } catch (error) {
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: error.response.data,
          theme: "danger",
        },
      });
    }
  };
};
