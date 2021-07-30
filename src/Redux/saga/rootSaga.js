import { all } from "@redux-saga/core/effects";
import * as ListCoursesActionSaga from "./CoursesSaga";
import * as GetAllCoursesActionSaga from "./GetListCoursesSaga";
import * as GetDetails from "./GetDetailSaga";
import * as GetDataPage from "./GetPageSaga";
import * as updateUser from "./UserSaga";
import * as registerCourse from "./RegisterCourse";
import * as removeCourse from "./RemoveCourseSaga";

export function* RootSaga() {
  yield all([
    // Theo dõi liên tục các action saga
    ListCoursesActionSaga.flowActionSaga(),
    GetAllCoursesActionSaga.flowActionSaga(),
    GetDetails.flowActionSaga(),
    GetDataPage.flowActionSaga(),
    updateUser.flowActionSaga(),
    registerCourse.flowActionSaga(),
    removeCourse.flowActionSaga(),
  ]);
}
