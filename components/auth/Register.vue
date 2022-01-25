<template>
  <b-modal id="modal-register" header-class="d-md-none border-0" modal-class="slide-in-bottom" body-class="px-5 py-4 py-md-5 py-sm-4" hide-footer no-stacking no-close-on-backdrop>
    <template #modal-header-close>
      <b-icon icon="x" font-scale="1" />
    </template>
    <b-row>
      <b-col cols="12">
        <h4>Create Account</h4>
      </b-col>
      <b-col cols="12">
        <h6>Have an account? <span class="text-danger cursor-pointer" @click="$bvModal.show('modal-login')">Login</span></h6>
      </b-col>
    </b-row>
    <b-form class="mt-4" @submit.prevent="register">
      <b-form-row>
        <b-col cols="12">
          <b-alert variant="danger" :show="statusAuth" fade class="text-capitalize">
            {{ messageError }}
          </b-alert>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-md-12">
          <label for="fullname">Fullname</label>
          <input v-model="formData.name" type="fullname" class="form-control" placeholder="Entry your fullname" required>
        </b-form-group>
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
            Create Account <b-spinner v-show="loading" small />
          </b-button>
          <b-button type="submit" variant="danger" size="md" block class="d-md-none">
            Create Account <b-spinner v-show="loading" small />
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
        name: '',
        email: '',
        password: '',
        phone: '08213465789'
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

    async register () {
      this.loading = true
      await AuthService.postRegister(this.formData)
      .then(() => {
        this.$router.push('/home')
        this.$bvModal.hide('modal-register')
        this.$bvModal.show('modal-login')
        this.statusAuth = false
        this.$toast.success('Register Successfully', {
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
