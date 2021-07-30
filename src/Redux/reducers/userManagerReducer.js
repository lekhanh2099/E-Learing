/* eslint-disable import/no-anonymous-default-export */
import {
  FIX_USER,
  GET_COURSE_CLICK,
  GET_GROUP_ID,
  GET_LIST_COURSES_REGISTERED_SUCCESS,
  GET_LIST_COURSES_UNREGISTERED_SUCCESS,
  GET_LIST_COURSES_WAITING_COMFIRM_SUCCESS,
  GET_LIST_USERS_ACTION,
  GET_USERS_ACTION,
  GET_USER_CLICK,
  GET_USER_DELETE,
} from "../constants/UserManager/UserManagerConstants";

const initialState = {
  groupId: "GP01",
  listUser: [],
  listStudent: [],
  listTeacher: [],
  listNameUser: [],
  user: {},
  userDelete: "",
  userClick: {},
  courseClick: {},
  listCoursesUnregistered: [],
  listCoursesRegistered: [],
  listCoursesWaitingComfirm: [],
};

export const UserManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_ACTION:
      let list = action.listUser;
      list.forEach((user, index) => {
        user.id = index;
      });
      let dataGV = list.filter((user, index) => user.maLoaiNguoiDung === "GV");
      dataGV.forEach((user, index) => {
        user.id = index;
      });
      let dataHV = list.filter((user, index) => user.maLoaiNguoiDung === "HV");
      dataHV.forEach((user, index) => {
        user.id = index;
      });
      state.listUser = list;
      state.listStudent = dataHV;
      state.listTeacher = dataGV;
      return { ...state };
    case GET_LIST_USERS_ACTION: {
      state.listNameUser = action.listName;
      return { ...state };
    }
    case GET_LIST_COURSES_UNREGISTERED_SUCCESS: {
      let list = action?.listCoursesUnregistered;
      list.forEach((courses, index) => {
        courses.id = index;
      });
      state.listCoursesUnregistered = list;
      return { ...state };
    }
    case GET_LIST_COURSES_REGISTERED_SUCCESS: {
      let list = action?.listCoursesRegistered;
      list.forEach((courses, index) => {
        courses.id = index;
      });
      state.listCoursesRegistered = list;
      return { ...state };
    }
    case GET_LIST_COURSES_WAITING_COMFIRM_SUCCESS: {
      let list = action?.listCoursesWaitingComfirm;
      list.forEach((courses, index) => {
        courses.id = index;
      });

      state.listCoursesWaitingComfirm = list;
      return { ...state };
    }
    case FIX_USER: {
      state.user = action.user;
      return { ...state };
    }
    case GET_USER_DELETE: {
      state.userDelete = action.userDelete;
      return { ...state };
    }
    case GET_USER_CLICK: {
      state.userClick = action.user;
      return { ...state };
    }
    case GET_COURSE_CLICK: {
      state.courseClick = action.course;
      return { ...state };
    }
    case GET_GROUP_ID: {
      state.groupId = action.groupId;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
