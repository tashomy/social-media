import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //login
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //signup
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log("natasa");
    console.log(error);
  }
};
