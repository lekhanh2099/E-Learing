import { history } from "../../App";
import { HOME } from "../../Constants/routes";
import {
  ACCESSTOKEN,
  HIDDEN_WARNING,
  USER_LOGIN,
} from "../../Constants/setting";
import {
  LOGIN_ACTION,
  LOGIN_FAIL_ACTION,
  LOG_OUT_ACTION,
} from "../constants/Login/ConstantsLogin";

//Kiểm tra localstorage có giá trị hay chưa
let userName = "";
if (localStorage.getItem(USER_LOGIN)) {
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  userName = userLogin.taiKhoan;
}

const stateDefault = {
  tenDangNhap: userName,
  error: "",
  logOutNotification: false,
  logInNotification: false,
  logInFailure: false,
};

export const LoginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      state.tenDangNhap = action.tenDangNhap;

      return { ...state, logInNotification: true };
    }

    case LOG_OUT_ACTION: {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(ACCESSTOKEN);
      let userUpdate = { ...state.tenDangNhap };
      userUpdate = "";
      state.tenDangNhap = userUpdate;
      history.replace(HOME);
      return { ...state, logOutNotification: true };
    }
    case LOGIN_FAIL_ACTION: {
      state.error = action.error.response?.data;
      return { ...state, logInFailure: true };
    }

    case HIDDEN_WARNING: {
      return {
        ...state,
        logInNotification: false,
        logOutNotification: false,
        logInFailure: false,
      };
    }
    case "SIGN_UP_FAIL_TYPE": {
      console.log("UPDATE_USER", action);
      return { ...state };
    }

    default:
      return { ...state };
  }
};
