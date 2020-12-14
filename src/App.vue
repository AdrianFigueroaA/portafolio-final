<template>
  <div id="app">
    
       <Navbar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    
    <router-view/>
  </div>
</template>



<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
  
    Navbar
  }
}
</script>


<style lang="scss">


</style>
