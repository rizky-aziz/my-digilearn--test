<template>
  <b-container class="article-detail my-5">
    <b-row v-if="items !== null" class="justify-content-center">
      <b-col col md="8">
        <b-row>
          <h3 class="article-detail__title">
            {{ items.title }}
          </h3>
        </b-row>
        <b-row class="my-3">
          <h5 class="article-detail__sub-title">
            {{ items.short_description }}
          </h5>
        </b-row>
        <b-row class="my-4">
          <b-img :src="items.image ? items.image : 'https://picsum.photos/600/400/?random'" fluid-grow />
        </b-row>
        <b-row>
          <p class="article-detail__description" v-html="items.description" />
        </b-row>
      </b-col>
    </b-row>
    <ArticleDetailSkeleton v-else class="my-3" />
  </b-container>
</template>

<script>
import ArticleDetailSkeleton from '~/components/ArticleDetailSkeleton.vue'
export default {
  name: 'ArticleDetail',
  components: { ArticleDetailSkeleton },
  data () {
    return {
      items: null
    }
  },

  mounted () {
    setTimeout(() => {
      this.items = JSON.parse(localStorage.getItem('articleDetail'))
    }, 2000)
  }
}
</script>
