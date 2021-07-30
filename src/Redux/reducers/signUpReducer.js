import { SIGN_UP_ACTION } from "../constants/Login/ConstantsLogin";

const stateDefault = [
  {
    userSignUp: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP03",
      email: "",
    },
  },
];

export const LoginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGN_UP_ACTION: {
      return { ...state };
    }

    default:
      return { ...state };
  }
};
