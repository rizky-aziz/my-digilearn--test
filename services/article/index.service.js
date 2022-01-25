import axios from '../axios.service'
import ApiRoute from '../api.route'
import config from '@/nuxt.config'

const API_URL = config.axios.baseURL

class ArticleService {
    getData (filter, size, page) {
        return axios.get(API_URL + ApiRoute.getDataArticle, {
            params: {
                filter,
                size,
                page

            }
        })
    }

    getArticleCategory () {
        return axios.get(API_URL + ApiRoute.getDataArticleCategory)
    }

    postArticle (formData) {
        const form = new FormData()

        form.append('title', formData.title)
        form.append('short_description', formData.short_description)
        form.append('description', formData.description)
        form.append('category_id', formData.category_id)
        form.append('is_visible', formData.is_visible)
        form.append('image', formData.image)

        return axios.post(API_URL + ApiRoute.postArticle, form)
    }
}

export default new ArticleService()
