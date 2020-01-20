import client from "@client/utils/axios";

export const SET_AUTH = "SET_AUTH";
export const POST_ADD_WORKERS = "POST_ADD_WORKERS";
export const GET_ALL_WORKERS = "GET_ALL_WORKERS";
export const REMOVE_WORKERS = "REMOVE_WORKERS";

export default {
  [POST_ADD_WORKERS]: (context, data) => client.post("worker/add", data),
  [GET_ALL_WORKERS]: (context, data) => client.get("worker/list", data),
  [REMOVE_WORKERS]: (context, data) => client.delete("worker/delete/" + data)
};
