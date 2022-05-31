export const loginAction = (user) => {
  return { type: "LOGIN", user };
};
export const logoutAction = () => {
  return { type: "LOGOUT" };
};
export const subscribeAction = (newUser) => {
  return { type: "SUBSCRIBE", user: newUser };
};
