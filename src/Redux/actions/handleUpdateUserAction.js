import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { getUsersAction } from "./getUsersAction";

export const handleUpdateUserAction = (user) => {
  return async (dispatch) => {
    try {
      await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Thông tin tài khoản đã thay đổi thành công",
          theme: "success",
        },
      });
      const action = getUsersAction();
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
