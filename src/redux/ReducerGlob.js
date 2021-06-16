import {
  DISPLAY_ON_SCREEN,
  RESET_SCREEN,
  DISPLAY_RESULT,
  CLEAN_EXP,
} from "./types/types";

const initialState = {
  editText: "0",
  cleanText: "",
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ON_SCREEN:
      return {...state,editText: state.editText + action.payload };
    case RESET_SCREEN:
      return { ...state,editText: action.payload };
    case DISPLAY_RESULT:
      return {...state, editText: action.payload+"" };
    case CLEAN_EXP:
      return {...state, cleanText: action.payload };
    default:
      return state;
  }
};

export default editorReducer;
