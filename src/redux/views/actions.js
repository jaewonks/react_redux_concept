import { ADD_VIEW } from "./types";

export const addView = (num) => {
  return {
    type: ADD_VIEW,
    payload: Number(num)
  }
}