import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { CREATE_USERS_URL } from "../constants/UserManager/UserManagerConstants";

export const createUserAction = (user) => {
  return async (dispatch) => {
    try {
      await axios({
        url: CREATE_USERS_URL,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Thêm giáo viên thành công!",
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
