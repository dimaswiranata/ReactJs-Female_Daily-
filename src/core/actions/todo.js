import SERVICES from "../services";

const getTodo = () => {
  return new Promise((resolve,reject) => {
    return SERVICES.todo.getTodo()
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export default {
  getTodo
}