import { updateProfile, loginFailure } from "../authSlice";

export function profileUpdateAsync(username) {
  return async (dispatch, getState) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${getState().auth.token}`);
      const raw = JSON.stringify({
        userName: username,
      });
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to Update Profile");
      }
      const profile = await response.json();
      dispatch(updateProfile(username));
    } catch (error) {
      console.log("error", error);
      // dispatch(loginFailure({ message: error.message }));
    }
  };
}
