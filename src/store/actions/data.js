import { LOAD_DATA } from "../types";
import axios from "configs/axios";

export const loadData = (url, data) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: LOAD_DATA,
      payload: {
        [data]: response.data,
      },
    });
    return response.data;
  });
};