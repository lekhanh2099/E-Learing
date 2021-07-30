import { CHANGE_THEME } from "../../Constants/setting";
import { Primary } from "../../Themes/primary";
import { ThemeManager } from "../../Themes/themeManager";

const initialState = {
  theme: Primary,
  status: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export const themeManager = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      let theme = ThemeManager.find((theme) => {
        return !theme.status === action.theme;
      });
      if (theme) {
        state.theme = { ...theme.theme };
      }
      return { ...state };
    default:
      return { ...state };
  }
};
