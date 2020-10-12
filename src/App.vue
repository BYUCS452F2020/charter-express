<template>
  <div id="app">
    <gam-navbar />
    <div>
      <!-- {{this.$router.currentRoute.path}} -->
      <router-view />
    </div>
    <gam-footer />
  </div>
</template>

<script>
import Navbar from '@/components/global/GamblerNavbar'
import Footer from '@/components/global/GamblerFooter'
export default {
  name: 'App',
  components: {
    'gam-navbar': Navbar,
    'gam-footer': Footer
  }
}
</script>

<style>
.app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.push{
  flex: 1;
}
</style>
