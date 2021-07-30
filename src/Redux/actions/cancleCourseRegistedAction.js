import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { getInfoRegisterUserAction } from "./getInfoRegisterUserAction";

export const cancleCourseRegistedAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
        method: "POST",
        data: data,
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
      const action = getInfoRegisterUserAction();
      dispatch(action);
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
