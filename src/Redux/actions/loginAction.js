import axios from "axios";
import { history } from "../../App";
import {
  ACCESSTOKEN,
  SHOW_NOTIF_TYPE,
  USER_LOGIN,
} from "../../Constants/setting";
import {
  LOGIN_ACTION,
  LOGIN_FAIL_ACTION,
  LOGIN_URL,
} from "../constants/Login/ConstantsLogin";
import * as ROUTES from "../../Constants/routes";

export const loginAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: LOGIN_URL,
        method: "POST",
        data: userLogin,
      });
      dispatch({
        type: LOGIN_ACTION,
        tenDangNhap: result.data.taiKhoan,
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Chào mừng bạn trở lại",
          theme: "success",
        },
      });
      if (result.data.maLoaiNguoiDung === "GV") {
        history.replace(ROUTES.ADMIN);
      } else {
        history.replace(ROUTES.BROWSER);
      }
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
    } catch (errors) {
      dispatch({
        type: LOGIN_FAIL_ACTION,
        error: errors,
      });
    }
  };
};
