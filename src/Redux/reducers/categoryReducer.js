import {
  GET_CATEGORY_ACTION,
  SAVE_CATEGORY_ACTION,
} from "../constants/Courses/ConstantsCourses";

const initialState = {
  coursesOfCategory: [],
  category: ["Backend"],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_ACTION: {
      state.coursesOfCategory = action.coursesOfCategory;
      return { ...state };
    }
    case SAVE_CATEGORY_ACTION: {
      state.category = action.category.maDanhMuc;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
