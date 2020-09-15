<template>
    <b-navbar class="is-black">
        <template slot="brand">
            <b-navbar-item >
                <router-link to="/">
                    <img
                        src="@/assets/logo.png"
                        alt="Gambler's Express logo"
                    >
                </router-link>
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
            <b-navbar-item>
                <router-link to="Contact">
                    Contact Us
                </router-link>
            </b-navbar-item>
            <b-navbar-item >
                <router-link to="Blog">
                    Blog
                </router-link>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  methods: {
  }
}
</script>
