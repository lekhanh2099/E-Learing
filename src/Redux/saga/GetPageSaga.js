import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PAGE_ACTION,
  GET_PAGE_TYPE,
} from "../constants/Courses/ConstantsCourses";
import { getDataPage } from "../services/coursesServices";

function* getPageAction(pageNumber) {
  let { data } = yield call(getDataPage.getDataPage, pageNumber.pageNumber);
  yield put({
    type: GET_PAGE_TYPE,
    page: data,
  });
}

export function* flowActionSaga() {
  yield takeLatest(GET_PAGE_ACTION, getPageAction);
}
