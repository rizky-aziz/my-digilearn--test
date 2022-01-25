<template>
  <div class="hero-section">
    <b-container fluid class="hero-section__jumbotron">
      <b-jumbotron class="my-4 p-0">
        <!-- <Skeleton animation="wave" :loading="loading" height="600px"> -->
        <b-img src="@/assets/images/portrait-of-young-asian-woman-smiling-and-holding-smartphone.png" fluid />
        <!-- </Skeleton> -->
      </b-jumbotron>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="text-center my-3">
          <h2>Artikel</h2>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="9">
          <Article :meta="meta" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      meta: {
        filter: '',
        size: 3,
        page: 1
      }
    }
  }
}
</script>
