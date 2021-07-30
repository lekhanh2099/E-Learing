import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_COURSE_TYPE,
  REGISTER_COURSE_ACTION,
} from "../constants/Courses/ConstantsCourses";
import { registerCourse } from "../services/coursesServices";

function* registerCourseAction({ course }) {
  let data = yield (registerCourse.registerCourse, course);
  yield put({
    type: ADD_COURSE_TYPE,
    listCart: data,
  });
}

export function* flowActionSaga() {
  yield takeLatest(REGISTER_COURSE_ACTION, registerCourseAction);
}
