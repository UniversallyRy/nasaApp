import { APODDataType } from "./types";

export type ACTIONTYPE =
  | { type: "FETCH_SUCCESS"; payload: { data: APODDataType; error: string } }
  | { type: "FETCH_ERROR"; payload: string };

export const apodState = {
  url: '',
  title: '',
  explanation: '',
  date: '',
  copyright: '',
  hdurl: '',
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
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        data: {},
        error: "Error occured.",
      };
    default:
      return state;
  }
};
