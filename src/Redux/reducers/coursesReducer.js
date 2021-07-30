import {
  DETAIL_COURSE_USER,
  HIDDEN_NOTIFY_TYPE,
  HIDDEN_WARNING,
  SHOW_NOTIF_TYPE,
  SHOW_WARNING,
} from "../../Constants/setting";
import {
  ADD_COURSE_TYPE,
  GET_ALL_COURSES,
  GET_LIST_COURSES_TYPE,
  GET_PAGE_TYPE,
  HANDLE_SEARCH,
  REMOVE_COURSE_TYPE,
  SET_DETAIL,
} from "../constants/Courses/ConstantsCourses";

// Get data from localStorage
let courseDetail = "";
if (localStorage.getItem(DETAIL_COURSE_USER)) {
  let userLogin = JSON.parse(localStorage.getItem(DETAIL_COURSE_USER));
  courseDetail = userLogin;
}

const initialState = {
  listCourses: [],
  allListCourses: [],
  listFound: [],
  searchTerm: "",
  listCart: [],
  detailCourse: courseDetail,
  isWarning: false,
  page: [],
  dataNotification: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COURSES_TYPE: {
      state.listCourses = action.listCourses;
      return { ...state };
    }
    case GET_ALL_COURSES: {
      action.allListCourses.forEach((course) => {
        state.allListCourses.push(course);
      });
      state.allListCourses = action.allListCourses;
      return { ...state };
    }
    case HANDLE_SEARCH: {
      state.listFound = action.data.listFound;
      state.searchTerm = action.data.searchTerm;
      return { ...state };
    }
    case ADD_COURSE_TYPE: {
      const listCartUpdate = [...state.listCart];
      if (listCartUpdate.biDanh !== action.listCart.biDanh) {
        listCartUpdate.push(action.listCart);
      }
      state.listCart = listCartUpdate;
      return { ...state };
    }

    case REMOVE_COURSE_TYPE: {
      const listCartUpdate = [...state.listCart];
      let index = listCartUpdate.findIndex(
        (item) => item.biDanh === action.listCart.biDanh
      );
      if (index !== -1) {
        listCartUpdate.splice(index, 1);
      }
      console.log(listCartUpdate);
      state.listCart = listCartUpdate;
      return { ...state };
    }

    case SET_DETAIL: {
      state.detailCourse = action.detailCourse;

      localStorage.setItem(
        DETAIL_COURSE_USER,
        JSON.stringify(state.detailCourse)
      );
      return { ...state };
    }

    case GET_PAGE_TYPE: {
      state.page = action.page;
      return { ...state };
    }
    case SHOW_NOTIF_TYPE: {
      state.dataNotification = action.data;
      return { ...state };
    }

    case HIDDEN_NOTIFY_TYPE: {
      state.dataNotification.status = false;
      return { ...state };
    }

    case SHOW_WARNING: {
      return { ...state, isWarning: true };
    }
    case HIDDEN_WARNING: {
      return { ...state, dataNotification: false };
    }
    default:
      return { ...state };
  }
};
