import axios from 'axios'

axios.interceptors.request.use(
  function (config) {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user != null) {
      config.headers.Authorization = 'Bearer ' + user.token
    }

    return config
  },

  function (error) {
    return Promise.reject(error)
  }
)

export default axios
