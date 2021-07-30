import axios from "axios";
import { ACCESSTOKEN, SHOW_NOTIF_TYPE } from "../../Constants/setting";

export const updateCourseAction = (values) => {
  console.log("Data", values);

  return async (dispatch) => {
    try {
      await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
        data: values,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch({
        type: SHOW_NOTIF_TYPE,
        data: {
          status: true,
          noti: "Khoá học của bạn đã được cập nhật",
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

export const uploadImageAction = (data) => {
  return async (dispatch) => {
    try {
      await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
        data: data,
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      // dispatch({
      //   type: SHOW_NOTIF_TYPE,
      //   data: {
      //     status: true,
      //     noti: response.data,
      //     theme: "success",
      //   },
      // });
    } catch (error) {
      // dispatch({
      //   type: SHOW_NOTIF_TYPE,
      //   data: {
      //     status: true,
      //     noti: error.response.data,
      //     theme: "danger",
      //   },
      // });
    }
  };
};
