<template>
  <div>
    <!-- Navigation Bar Start -->
    <b-navbar toggleable="lg" type="light" variant="white" class="border-bottom " fixed="top">
      <b-container fluid>
        <b-navbar-brand href="/home">
          <b-img src="@/assets/images/brand-logo.svg" />
          <span class="text-muted h6">| Assessment</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" class="border-0 p-0">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="x" font-scale="1.5" />
            <b-icon v-else icon="list" font-scale="1.5" />
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="text-center">
            <NuxtLink to="/home" :class="$route.name == 'IndexPage' ? 'nuxt-link-exact-active nuxt-link-active nav-link ml-0 ml-md-5' : 'nav-link ml-0 ml-md-5'">
              Home
            </NuxtLink>
            <NuxtLink to="/article" class="nav-link ml-0 ml-md-5">
              Article
            </NuxtLink>
            <NuxtLink to="/create" class="nav-link ml-0 ml-md-5">
              Create
            </NuxtLink>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto text-center">
            <b-nav-item v-if="!statusUser" class="text-link" @click="$bvModal.show('modal-login')">
              Login
            </b-nav-item>
            <b-nav-item v-else class="text-link" @click="logout">
              Logout
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- Navigation Bar End -->
    <AuthLogin />
    <AuthRegister />
  </div>
</template>

<script>
export default {
  data () {
    return {
      statusUser: false
    }
  },

  mounted () {
    const user = localStorage.getItem('user')

    if (user) {
      this.statusUser = true
    }
  },

  methods: {
    logout () {
      this.$bvModal.msgBoxConfirm('Are you sure you want to logout?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'md',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2 border-0',
        headerClass: 'border-0',
        hideHeaderClose: true,
        noCloseOnBackdrop: true,
        centered: false
      })
      .then((result) => {
        if (result) {
          localStorage.removeItem('user')
          this.$router.push('/')
          this.statusUser = false
          this.$toast.warning('Logout Successfully!', {
            pauseOnFocusLoss: false,
            pauseOnHover: false
          })
        }
      })
        .catch(() => {
        this.$toast.error('Logout Failed!', {
          pauseOnFocusLoss: false,
          pauseOnHover: false
        })
      })
    }
  }
}
</script>
