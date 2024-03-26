import { loginSuccess, loginFailure } from "../authSlice";

const loginAsync = (user, password) => {
  return async (dispatch, getState) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        email: user,
        password: password,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch(
        "http://localhost:3001/api/v1/user/login",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const token = await response.json();
      dispatch(loginSuccess(token.body.token));
    } catch (error) {
      dispatch(loginFailure({ message: error.message }));
    }
  };
};

export default loginAsync;
