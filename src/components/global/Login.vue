<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
      <button
        type="button"
        class="delete"
        @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
      <b-field label="Username">
        <b-input
          v-model="username"
          type="username"
          placeholder="Username"
          required />
      </b-field>

      <b-field label="Password">
        <b-input
          v-model="password"
          type="password"
          password-reveal
          placeholder="Your password"
          required />
      </b-field>
      
      <b-checkbox>Remember me</b-checkbox>

      <b-notification
        type="is-danger"
        has-icon
        :value="error"
        aria-close-label="Close notification"
        role="alert">
        {{ error }}
      </b-notification>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$emit('close')">Close</button>
      <button class="button is-primary" @click="sendLoginRequest()">Login</button>
    </footer>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async sendLoginRequest () {
      console.log("ummm")
      try{
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', 'faketoken')
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setAccessLevel', response.data.access_level)
        this.$emit('close')
      }catch(error){
        this.error = error.response.data.error
      }
    },
  }
}
</script>