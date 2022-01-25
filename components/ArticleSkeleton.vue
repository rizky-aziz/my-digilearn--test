<template>
  <div>
    <b-row class="my-3 justify-content-center">
      <b-col v-for="n in meta.size" :key="n" cols="12" md="4" class="mt-4">
        <Skeleton animation="wave" :loading="true" height="160px" />
        <div class="mt-2">
          <Skeleton animation="wave" :loading="true" height="20px" width="160px" />
        </div>
        <div class="mt-2">
          <Skeleton animation="wave" :loading="true" height="20px" width="250px" />
        </div>
        <div class="mt-2">
          <Skeleton animation="wave" :loading="true" height="20px" width="200px" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'
export default {
  name: 'ArticleSkeleton',
  components: { Skeleton },
  props: {
    meta: {
      type: Object,
      default: null
    }
  }
}
</script>
