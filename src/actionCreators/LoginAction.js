import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/users`;
// const url = `${process.env.URL_HOSTING_APP}/users`;

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/login`, data);
      const output = response.data;
      console.log(output);
      if (output.status === "success") {
        dispatch({
          type: "AUTH_LOGIN",
          payload: output.data.token,
        });
      } else {
        dispatch({
          type: "AUTH_LOGIN_FAIL",
          payload: output.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/register`, data);
      const output = response.data;
      // console.log(output)
      if (output.status === "success") {
        dispatch({
          type: "AUTH_REGISTER",
          payload: output.message,
        });
      }
    } catch (error) {
      const output = error.response.data;
      // console.log(output)
      if (output.message) {
        dispatch({
          type: "AUTH_REGISTER_FAIL",
          payload: output.message,
        });
      } else {
        dispatch({
          type: "AUTH_REGISTER_INVALID",
          payload: output.error,
        });
      }
    }
  };
};

export const logout = () => {
  return {
    type: "AUTH_LOGOUT",
  };
};
