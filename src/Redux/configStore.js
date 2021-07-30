import { applyMiddleware, combineReducers, createStore } from "redux";

// middleware saga
import createMiddlewareSaga from "redux-saga";
import { RootSaga } from "./saga/rootSaga";
import thunk from "redux-thunk";

import coursesReducer from "./reducers/coursesReducer";
import skeletonReducer from "./reducers/skeletonReducer";
import { LoginReducer } from "./reducers/loginReducer";
import categoryReducer from "./reducers/categoryReducer";
import { themeManager } from "./reducers/themeReducer";
import { UserManagerReducer } from "./reducers/userManagerReducer";
import { CoursesManagerReducer } from "./reducers/coursesManagerReducer";

const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
  themeManager,
  coursesReducer,
  skeletonReducer,
  LoginReducer,
  categoryReducer,
  UserManagerReducer,
  CoursesManagerReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(middlewareSaga, thunk)
);
// Gọi saga
middlewareSaga.run(RootSaga);
