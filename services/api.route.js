class ApiRoute {
  constructor () {
    /**
     * Auth
     */
    const LOGIN = '/api/auth/'
    this.login = LOGIN + 'login'
    this.register = LOGIN + 'register'

    /**
     * Article
     */
    const ARTICLE = '/api/article'
    this.postArticle = ARTICLE + '/create'
    this.getDataArticle = ARTICLE

    /**
     * Article Category
     */
    const ARTICLE_CATEGORY = '/api/article-category'
    this.getDataArticleCategory = ARTICLE_CATEGORY
    this.getDataArticleCategoryById = ARTICLE_CATEGORY + '/'
    this.postArticleCategory = ARTICLE_CATEGORY + '/create'
  }
}

export default new ApiRoute()
