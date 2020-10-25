<template>
  <div>
    <b-navbar class="is-black">
      <template slot="brand">
        <b-navbar-item>
          <!-- padding is all -->
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item>
          <router-link to="/">
            Home
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="Services">
            Services
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="Upcoming">
            Upcoming Trips
          </router-link>
        </b-navbar-item>
        <b-navbar-item v-if="$store.state.access_level>0">
          <router-link to="CreateCharter">
            Create a Charter
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="Contact">
            Contact Us
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="Blog">
            Blog
          </router-link>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div v-if="!$store.state.isUserLoggedIn" class="buttons">
            <a class="button is-primary"
               @click="registerModal()">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"
               @click="loginModal()">
              Log in
            </a>
          </div>
          <div v-else class="buttons">
            <a class="button is-primary"
               @click="logout()">
              Log out
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import LoginModal from '@/components/global/Login'
import RegisterModal from '@/components/global/Register'
export default {
  data() {
    return {
      isLoginActive: false
    }
  },
  methods: {
    loginModal() {
      this.$buefy.modal.open({
        parent: this,
        component: LoginModal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })},
    registerModal() {
      this.$buefy.modal.open({
        parent: this,
        component: RegisterModal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })},
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setAccessLevel', 0)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
