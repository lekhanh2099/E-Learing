import axios from "axios";
import { SHOW_NOTIF_TYPE } from "../../Constants/setting";
import { GET_LIST_USERS_ACTION } from "../constants/UserManager/UserManagerConstants";

export const getListUsersAction = (groupId) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${groupId}`,
        method: "GET",
      });
      dispatch({
        type: GET_LIST_USERS_ACTION,
        listName: result.data,
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: `Danh sách người dùng hiện tại là ${groupId}`,
          theme: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          error: err.response.data,
          noti: `Không có kết quả phù hợp cho nhóm ${groupId}`,
          theme: "danger",
        },
      });
    }
  };
};
