import { profileStore, loginFailure } from "../authSlice";

export function profileAsync(token) {
  return async (dispatch, getState) => {

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed Fetch Profile");
      }
      const profile = await response.json();
      dispatch(profileStore(profile.body));
    } catch (error) {
      dispatch(loginFailure({ message: error.message }));
    }
  };
}
