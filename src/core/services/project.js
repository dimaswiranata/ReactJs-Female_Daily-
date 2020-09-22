import { SERVER } from "./index";

const getProject = () => {
  return SERVER.get(`/getProjects`);
}

export default {
  getProject
}