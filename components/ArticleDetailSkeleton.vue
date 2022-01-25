<template>
  <b-row class="my-3 justify-content-center">
    <b-col v-for="n in 1" :key="n" cols="12" md="8" class="mt-4">
      <Skeleton animation="wave" :loading="true" height="30px" width="588px" />
      <div class="mt-5">
        <Skeleton animation="wave" :loading="true" height="20px" width="250px" />
      </div>
      <div class="mt-2">
        <Skeleton animation="wave" :loading="true" height="20px" width="450px" />
      </div>
      <div class="mt-5">
        <Skeleton animation="wave" :loading="true" height="360px" width="729px" />
      </div>
      <div class="mt-5">
        <Skeleton animation="wave" :loading="true" height="20px" width="560px" />
      </div>
      <div class="mt-2">
        <Skeleton animation="wave" :loading="true" height="20px" width="250px" />
      </div>
      <div class="mt-2">
        <Skeleton animation="wave" :loading="true" height="20px" width="450px" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'
export default {
  name: 'ArticleSkeleton',
  components: { Skeleton }
}
</script>
