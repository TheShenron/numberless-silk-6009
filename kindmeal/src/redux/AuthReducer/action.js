import axios from "axios";
import * as types from "./actiontype";
import { saveLocalData } from "../../utils/localStorage";
export const register = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("https://kindmeal-api.herokuapp.com/signup", payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((r) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.SIGNUP_FAILURE, payload: e }));
};

export const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://kindmeal-api.herokuapp.com/login", params, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      console.log(r.data)
      saveLocalData("user", r.data.email);
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};
