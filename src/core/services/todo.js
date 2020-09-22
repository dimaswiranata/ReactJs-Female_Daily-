import { SERVER } from "./index";

const getTodo = () => {
  return SERVER.get(`/todolist/`);
}

export default {
  getTodo
}