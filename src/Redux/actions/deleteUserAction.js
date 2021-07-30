import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";

export const deleteUserAction = (userName) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: result.data,
          theme: "success",
        },
      });
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
