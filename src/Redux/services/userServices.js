import axios from "axios";
import { ACCESSTOKEN } from "../../Constants/setting";

export class UserService {
  updateUser(user) {
    return axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: user,
      headers: { Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) },
    });
  }
}

export const updateUser = new UserService();
