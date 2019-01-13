<template>
  <div id="app" class="vh-100 bg-light">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: { NavBar }
}
</script>

<style lang="scss">

</style>
