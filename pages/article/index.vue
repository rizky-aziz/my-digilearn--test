<template>
  <b-row class="justify-content-center">
    <b-col md="9">
      <Article :meta="meta" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        filter: '',
        size: 100,
        page: 1
      }
    }
  }
}
</script>
