import axios from 'axios';

import project from "./project";
import todo from "./todo";

export const SERVER = axios.create({
  baseURL: `https://demo7617443.mockable.io`,
})

axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

export default {
  project,
  todo
}