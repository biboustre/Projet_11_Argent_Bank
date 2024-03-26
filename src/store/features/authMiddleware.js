import { profileAsync } from "./profileAsync";

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/loginSuccess") {
    store.dispatch(profileAsync(action.payload));
  }
  return next(action);
};
