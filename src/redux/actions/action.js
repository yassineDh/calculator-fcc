import {
  DISPLAY_ON_SCREEN,
  RESET_SCREEN,
  DISPLAY_RESULT,
  CLEAN_EXP,
} from "../types/types";

export const displayOnScreen = (data) => {
  return {
    type: DISPLAY_ON_SCREEN,
    payload: data,
  };
};

export const resetScreen = () => {
  return {
    type: RESET_SCREEN,
    payload: "0",
  };
};

export const displayResult = (data) => {
  return {
    type: DISPLAY_RESULT,
    payload: data,
  };
};

export const cleanExp = (data) => {
  return {
    type: CLEAN_EXP,
    payload: data,
  };
};
