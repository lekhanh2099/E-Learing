import { call, put, takeLatest } from "redux-saga/effects";
import { updateUser } from "../services/userServices";

function* getPageAction(user) {
  let { data } = yield call(updateUser.updateUser, user.user);
  yield put({
    type: "UPDATE_USER_TYPE",
    page: data,
  });
}

export function* flowActionSaga() {
  yield takeLatest("UPDATE_USER_ACTON", getPageAction);
}
