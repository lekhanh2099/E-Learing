import axios from "axios";
import { SIGN_UP_ACTION, SIGN_UP_URL } from "../constants/Login/ConstantsLogin";
import {
  ACCESSTOKEN,
  SHOW_NOTIF_TYPE,
  USER_LOGIN,
} from "../../Constants/setting";

export const signUpAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: SIGN_UP_URL,
        method: "POST",
        data: userLogin,
      });
      dispatch({
        type: SIGN_UP_ACTION,
        userSignUp: result.data,
      });
      console.log({
        taiKhoan: result.data.taiKhoan,
        matKhau: result.datamap.matKhau,
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Đăng kí thành công!",
          theme: "success",
        },
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data);
    } catch (errors) {
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          error: errors.response.data,
          noti: "Đăng kí thất bại",
          theme: "warning",
        },
      });
    }
  };
};
