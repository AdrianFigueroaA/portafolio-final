<template>
  <div id="app">
    
       <Navbar />
      
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
     <Contacto />
  </div>
</template>



<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Contacto from '@/components/Contacto.vue'

export default {
  name: 'App',
  components: {
  
    Navbar,
    Contacto
    
  }
}
</script>


<style lang="scss">

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}


</style>

