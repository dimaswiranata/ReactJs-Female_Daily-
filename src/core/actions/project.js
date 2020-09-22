import SERVICES from "../services";

const getProject = () => {
  return new Promise((resolve,reject) => {
    return SERVICES.project.getProject()
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export default {
  getProject
}