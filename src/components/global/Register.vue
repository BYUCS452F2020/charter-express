<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Register</p>
      <button
        type="button"
        class="delete"
        @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
      <b-field v-if="isCompany == 'true'" label="Company Name">
        <b-input
          v-model="companyName"
          placeholder="Company Name"
          required />
      </b-field>

      <b-field label="First Name">
        <b-input
          v-model="firstName"
          placeholder="First Name"
          required />
      </b-field>

      <b-field label="Last Name">
        <b-input
          v-model="lastName"
          type=""
          placeholder="Last Name"
          required />
      </b-field>

      <b-field label="Email">
        <b-input
          v-model="email"
          type="email"
          placeholder="Your email"
          required />
      </b-field>

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
      <div class="block">
        <b-radio v-model="isCompany"
                 name="type"
                 native-value="false">
          Customer
        </b-radio>
        <b-radio v-model="isCompany"
                 name="type"
                 native-value="true">
          Company
        </b-radio>
      </div>
      <b-message
        v-if="error !== ''"
        type="is-danger">
        {{ error }}
      </b-message>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$emit('close')">Close</button>
      <button class="button is-primary" @click="sendRegisterRequest()">Register</button>
    </footer>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      isCompany: false,
      firstName: null,
      lastName: null,
      email: null,
      username: '',
      password: '',
      companyName: null,
      error: ''
    }
  },
  methods: {
    async sendRegisterRequest () {
      this.error=''
      try{
        const response = await AuthenticationService.registerPerson({
          type: this.isCompany ? 'Employee' : 'Customer',
          username: this.username,
          password: this.password,
          email: this.email,
          company_name: this.isCompany ? this.companyName : null,
          access_level: this.isCompany ? 1 : 0
        })
        this.$store.dispatch('setToken', 'faketoken')
        this.$store.dispatch('setUser', {username: response.data.user, company_id: response.data.company_id})
        this.$store.dispatch('setAccessLevel', response.data.access_level)
        this.$emit('close')
      }catch(error){
        this.error = error.response.data.error
      }
    }
  }
}
</script>