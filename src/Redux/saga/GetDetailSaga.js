import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_DETAIL_ACTION,
  SET_DETAIL,
} from "../constants/Courses/ConstantsCourses";
import { getDetailCourses } from "../services/coursesServices";

function* getDetailAction(course) {
  const idCourses = course.course.maKhoaHoc;
  let { data } = yield call(getDetailCourses.getDetailCourses, idCourses);
  yield put({
    type: SET_DETAIL,
    detailCourse: data,
  });
}

export function* flowActionSaga() {
  yield takeLatest(GET_DETAIL_ACTION, getDetailAction);
}
