import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_COURSES,
  GET_ALL_LIST_ACTION,
} from "../constants/Courses/ConstantsCourses";
import { getAllListCourses } from "../services/coursesServices";

function* getAllListCoursesAction() {
  let { data } = yield call(getAllListCourses.getAllListCourses);
  yield put({
    type: GET_ALL_COURSES,
    allListCourses: data,
  });
}

export function* flowActionSaga() {
  yield takeLatest(GET_ALL_LIST_ACTION, getAllListCoursesAction);
}
