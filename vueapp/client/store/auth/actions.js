import client from "@client/utils/axios";

export const SET_AUTH = "SET_AUTH";
export const POST_LOGIN = "POST_LOGIN";
export const POST_REGISTER = "POST_REGISTER";

export default {
  [POST_REGISTER]: (context, data) => client.post("auth/register", data),
  [POST_LOGIN]: (context, data) => client.post("auth/login", data)
  //[POST_ADD_WORKER]: (context, data) => client.post("auth/loginte", data),
};
