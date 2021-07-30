import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import {
  GET_INFO_COURSES,
  GET_INFO_URL,
} from "../constants/CourseManager/CoursesManagerConstants";

export const getInfoCourseAction = (courseId) => {
  return async (dispatch) => {
    try {
      const courseList = await axios({
        url: GET_INFO_URL.LIST_STUDENTS,
        method: "POST",
        data: courseId,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });

      const courseWaitingList = await axios({
        url: GET_INFO_URL.LIST_WAITING,
        method: "POST",
        data: courseId,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });

      const courseUnRegistration = await axios({
        url: GET_INFO_URL.LIST_UNREGISTERED,
        method: "POST",
        data: courseId,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      const data = {
        courseList: courseList.data,
        courseWaitingList: courseWaitingList.data,
        courseUnRegistration: courseUnRegistration.data,
      };
      dispatch({
        type: GET_INFO_COURSES,
        data,
      });
    } catch (error) {
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          error: "Lấy danh sách thất bại",
          theme: "danger",
        },
      });
    }
  };
};
