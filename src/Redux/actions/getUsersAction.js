import axios from "axios";
import { GET_USERS_ACTION } from "../constants/UserManager/UserManagerConstants";

export const getUsersAction = (groupCourse) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupCourse}`,
        method: "GET",
      });
      dispatch({
        type: GET_USERS_ACTION,
        listUser: result.data,
      });
    } catch (errors) {
      console.error("errors");
    }
  };
};
