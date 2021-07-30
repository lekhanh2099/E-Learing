import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { getInfoRegisterUserAction } from "./getInfoRegisterUserAction";

export const confirmCourseWaitingAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc",
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
      console.log(error);
    }
  };
};
