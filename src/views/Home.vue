<template>
  <div class="home">
    <Portada />
    <Herramientas />
    <Trabajos />
    <Intereses />
    
  </div>
  
</template>

<script>
import Portada from '@/views/Portada.vue'
import Herramientas from '@/views/Herramientas.vue'
import Trabajos from '@/views/Trabajos.vue'
import Intereses from '@/views/Intereses.vue'

export default {
  name: "Home",
  components: {
    Portada,
    Herramientas,
    Trabajos,
    Intereses,
    
  },
};
</script>

