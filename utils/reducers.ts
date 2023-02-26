import type { APODDataType } from "./types";

export type ACTIONTYPE =
  | {
      type: "FETCH_SUCCESS";
      payload: { data: APODDataType; error: string };
      date: string;
    }
  | { type: "FETCH_ERROR"; payload: string };

export const apodState = {
  data: {
    url: "",
    title: "",
    explanation: "",
    date: "",
    copyright: "",
    hdurl: "",
  },
  pictureDate: "",
  error: "",
};

/**
 * Reducer for managing picture's state object
 * @param state - initial state object
 * @param action - object containing type and payload
 * @returns switch statement returns success, error or default state
 */

export const apodReducer = (state: typeof apodState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        pictureDate: action.date,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        data: {},
        pictureDate: "",
        error: "Error occured.",
      };
    default:
      return state;
  }
};
