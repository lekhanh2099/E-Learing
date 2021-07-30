/* eslint-disable import/no-anonymous-default-export */
import {
  GET_INFO_COURSES,
  GET_LIST_COURSES,
} from "../constants/CourseManager/CoursesManagerConstants";

const initialState = {
  listCourses: [],
  listStudent: [],
  courseWaitingList: [],
  courseUnRegistration: [],
};

export const CoursesManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COURSES:
      let list = action.listCourses;
      list.forEach((course, index) => {
        course.id = index;
      });
      state.listCourses = list;
      return { ...state };
    case GET_INFO_COURSES: {
      const listStudent = action.data.courseList;
      listStudent.forEach((course, index) => {
        course.id = index;
      });
      const courseWaitingList = action.data.courseWaitingList;
      courseWaitingList.forEach((unregistered, index) => {
        unregistered.id = index;
      });
      const courseUnRegistration = action.data.courseUnRegistration;
      courseUnRegistration.forEach((course, index) => {
        course.id = index;
      });
      state.listStudent = listStudent;
      state.courseWaitingList = courseWaitingList;
      state.courseUnRegistration = courseUnRegistration;
      return { ...state };
    }
    default:
      return state;
  }
};
