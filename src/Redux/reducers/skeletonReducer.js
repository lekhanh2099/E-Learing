const initialState = {
  isSkeleton: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SKELETON":
      return { ...state, isSkeleton: true };
    case "HIDE_SKELETON":
      return { ...state, isSkeleton: false };
    default:
      return { ...state };
  }
};
