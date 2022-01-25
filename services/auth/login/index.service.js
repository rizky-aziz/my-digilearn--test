import axios from '../../axios.service'
import ApiRoute from '../../api.route'
import config from '@/nuxt.config'

const API_URL = config.axios.baseURL

class AuthServices {
    postLogin (formData) {
        return axios.post(API_URL + ApiRoute.login, formData)
    }

    postRegister (formData) {
        return axios.post(API_URL + ApiRoute.register, formData)
    }
}

export default new AuthServices()
