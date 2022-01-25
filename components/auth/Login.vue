<template>
  <b-modal id="modal-login" header-class="d-md-none border-0" modal-class="slide-in-bottom" hide-footer body-class="px-5 py-4 py-md-5 py-sm-4" no-stacking no-close-on-backdrop>
    <template #modal-header-close>
      <b-icon icon="x" font-scale="1" />
    </template>
    <b-row>
      <b-col cols="12">
        <h4>Login</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h6>Don't have an account? <span class="text-danger cursor-pointer" @click="$bvModal.show('modal-register')">Create Account</span></h6>
      </b-col>
    </b-row>
    <b-form class="mt-4" @submit.prevent="login">
      <b-form-row>
        <b-col cols="12">
          <b-alert variant="danger" :show="statusAuth" fade class="text-capitalize">
            {{ messageError }}
          </b-alert>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-md-12">
          <label for="email">Email</label>
          <input v-model="formData.email" type="email" class="form-control" placeholder="Entry your email" required>
        </b-form-group>
        <b-form-group class="col-md-12">
          <label for="password">Password</label>
          <b-input-group>
            <b-form-input v-model="formData.password" :type="passwordFieldType" class="form-control border-right-0" placeholder="Entry your password" required />
            <b-input-group-append class="cursor-pointer" @click="togglePasswordVisibility">
              <b-input-group-text class="bg-white border-left-0">
                <b-icon :icon="passwordToggleIcon" variant="secondary" />
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-form-group class="col-md-12">
          <b-button type="submit" variant="danger" size="md" class="d-none d-md-block">
            Log In <b-spinner v-show="loading" small />
          </b-button>
          <b-button type="submit" variant="danger" size="md" block class="d-md-none">
            Log In <b-spinner v-show="loading" small />
          </b-button>
        </b-form-group>
      </b-form-row>
    </b-form>
  </b-modal>
</template>

<script>
import AuthService from '@/services/auth/login/index.service'

export default {
  data () {
    return {
      loading: false,
      statusAuth: false,
      messageError: '',
      passwordFieldType: 'password',
      passwordToggleIcon: 'eye-fill',
      formData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    togglePasswordVisibility () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      if (this.passwordFieldType === 'password') {
        this.passwordToggleIcon = 'eye-slash-fill'
      } else {
        this.passwordToggleIcon = 'eye-fill'
      }
    },

    async login () {
      this.loading = true
      await AuthService.postLogin(this.formData)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data.content[0]))
        this.$router.push('/home')
        this.$bvModal.hide('modal-login')
        this.statusAuth = false
        this.$toast.success('Login Successfully', {
          pauseOnFocusLoss: false,
          pauseOnHover: false
        })
        this.loading = false
      })
      .catch(() => {
        this.statusAuth = true
        this.loading = false
        this.messageError = 'Invalid Email or Username'
      })
    }
  }
}
</script>
