import { put, takeLatest } from "redux-saga/effects";
import {
  REMOVE_COURSE_ACTION,
  REMOVE_COURSE_TYPE,
} from "../constants/Courses/ConstantsCourses";
import { removeCourse } from "../services/coursesServices";

function* removeCourseAction({ course }) {
  let data = yield (removeCourse.removeCourse, course);
  yield put({
    type: REMOVE_COURSE_TYPE,
    listCart: data,
  });
}

export function* flowActionSaga() {
  yield takeLatest(REMOVE_COURSE_ACTION, removeCourseAction);
}
