<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Register</p>
        <button
          type="button"
          class="delete"
          @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field v-if="isCompany" label="Company Name">
          <b-input
            :value="companyName"
            placeholder="Company Name"
            required />
        </b-field>

        <b-field label="First Name">
          <b-input
            :value="firstName"
            placeholder="First Name"
            required />
        </b-field>

        <b-field label="Last Name">
          <b-input
            type=""
            :value="lastName"
            placeholder="Last Name"
            required />
        </b-field>

        <b-field label="Email">
          <b-input
            type="email"
            :value="email"
            placeholder="Your email"
            required />
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            :value="password"
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
        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$emit('close')">Close</button>
        <button class="button is-primary">Login</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isCompany: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      companyName: null
    }
  }
}
</script>