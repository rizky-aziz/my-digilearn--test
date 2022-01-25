<template>
  <div class="article-section">
    <b-container>
      <b-row v-if="items && !loading" class="my-3">
        <b-col v-for="item in items" :key="item.id" cols="12" md="6" lg="4" class="mt-4">
          <div class="article-card nav-item nav-link p-0" @click="articleDetail(item)">
            <b-card-group>
              <b-card img-top border-variant="white" no-body>
                <div class="img-hover-zoom">
                  <b-card-img :src="item.image" fluid-grow border-variant="dark" alt="image article" />
                </div>
                <b-card-title class="mt-3 mb-0 h5">
                  {{ item.title }}
                </b-card-title>
                <b-card-text>
                  {{ item.short_description }}
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-col>
      </b-row>
      <ArticleSkeleton v-else :meta="meta" class="my-3" />
    </b-container>
  </div>
</template>

<script>
import ArticleService from '@/services/article/index.service'
import ArticleSkeleton from '~/components/ArticleSkeleton.vue'

export default {
  name: 'ArticleComponent',
  components: { ArticleSkeleton },
  middleware: 'menu',
  props: {
    meta: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      items: [],
      loading: false
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    async getData () {
      this.loading = true
      const token = localStorage.getItem('user')
      if (!token) {
        this.$bvModal.show('modal-login')
      } else {
        await ArticleService.getData(this.meta.filter, this.meta.size, this.meta.page)
        .then((response) => {
          this.items = response.data.content
          response.data.content.forEach((element, index) => {
            const data = element.image
            const image = new Image()
            image.onerror = function () {
              element.image = 'https://picsum.photos/600/400/?random=' + index
            }
            image.src = data
          })
          this.loading = false
        })
        .catch(() => {
          this.items = []
        })
      }
    },

    articleDetail (val) {
      localStorage.setItem('articleDetail', JSON.stringify(val))
      this.$router.push({ name: 'article-id', params: { id: val.id } })
    }
  }
}
</script>
