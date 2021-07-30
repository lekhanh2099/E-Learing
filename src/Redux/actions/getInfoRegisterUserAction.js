import axios from "axios";
import { ACCESSTOKEN } from "../../Constants/setting";
import {
  GET_LIST_COURSES_REGISTERED_SUCCESS,
  GET_LIST_COURSES_REGISTERED_URL,
  GET_LIST_COURSES_UNREGISTERED_SUCCESS,
  GET_LIST_COURSES_UNREGISTERED_URL,
  GET_LIST_COURSES_WAITING_COMFIRM_SUCCESS,
  GET_LIST_COURSES_WAITING_COMFIRM_URL,
  GET_LIST_INFO_USER_ERROR,
} from "../constants/UserManager/UserManagerConstants";

export const getInfoRegisterUserAction = (user) => {
  return async (dispatch) => {
    try {
      // Gett courses unregistered
      const listCoursesUnregistered = await axios({
        url: GET_LIST_COURSES_UNREGISTERED_URL,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: GET_LIST_COURSES_UNREGISTERED_SUCCESS,
        listCoursesUnregistered: listCoursesUnregistered.data,
      });
      // Get courses registered
      const listCoursesRegistered = await axios({
        url: GET_LIST_COURSES_REGISTERED_URL,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: GET_LIST_COURSES_REGISTERED_SUCCESS,
        listCoursesRegistered: listCoursesRegistered.data,
      });
      // Get courses waiting comfirm
      const listCoursesWaitingComfirm = await axios({
        url: GET_LIST_COURSES_WAITING_COMFIRM_URL,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: GET_LIST_COURSES_WAITING_COMFIRM_SUCCESS,
        listCoursesWaitingComfirm: listCoursesWaitingComfirm.data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_INFO_USER_ERROR,
      });
    }
  };
};
