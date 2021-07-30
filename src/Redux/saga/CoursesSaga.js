import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  GET_LIST_COURSES_ACTION,
  GET_LIST_COURSES_TYPE,
} from "../constants/Courses/ConstantsCourses";

import { getApiListCourses } from "../services/coursesServices";

function* getListCoursesAction() {
  yield put({
    type: "SHOW_SKELETON",
  });
  yield delay(2000);
  let { data } = yield call(getApiListCourses.getApiListCourses);
  yield put({
    type: GET_LIST_COURSES_TYPE,
    listCourses: data,
  });
  yield put({
    type: "HIDE_SKELETON",
  });
}

export function* flowActionSaga() {
  yield takeLatest(GET_LIST_COURSES_ACTION, getListCoursesAction);
}
